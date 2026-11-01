# Emil Kowalski Skills ｜ 动效与界面品味技能集

## 仓库
- [GitHub: emilkowalski/skills](https://github.com/emilkowalski/skills)
- [emil-design-eng SKILL.md](https://github.com/emilkowalski/skills/blob/main/skills/emil-design-eng/SKILL.md)

## 功能描述
一套给设计师和工程师用的 Agent Skills，重点解决 AI 做 UI 时常见的动效审美、节奏、缓动、交互细节和界面质感问题。作者是 Toast 库 Sonner 和抽屉组件 Vaul 的作者，经验来自 Vercel 和 Linear。

### 核心特性
- 主 skill `emil-design-eng`：作者自述“大部分讲动画，也有一些设计建议”
- 动画决策四问：该不该动（按使用频率）、目的是什么、用什么缓动、多快（UI 动画不超过 300ms）
- 组件原则：按下缩到 0.97、不从 scale(0) 出场、弹层从触发点长出（模态框除外）、只动 transform 和 opacity、减少动效设置、触屏关 hover
- 审查时强制输出“改前 / 改后 / 为什么”三列表格，每个问题一行
- 仓库根目录另有 ui-cheatsheet.md（大标题收紧字距、正文约 65 字符一行、等宽数字等）和 performance-cheatsheet.md

### 主要 Skills
- `emil-design-eng`：综合 UI polish / component / animation 设计判断
- `animate`：从零实现动画，决定该不该动、用什么曲线、时长和属性
- `animate-expo`：同一标准用于 React Native / Expo
- `review-animations`：严格审查已有动画
- `improve-animations`：扫描整个代码库，给出分优先级、可独立执行的优化方案
- `find-animation-opportunities`：找出本该有动效的位置，也说明哪些不该动
- `remove-animations`：删掉不需要的动画
- `animation-performance`：修掉帧的动画
- `animation-vocabulary`：把模糊的动效描述转成准确术语
- `apple-design`：Apple 界面与流畅动效原则（来自 WWDC 设计讲座）
- `write-swift`：现代 Swift 写法
- `pick-ui-library`：按作者信任的库挑组件库，不让 AI 手搓
- `prototype`：做多个不同版本用切换器对比
- `mobile-native`：让网页在手机上像原生 App
- `break-ui`：用极端数据（超长名字、空列表、超大数量）去压 UI
- `ask-sonner`：Sonner 使用指南

### 适用场景
- 动效、按压手感、弹层、手势的审查与实现
- 跟 AI 准确描述想要的动效

## 局限
- 不成体系地覆盖颜色体系、字号分档、行高、间距、跨页面统一这类设计规范问题，治“页面之间不统一”要另找 design-md / hue / impeccable 这类 skill
- 代码例子都是网页 CSS / React（另有 Expo 和 Swift 专项），Flutter 等其他技术栈只能借思路

## 安装
```bash
npx skills@latest add emilkowalski/skills
# 只装主 skill
npx skills add https://github.com/emilkowalski/skills --skill emil-design-eng
```

## 收录笔记
2026-11-01 复核：仓库 51.4k Stars、MIT，skill 已增加到 16 个；emil-design-eng 原文已通读，结论见上方“局限”。

## 分类标签
`动效` `Motion Design` `UI审美` `Agent Skills` `Codex` `Claude Code` `前端`
