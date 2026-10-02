# UI2V ｜ AI 视频动效资源库

## 仓库 / 官网

- https://github.com/illli-studio/ui2v
- https://ui2v.com

## 功能描述

UI2V 是面向 AI 工作流的视频动效资源库。它把 HyperFrames 动效包做成可搜索、可安装、可发布、可同步、可更新的复用资源，让视频动效更像 UI 组件或依赖一样被重复使用。

### 核心特性

- 搜索与发现可复用视频动效包
- 安装、更新、同步已有 HyperFrames motion package
- 发布原创动效到 UI2V registry
- 提供官方 `skills/ui2v/SKILL.md`，方便 Claude Code / Agent 直接调用
- CLI 包为 `@ui2v/cli`，命令为 `ui2v`
- UI2V 负责分发与管理；实际创作、预览、渲染由 HyperFrames 完成

### 常用命令

```bash
npm install -g @ui2v/cli@latest
ui2v search "logo sting"
ui2v install <slug>
ui2v update --all
ui2v inspect <slug>
ui2v motion publish ./motion --version 1.0.0
```

### 适合场景

- 给宣传片、产品演示、品牌片寻找现成动效
- 复用 logo sting、lower third、UI motion 等视频组件
- 让 Agent 自动搜索和安装视频动效资源
- 将自己做好的 HyperFrames 动效包发布出去

## 收录笔记

项目由 illli Ai Studio 维护。当前 UI2V 定位是“视频动效资源库 / registry client”，不是旧版 JSON 视频渲染器。官方仓库已内置 UI2V Skill。

## 分类标签

`视频动效` `UI2V` `HyperFrames` `Claude Code Skill` `Motion` `视频制作`
