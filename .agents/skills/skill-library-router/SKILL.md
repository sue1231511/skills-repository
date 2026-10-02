---
name: skill-library-router
description: Search this repository as a categorized skill/resource library. Use when the user asks to find, choose, compare, recommend, or locate a skill, workflow, tool, prompt, UI resource, video skill, agent resource, MCP resource, memory system, scraper, voice tool, game framework, or other reusable capability stored in this repository. Always route by category first, search only relevant categories, and read full entries only after narrowing candidates.
---

# Skill Library Router

Use this repository as a categorized capability library, not as one giant prompt.

## Core rule

Route first -> search inside the chosen category -> rank candidates -> read only the best matching entries.

Never load or summarize the whole repository before choosing a category.

## Workflow

### 1. Classify the request

Read references/categories.md and select the smallest relevant category set.
Default to one category. Use at most three categories when the task genuinely crosses domains.

Examples:
- screenshot to frontend code -> frontend-design
- motion / UI animation -> frontend-design
- visual QA / design critique -> design-tools
- image / poster / illustration style -> photo-design or creative-visual
- video / trailer / Remotion -> video-production
- Agent / MCP / Claude tooling -> methodology or ai-tools
- long-term memory -> agent-memory
- scraping -> web-scraping
- TTS / voice -> voice-tts
- AI companion -> virtual-companion
- game / roleplay engine -> games
- prompt patterns -> ai-prompts
- token/context reduction -> token-optimization

### 2. Search only inside the selected category

Preferred command:

    python .agents/skills/skill-library-router/scripts/search_library.py --category frontend-design --query "screenshot to frontend code"

Cross-category example:

    python .agents/skills/skill-library-router/scripts/search_library.py --category frontend-design --category design-tools --query "rebuild UI from screenshot and visually verify"

### 3. Narrow before reading

Prefer the top 3-5 candidates. Only then read their Markdown files. Do not read every result.

If the first search is weak:
1. rewrite the query with synonyms;
2. search one adjacent category if justified;
3. only then broaden further.

### 4. Choose by task fit

Rank candidates by:
1. direct match to requested outcome;
2. whether it provides an executable workflow or actual Skill;
3. whether its scope fits the current task;
4. whether it combines cleanly with another candidate.

Do not choose by popularity alone.

### 5. Report compactly

Return the best-fit candidate(s), one-line reason, repository path, and combination/order when multiple skills are complementary.
If the user asks you to perform the task, proceed using the chosen resource instead of stopping at recommendations.

## Constraints

- Never dump the full library into context.
- Never scan every category by default.
- Never invent capabilities from filenames.
- Read an entry before making detailed claims about it.
- Treat notes/, uncertain-items.md, and similar material as unverified unless explicitly requested.
- Prefer verified/formal entries over notes.
- If no good match exists, say so rather than forcing a bad recommendation.

## Maintenance

The search script discovers Markdown files dynamically, so newly added entries are searchable without rebuilding a giant static index.
When repository categories change, update only references/categories.md.