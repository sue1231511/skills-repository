# Code Review Skill ｜ 多语言代码审查 Skill

## 仓库
- **awesome-skills/code-review-skill**

## 功能描述
一套面向 AI Coding Agent 的系统化代码审查 Skill。把 PR Review、架构检查、安全审计、性能检查和语言专项规则整理成可按需加载的工作流，避免代码审查只剩“建议优化可读性”这种废话。

## 核心特性
- 覆盖 React、Vue、Angular、Svelte、TypeScript、Python、Go、Rust、Java、C/C++、C#、Kotlin、Swift、Dart、PHP、Ruby、NestJS、FastAPI、Django、Qt 等
- 提供架构、安全、性能、通用代码质量、常见 Bug 等跨语言指南
- 使用 blocking / important / nit / suggestion / learning / praise 等审查级别
- 适合 PR Review、代码变更审查、架构审查、安全审计、性能审查和团队 Review 规范
- 主 `SKILL.md` 负责路由，按语言或问题类型加载对应 reference，避免一次性塞满上下文
- 附带 PR review 模板、快速 checklist 和 PR analyzer 脚本

## 使用方式
- 让 Agent 使用该 Skill 审查一个 PR
- 指定只看安全、性能、架构或可维护性
- 针对某门语言加载对应审查规范
- 可通过 Skills CLI 安装：`npx skills add awesome-skills/code-review-skill`

## 使用场景
- 审查 Pull Request
- 检查网关、后端服务和前端代码
- 查安全漏洞、并发问题、N+1、XSS、SQL 注入
- 建立统一的团队 Code Review 标准
- 在 AI 改代码前后做二次检查

## 链接
- [GitHub: awesome-skills/code-review-skill](https://github.com/awesome-skills/code-review-skill)

## 分类标签
`代码审查` `Code Review` `AI Agent` `安全审计` `性能`
