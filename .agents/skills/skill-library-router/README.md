# Skill Library Router

给 Agent / Claude Code / Codex 一类工具使用的技能库检索 Skill。

核心设计：

需求 -> 分类路由 -> 分类内搜索 -> 读取少量候选 -> 选择/组合

示例：

    python .agents/skills/skill-library-router/scripts/search_library.py --category video-production --query "宣传片 分镜 remotion"

    python .agents/skills/skill-library-router/scripts/search_library.py --category frontend-design --category design-tools --query "截图还原前端并检查视觉一致性"

搜索脚本动态读取仓库，因此新增普通 Markdown 条目后不需要重新生成静态全集索引。