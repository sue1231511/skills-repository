# Remotion Clone Video ｜ 参考视频反向重建为代码

## 仓库 / 官网
- [GitHub: crafter-station/remotion-clone-video](https://github.com/crafter-station/remotion-clone-video)

## 功能描述
面向 Claude Code、Cursor、Codex、Gemini CLI 等 Agent 的视频重建 Skill。输入参考视频后，自动拆帧、分析镜头与动效，并重建为可编辑、可再次渲染的 Remotion React 工程。

### 核心特性
- ffprobe / ffmpeg 分析视频尺寸、帧率、时长与音轨
- 自动抽帧并建立 storyboard
- 颜色、动画、转场与元素逐镜头分析
- 尽量用代码重建画面，仅保留必要的位图资产
- 每个场景生成独立 Remotion 组件
- 支持静帧对比与迭代校准
- 最终渲染 MP4

### 适合场景
- 学习优秀宣传片的动效结构
- 将自己的现有视频重建成可编辑源码
- UI 演示与 motion graphics 复刻
- 产品视频原型

## 安装
```bash
npx skills add crafter-station/remotion-clone-video
```

## 分类标签
`视频制作` `Remotion` `视频反向重建` `React` `Agent Skill` `Claude Code` `Codex`