# Stamp Edge ｜ 图片转邮票锯齿边贴纸 Skill

## 仓库 / 官网
- [GitHub: xianxie6/stamp-edge-skill](https://github.com/xianxie6/stamp-edge-skill)

## 功能描述
把任意图片处理成邮票风格：四周半圆打孔锯齿边加柔和投影，默认输出真透明背景 PNG，可直接当贴纸叠到任意背景上。

### 核心特性
- 默认无白边，锯齿孔洞和四周 alpha=0，真透明
- 可选加白色纸边（margin）或浅灰白底成品图（bg）
- `stamp_sheet.py` 把多张邮票拼成等宽列瀑布流合集图，列高自动均衡，可设列数和底色
- 打孔半径、孔距、外留白、投影不透明度都在脚本顶部可调
- 只依赖 Pillow

### 适用场景
- 把照片、插画做成邮票贴纸素材
- 旅行照片、收藏图批量做成邮票合集图
- 手帐、拼贴、海报里的贴纸元素

### 使用方式
- `pip install Pillow`
- `python3 stamp_effect.py <输入图> <输出图.png>`（加 `margin` 出白边，加 `bg` 出浅底成品）
- `python3 stamp_sheet.py sheet.png --cols 3 --bg "#f5f2ea" -- *_stamp.png`
- 作为 Skill：整个目录放进 Agent 的 skills 目录（如 `~/.agents/skills/stamp-edge/`），对 Agent 说“把这张图做成邮票边”触发

## 注意
- 微信等平台直接发图会把透明 PNG 压成 JPG，透明会丢，要保透明得以文件形式发
- 仓库未声明开源协议，商用前先确认

## 收录笔记
核验于 2026-11-01：仓库公开可访问，README、SKILL.md、两个脚本和示例图都在，57 Stars。

## 分类标签
`图片处理` `贴纸` `邮票` `透明PNG` `Agent Skill` `Python`
