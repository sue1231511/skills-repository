# hook-development ｜ Claude Code Hook 开发 Skill

## 仓库 / 官网
- https://github.com/anthropics/claude-plugins-official/tree/main/plugins/plugin-dev/skills/hook-development

## 功能描述
Anthropic 官方 Hook 开发 Skill。覆盖 PreToolUse、PostToolUse、Stop、SubagentStop、SessionStart 等事件，用于做自动校验、策略约束、上下文注入与工作流自动化。

### 核心特性
- 支持 Prompt-based Hooks 与 Command Hooks
- 可在写文件、执行工具前做校验或阻止
- 可在 Agent 停止前检查任务是否真的完成
- 区分插件 hooks.json 与用户 settings 配置格式

### 适合场景
- 自动 lint / format / 测试
- 防止危险命令或敏感文件修改
- Agent 完成前强制验收
- 启动会话时自动注入项目上下文

## 分类标签
`Claude Code` `Hooks` `Automation` `Agent Skill`
