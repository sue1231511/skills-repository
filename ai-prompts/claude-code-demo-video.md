# Claude 代码录制产品演示片提示词 ｜ 用 Playwright 与 Remotion 录完整支演示片

## 来源
- [X: @SoraiaDev](https://x.com/SoraiaDev/status/2121629647079395496)（2026-11-14 发布，主帖 36 赞，18 收藏）
- 完整提示词见线程第二条：[X: @SoraiaDev](https://x.com/SoraiaDev/status/2121629651969724418)

## 功能描述
这条提示词让 Claude 用代码录完整支产品演示片，演示视频里的点击、缩放和光标都不是人手录的，技术栈为 Playwright、Chrome DevTools Protocol、Remotion、ffmpeg。

故事结构：intro card (the promise) -> the action in the app -> a card for the next step -> the payoff -> end card (product name + url)。

关键约束：1920×1080、deviceScaleFactor 2；鼠标走缓动曲线，点击前短暂停顿；等待和加载可 3–5 倍速，但「光标走到点击位置」不要加速；点击前约 1 秒推镜到 1.12–1.4x；成片 h264 / 60fps。

## 收录笔记
完整提示词在原帖线程第二条；X 原帖链接因域名策略无法直接打开，Claude + Remotion 录屏流程本身已是公开通用的做法。（收录于 2026-11-17）

## 分类标签
`提示词` `视频` `产品演示` `Claude Code` `Remotion`
