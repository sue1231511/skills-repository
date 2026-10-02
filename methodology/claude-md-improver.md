# claude-md-improver ｜ CLAUDE.md 质量审计与优化

## 仓库 / 官网
- https://github.com/anthropics/claude-plugins-official/tree/main/plugins/claude-md-management/skills/claude-md-improver

## 功能描述
Anthropic 官方 Skill。扫描项目中的 CLAUDE.md，先做质量评估，再针对缺失的命令、架构、坑点、测试方式等给出定向修改。

### 核心特性
- 支持根目录、子包、monorepo 与本地覆盖 CLAUDE.md
- 从命令、架构、非显然约定、时效性、可执行性等维度检查
- 先输出质量报告，再进行针对性更新
- 强调保持简洁，不把显而易见的代码内容重复进 CLAUDE.md

### 适合场景
- Claude 经常误解项目结构
- 仓库长期迭代后 CLAUDE.md 变旧
- 多包仓库需要分层上下文

## 分类标签
`Claude Code` `CLAUDE.md` `Context` `Agent Skill`
