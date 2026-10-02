#!/usr/bin/env python3
import argparse
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[4]
EXCLUDED_FILES = {"README.md", "uncertain-items.md", "verified-summary.md"}
TOKEN_RE = re.compile(r"[A-Za-z0-9_+.#-]+|[\u4e00-\u9fff]+")

def tokenize(text):
    text = text.lower()
    raw = TOKEN_RE.findall(text)
    out = []
    for tok in raw:
        out.append(tok)
        if re.fullmatch(r"[\u4e00-\u9fff]+", tok) and len(tok) > 1:
            out.extend(tok[i:i+2] for i in range(len(tok)-1))
    return out

def read_entry(path):
    text = path.read_text(encoding="utf-8", errors="ignore")
    lines = text.splitlines()
    title = next((x[2:].strip() for x in lines if x.startswith("# ")), path.stem)
    tags = []
    for line in lines:
        tags.extend(re.findall(r"`([^`]+)`", line))
    description = ""
    for i, line in enumerate(lines):
        if "功能描述" in line:
            for candidate in lines[i+1:i+8]:
                c = candidate.strip()
                if c and not c.startswith("#") and not c.startswith("-"):
                    description = c
                    break
            break
    if not description:
        for line in lines:
            c = line.strip()
            if c and not c.startswith(("#", "-", ">")):
                description = c
                break
    return {
        "path": path.relative_to(ROOT).as_posix(),
        "title": title,
        "description": description,
        "tags": tags,
        "body": " ".join(lines[:120]),
    }

def score(entry, query_tokens):
    fields = [
        (entry["title"], 8.0),
        (entry["path"].replace("/", " "), 6.0),
        (" ".join(entry["tags"]), 5.0),
        (entry["description"], 4.0),
        (entry["body"], 1.0),
    ]
    total = 0.0
    matched = set()
    for text, weight in fields:
        bag = set(tokenize(text))
        for q in query_tokens:
            if q in bag:
                total += weight
                matched.add(q)
    if query_tokens:
        total += 10.0 * len(matched) / max(1, len(set(query_tokens)))
    return total

def main():
    p = argparse.ArgumentParser(description="Search selected skill-library categories only")
    p.add_argument("--category", action="append", required=True)
    p.add_argument("--query", required=True)
    p.add_argument("--limit", type=int, default=5)
    args = p.parse_args()

    query_tokens = tokenize(args.query)
    results = []
    for category in dict.fromkeys(args.category):
        base = ROOT / category
        if not base.is_dir():
            continue
        for path in base.rglob("*.md"):
            if path.name in EXCLUDED_FILES:
                continue
            entry = read_entry(path)
            s = score(entry, query_tokens)
            if s > 0:
                results.append((s, entry))

    results.sort(key=lambda x: (-x[0], x[1]["path"]))
    if not results:
        print("No matching entries found in selected categories.")
        return

    for i, (s, entry) in enumerate(results[:args.limit], 1):
        print(f"{i}. {entry['title']}")
        print(f"   path: {entry['path']}")
        print(f"   score: {s:.1f}")
        if entry["description"]:
            print(f"   why: {entry['description']}")
        if entry["tags"]:
            print("   tags: " + ", ".join(entry["tags"][:10]))
        print()

if __name__ == "__main__":
    main()