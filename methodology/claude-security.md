# claude-security ｜ Claude 官方安全审计 Skill

## 仓库 / 官网
- https://github.com/anthropics/claude-plugins-official/tree/main/plugins/claude-security/skills/claude-security

## 功能描述
Anthropic 官方代码安全 Skill。支持扫描整个代码库、扫描当前分支 / PR / commit 的变更，以及针对发现的问题生成并验证补丁建议。

### 核心特性
- 支持 codebase scan、changes scan、suggest patches 三种工作流
- 使用多 Agent 做扫描、研究、验证与补丁复核
- 可针对一次 commit、分支 diff 或整个仓库
- 输出结构化安全发现与可选补丁

### 适合场景
- 合并前安全检查
- Agent 自动改代码后的二次审计
- 对高风险改动做专项扫描

## 分类标签
`Claude Code` `Security` `Code Audit` `Agent Skill`
