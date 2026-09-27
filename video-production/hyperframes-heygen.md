# HyperFrames ｜ HTML 原生 Agent 视频生成框架

## 仓库 / 官网

- [GitHub: heygen-com/hyperframes](https://github.com/heygen-com/hyperframes)
- [官方文档](https://hyperframes.heygen.com/)

## 功能描述

面向 AI Coding Agent 的开源视频渲染框架。核心思路是“Write HTML. Render video.”：Agent 直接编写 HTML / CSS / JavaScript，并使用 GSAP、Three.js、Anime.js、WAAPI 等可寻址动画运行时，最后确定性渲染为 MP4 / MOV / WebM。

### 核心特性

- HTML / CSS / JS 作为视频源码
- GSAP 时间轴与逐帧可寻址动画
- 支持字幕、TTS、音频响应动画与场景转场
- 支持 Three.js、Anime.js、CSS Animations、Lottie、WAAPI
- 支持 Website → Video 与 Remotion → HyperFrames 工作流
- CLI 提供 init、lint、preview、render、transcribe、tts、doctor
- 50+ 可复用 blocks / components
- 适配 Claude Code、Cursor、Gemini CLI、Codex 等 Agent

## 安装

```bash
npx skills add heygen-com/hyperframes
```

也可使用 HyperFrames CLI 安装/刷新核心 Skills：

```bash
npx hyperframes skills update
```

## 适合场景

- 产品宣传片
- UI / 网站功能演示
- 动态海报与 motion graphics
- 数据可视化视频
- 需要 Three.js / WebGL / GSAP 的高级动效视频
- 希望完全用 Web 代码生成并渲染视频的 Agent 工作流

## 许可

Apache-2.0

## 分类标签

`视频制作` `HyperFrames` `HTML` `GSAP` `Three.js` `Agent Skill` `Claude Code` `Codex`