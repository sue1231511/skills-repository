# CN Scraper MCP ｜ 让 AI Agent 直接搜索中国互联网平台的 MCP 爬虫

## 仓库 / 官网

- [GitHub: goesByhc/cn-scraper-mcp](https://github.com/goesByhc/cn-scraper-mcp)

## 功能描述

一个面向 AI Agent 的中文互联网搜索与采集 MCP Server，把淘宝、京东、小红书、知乎、微博、B站、知识星球、豆瓣、大众点评等平台的搜索和内容抓取能力统一暴露给 Codex、Claude Code、Cursor、Trae 等 Agent。

### 核心特性

- 支持淘宝 / 天猫、京东、小红书、知乎、微博、B站、知识星球、豆瓣、大众点评等中文平台
- 针对不同平台分别处理 Cookie、登录态、本地 Chrome CDP、REST API 和公开 Web API
- 提供 `guided_login`，可打开官方登录页并通过本地 Chrome 自动保存 Cookie
- Cookie 默认保存在本机，不要求上传账号密码或浏览器 Profile 到中转服务器
- 支持标准 MCP 接入，安装后可直接让 Agent 调用平台搜索工具
- 支持 pip 安装、源码安装与 Docker 部署

### 适合场景

- 给 Claude Code、Codex、Cursor 等 Agent 增加中文互联网搜索能力
- 搜索淘宝 / 京东商品与中文社区内容
- 抓取小红书、知乎、微博、B站等平台数据供 Agent 分析
- 本地维护登录态，减少手工复制 Cookie 的麻烦
- 构建中文互联网研究、选品、舆情或资料搜集工作流

## 安装 / 使用

```bash
pip install cn-scraper-mcp
cn-scraper-mcp
```

也可以从源码安装：

```bash
git clone https://github.com/goesByhc/cn-scraper-mcp.git
cd cn-scraper-mcp
pip install .
```

推荐连接 MCP 后使用 `guided_login(platform="平台名")` 初始化需要登录态的平台。

## 收录笔记

专门解决中文平台对 Agent 不太友好的反爬、登录态和浏览器环境问题。部分平台依赖本地 Chrome、住宅 IP 或人工验证码，实际稳定性按平台不同会有差异。收录于 2026年9月26日，链接已核验。

## 分类标签

`MCP` `中文互联网` `网页爬虫` `数据采集` `AI Agent`
