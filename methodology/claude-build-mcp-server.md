# build-mcp-server ｜ Claude 官方 MCP Server 构建 Skill

## 仓库 / 官网
- https://github.com/anthropics/claude-plugins-official/tree/main/plugins/mcp-server-dev/skills/build-mcp-server

## 功能描述
Anthropic 官方 MCP Server 设计与实现入口 Skill。先判断部署形态、工具数量、交互方式与鉴权，再决定 Remote HTTP、MCPB 或本地 stdio 等实现路线。

### 核心特性
- 先做需求发现，再开始 scaffold
- 区分云 API、本地资源访问与桌面集成
- 支持 Elicitation、MCP App widgets、OAuth 等模式判断
- 大 API 面可采用 search + execute 设计，避免暴露几百个工具

### 适合场景
- 把现有 API 包成 MCP
- 给 Claude / ChatGPT 暴露工具
- 设计远程或本地 MCP 服务

## 分类标签
`Claude Code` `MCP` `Server` `Agent Skill`
