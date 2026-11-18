# AI Repository ｜ AI Library

> **声明**：本仓库由 **sue1231511** 收集、整理并维护。所收录的 Skills、工具、Prompt、项目与其他资源，其版权与贡献归原作者所有。这里仅作为个人学习、整理与分享使用，方便快速检索和访问各类 AI、设计与开发资源。

这是一个用于收集、整理和快速访问 **Skills、AI 工具、设计资源、提示词、开源项目与实验性作品** 的个人仓库。

现在仓库同时提供一个可视化 **AI Library**：支持搜索、分类筛选、收藏、最近访问，以及**待选区（购物车）批量导出**——把多个 Skill 加进待选区后，一键生成可复制的 Agent Prompt 或纯链接清单，方便直接分享给 agent。页面会自动读取各 Markdown 条目中的简介、标签和原项目链接。

### [打开 AI Library →](https://sue1231511.github.io/skills-repository/)

## 致谢

感谢以下作者与社区为本仓库提供优秀的资源与灵感：

- **cxxCoolStar** — `github-idea-finder`
- **greensock** — `gsap` (GSAP Skills)
- **TaiT-tt** — `tait-crt-interface`
- **HsMirage** — `AIPlanHub`
- **Orchestra-Research** — AI Research Skills Library 相关条目
- **MaxKmet** — `idea-validation-agents` 相关灵感
- **icejyzy0430** — `open-model-workbench`
- **qimingjiu** — `selene-design-taste`
- 以及其他所有在 GitHub 与相关社区中分享知识与作品的作者。

> 如果你发现自己的作品被收录并希望调整信息，请提交 Issue 或 PR，我会尽快更新。

## Web UI

仓库根目录已包含静态页面：

- `index.html` — 页面结构
- `styles-v2.css` — UI 样式
- `app.js` — 数据、搜索、筛选、收藏与 Markdown 自动解析

启用 GitHub Pages 后即可直接访问上面的 AI Library。

## 分类

| 目录 | 内容 |
|---|---|
| `frontend-design/` | 前端设计、UI、动效与组件资源 |
| `photo-design/` | 照片处理、海报、拼贴与视觉风格 |
| `video-production/` | AI 视频、图生视频、分镜与制作流程 |
| `creative-visual/` | 实验性视觉与创意界面 |
| `design-tools/` | 设计质量与审查工具 |
| `ai-prompts/` | 提示词与 AI 交互模板 |
| `token-optimization/` | Token 压缩与上下文优化 |
| `methodology/` | 工作流、方法论与 Prompt 模板 |
| `ai-tools/` | AI 工具、平台与项目 |
| `chrome-extensions/` | Chrome 扩展 |
| `tools/` | 其他通用工具 |
| `agent-memory/` | Agent 记忆、知识图谱与长期记忆基建 |
| `web-scraping/` | 爬虫、反爬对抗与 LLM 数据采集 |
| `voice-tts/` | 语音合成、实时翻译与语音工作室 |
| `virtual-companion/` | AI 虚拟主播、桌宠与陪伴应用 |
| `games/` | 游戏引擎、数值系统与 LLM 互动玩法 |
| `marketing-growth/` | 营销技能包、SEO 与增长工具 |
| `notes/` | 待确认线索与备忘（不进入 Web UI 正式列表） |

## 条目规范

每个资源以一个 Markdown 文件保存。推荐结构：

```md
# 名称 ｜ 中文说明

## 仓库 / 官网
- GitHub 或官网链接

## 功能描述
一句话说明它解决什么问题。

### 核心特性
- 特性 1
- 特性 2

### 适合场景
- 场景 1

## 安装 / 使用
...

## 分类标签
`标签1` `标签2` `标签3`
```

Web UI 会自动解析：一级标题、功能描述、分类标签，以及第一个有效的 GitHub / 外部项目链接。因此新增条目时不需要再手工写一张网页卡片。

> **命名约定**：文件名统一使用小写字母、连字符分隔，格式为 `xxx.md`。

## 使用方式

1. 按分类找到合适的资源。
2. 搜索名称、用途或标签。
3. 点击卡片中的访问链接进入原项目。
4. 原项目链接无法解析时，会自动退回仓库里的 Markdown 说明页。
5. 收藏和最近访问记录保存在浏览器本地。
6. 点卡片上的「+ 待选」把多个 Skill 放进右侧待选区，打开「待选」抽屉后可切换导出格式并一键复制 Agent Prompt 或链接清单；待选区同样保存在浏览器本地。

## 贡献

发现值得收录的新资源，可以直接按现有分类新增 Markdown。信息暂未核实的条目请明确标注“待确认”，或放入 `notes/` 收集线索，避免把推测写成事实。

---

收录备忘：

- 新增前习惯性查一下来源能不能打开、内容能不能对上，纯截图或聊天记录一般不直接收
- 有 GitHub / 官网 / 可访问项目链接的再进正式分类，拿不准的先丢进 `notes/`
- 尽量别放没根没据的东西，宁缺毋滥
