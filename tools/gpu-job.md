# GPU Job ｜ 在共享远程 GPU 机上跑重活不踩别人

## 仓库
- [GitHub: skyeyesec333/gpu-job](https://github.com/skyeyesec333/gpu-job)（MIT）

## 功能描述
GPU Job 在一台多人共用的远程 GPU 机上跑重活（Blender/Cycles 渲染与烘焙、ML 推理、超分），走 SSH 且不踩到同样用这台机器的人、服务与其他 Agent 会话。

流程是配置、只读预检、告知其他人、上保护跑、查状态、只取回文件、释放，适用于本地渲染太慢或冻住画面、输出要送渲染机、家里实验室一台 RTX 卡还挂着常驻语音模型的场景。

## 收录笔记
MIT 开源许可。（收录于 2026-11-18，链接已核验）

## 分类标签
`GPU` `Blender` `远程` `SSH`
