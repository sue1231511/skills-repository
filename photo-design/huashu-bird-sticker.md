# Huashu Bird Sticker ｜ 全球 11064 种鸟类贴纸库

## 仓库 / 官网
- [GitHub: alchaincyf/huashu-bird-sticker](https://github.com/alchaincyf/huashu-bird-sticker)
- [作者写的制作过程（DEV Community）](https://dev.to/alchaincyf/how-i-drew-all-11064-bird-species-with-claude-code-and-codex-and-why-the-reviewer-mattered-more-4kcn)

## 功能描述
花叔用 Claude Code 和 Codex 把全球现存 11064 种鸟全部画成风格统一的贴纸并开源。每张是透明底 WebP、带白描边，长边约 1000 像素；配套物种数据，带 43 种语言的名字。

### 核心特性
- 按分类学放文件：`stickers/<目>/<科>/<属_种>.webp`，例如 `stickers/Psittaciformes/Psittacidae/Pyrrhura_molinae.webp`（绿颊锥尾）
- 数据文件 `data/species.json`、`species.csv`、`names.csv`，每个物种标了参考照片的作者和协议
- 整个仓库约 700MB，可以按文件直接取 raw 链接，或用 sparse clone 只拉需要的目录
- 物种只画原色，人工选育的颜色突变（比如蓝色和尚鹦鹉）没有单独的图

### 适用场景
- 拼贴风、手账风 UI 和个人网站的装饰素材
- 表情包、吉祥物、游戏里的小动物图标
- 给自家养的鸟找同款贴纸

### 使用方式
- 单张：`https://raw.githubusercontent.com/alchaincyf/huashu-bird-sticker/main/stickers/<目>/<科>/<属_种>.webp`
- 不知道学名就先查 `data/names.csv`（含中文名）
- 批量：sparse clone 只取需要的目，别整仓下载

## 注意
- 贴纸是 **PolyForm Shield 1.0.0**：商用可以，但**不能用在和作者观鸟 App 竞争的产品里**（别的观鸟、识鸟、鸟类图鉴 App 或网站）。拿鸟做装饰的 UI、个人主页、表情包不沾边；整站做成鸟类图鉴就撞了。
- 数据是 MIT；`data/field-guide.zh-Hans.json` 里的图鉴说明是 CC BY-SA 4.0。
- 作者自己提醒：5071 张是照着非商用/禁演绎协议的照片画的，1500 张参考的是保留所有权利或 Macaulay Library 条款的照片，画作受不受原照片协议约束法律上没定论。要商用就按 `sticker.reference.license` 筛。
- 许可证没要求署名，用的时候页脚写一句来源比较礼貌。

## 收录笔记
核验于 2026-11-02：仓库公开可访问，README 里的协议说明如上；实测取到 Pyrrhura_molinae、Myiopsitta_monachus、Agapornis roseicollis / fischeri / personatus 五张图，都能下载。

## 分类标签
`贴纸` `素材` `鸟类` `透明WebP` `拼贴` `开源素材`
