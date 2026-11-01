# unslop ｜ 把 AI 味界面改成有性格的设计

## 仓库 / 官网
- [GitHub: heydamir/unslop](https://github.com/heydamir/unslop)（原仓库）
- [sue1231511/unslop](https://github.com/sue1231511/unslop)（自己的私有备份，原样拷贝）

## 功能描述
给 Claude Code 和 Codex 用的设计 skill，把一看就是 AI 做的界面改成有自己性格的设计：先体检挑出「AI 味」，再从产品本身定方向，然后像设计师批改红笔图一样一遍遍改。

### 核心特性
- 体检：列出每一处 AI 味及位置，如紫蓝渐变、发光、emoji 当图标、喊口号的文案、间距忘大忘小
- 定方向：从产品找性格、主色和一个记忆点，改之前先给方向确认；界面本来就好会直说，只给小建议
- 分遍修改：间距 → 颜色 → 图标 → 文案 → 字体 → 布局 → 细节 → 配图 → 动效
- 自带一整套数值（references/tokens.md）：间距阶梯、应用布局（侧栏 240–280、顶栏 56–64、导航行 32–36）、中性色阶、字号表、圆角、阴影、动效曲线
- 支持 Next.js / React / Vue / Svelte / Tailwind / 纯 HTML CSS，也能直接扒一个网址来改
- 可生成 10 秒内的「界面自己变好看」小视频（要 Playwright + ffmpeg）
- CC BY 4.0，可商用，须署名作者并链回原仓库

### 适用场景
- 老说界面「丑」「普通」「一看就是 AI 做的」时系统性纠偏
- 间距、字号、颜色、层次不统一时拿它的数值当尺子
- 和 Emil Kowalski Skills 互补：Emil 管动效手感，unslop 管间距字号颜色层次

## 安装 / 使用
```bash
git clone https://github.com/heydamir/unslop
mkdir -p ~/.claude/skills && cp -r unslop/skills/unslop ~/.claude/skills/
```
Claude Code 里输 `/unslop 这个页面`，Codex 里输 `$unslop`。

## 收录笔记
核验于 2026-11-01：原仓库公开可访问，21 个文件约 1.6M，已原样备份到 sue1231511/unslop（私有）。对照 Mikeko：它建议左上角品牌字 16–18、导航行 32–36，比 Mikeko 现在的 24 和 44 都小。

## 分类标签
`设计审查` `反AI模板` `设计规范` `Claude Code` `Codex` `前端`
