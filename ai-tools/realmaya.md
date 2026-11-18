# RealMaya ｜ 带语义蒸馏与防注入的 AI 原生无头浏览器库

## 仓库
- [GitHub: roedyrustam/realmaya](https://github.com/roedyrustam/realmaya)（MIT）

## 功能描述
RealMaya 是一个 AI 原生的无头浏览器自动化库（Chrome 与 Firefox），核心是令牌压缩语义蒸馏器（覆盖开放 Shadow DOM、同源 iframe 与完整内容模式），另有自愈定位缓存（JSON 与 SQLite）、推测性并行分支（fork）、多步自主 Agent 循环（runAgent）、热浏览器池守护进程（realmaya daemon）、硬件级可信输入（isTrusted: true），以及提示词注入防火墙与危险动作防护。

它面向需要让 Agent 自主操作浏览器的场景，用蒸馏后的语义内容替代原始 HTML 以省 token，并对定位失效与注入攻击做了专门防护。

## 收录笔记
MIT 开源许可。（收录于 2026-11-18，链接已核验）

## 分类标签
`AI 工具` `浏览器自动化` `Agent`
