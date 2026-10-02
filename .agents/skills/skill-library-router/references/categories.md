# Skill Library Categories

Use this file only for routing. Do not treat it as the detailed content index.

| Category | Route here for |
|---|---|
| frontend-design | frontend UI, components, CSS, layout, animation, SVG, screenshot-to-code, mobile UI, design implementation |
| design-tools | design review, visual QA, design systems, style extraction, design quality, aesthetic correction |
| photo-design | posters, image styles, photo transformation, editorial visuals, collage, illustration treatments |
| creative-visual | experimental visual interfaces, special visual effects, unusual visual generators |
| video-production | video generation, Remotion, motion graphics, storyboards, image-to-video, editing, explainer video |
| ai-prompts | reusable prompting patterns, prompt optimization, interaction prompts |
| methodology | engineering workflows, Claude skills, MCP building, code review, hooks, agents, development methodology |
| ai-tools | AI applications, agent platforms, plugin ecosystems, utilities, model workbenches |
| agent-memory | long-term memory, graph memory, persistent context, memory infrastructure |
| web-scraping | crawling, scraping, anti-bot, extraction, browser/data collection infrastructure |
| voice-tts | TTS, voice generation, realtime translation, speech tools |
| virtual-companion | AI companions, VTubers, desktop pets, character/relationship systems |
| games | game engines, roleplay systems, LLM games, simulation frameworks |
| marketing-growth | marketing, SEO, acquisition, growth automation |
| token-optimization | token reduction, context compression, prompt/context efficiency |
| chrome-extensions | browser extensions |
| tools | general-purpose utilities that do not fit a more specific category |

## Routing rules

Prefer the category describing the output the user wants, not merely a technology mentioned in the request.

Examples:
- 用 React 做一个很好看的页面 -> frontend-design
- 检查这个页面是不是丑 -> design-tools
- 把照片做成杂志海报 -> photo-design
- 做宣传片 -> video-production
- 写一个 MCP server -> methodology
- 找现成的 Agent 平台 -> ai-tools
- 给 Agent 做长期记忆 -> agent-memory

When two categories are both necessary, search both, but keep the candidate set small.