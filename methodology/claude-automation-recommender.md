# claude-automation-recommender ｜ Claude Code 自动化推荐

## 仓库 / 官网
- https://github.com/anthropics/claude-plugins-official/tree/main/plugins/claude-code-setup/skills/claude-automation-recommender

## 功能描述
Anthropic 官方 Skill。扫描代码库后，针对项目实际技术栈推荐最值得配置的 Claude Code 自动化，包括 Hooks、Subagents、Skills、Plugins 与 MCP Servers。

### 核心特性
- 自动识别语言、框架、数据库、测试、CI/CD 与项目结构
- 每类默认只挑 1–2 个高价值自动化，避免堆垃圾
- 能根据 Supabase、Playwright、GitHub、Sentry 等依赖推荐对应 MCP
- 只读分析，不直接改仓库

### 适合场景
- 新项目初始化 Claude Code
- 给已有仓库补自动化能力
- 不知道 Hook、Skill、Subagent、MCP 应该先上哪个

## 分类标签
`Claude Code` `Automation` `MCP` `Agent Skill`
