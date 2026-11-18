# CI Cost Cutter ｜ 给 CI 审计降本，小步验证不削弱检查

## 仓库
- [GitHub: pbc-os/ci-cost-cutter](https://github.com/pbc-os/ci-cost-cutter)（MIT）

## 功能描述
CI Cost Cutter 审计一个仓库的 CI，用小步、可验证的方式砍掉时间与算力成本，且不削弱任何检查，涉及风险的改动先问人再动手。

它的方法是先量基线（墙钟时间与算力）、找到时间与钱真正花在哪、去掉不需要跑的工作、把剩下的做便宜，并在每一步证明检查仍能抓住原来能抓住的问题，方法源自 Vincent Koc 的提速文章，适用于有人说 CI 慢、贵、不稳定，或提到 GitHub Actions 分钟数、Runner 账单、排队时间、测试套件耗时、分片、缓存、测试选择等场景。

## 收录笔记
MIT 开源许可。（收录于 2026-11-18，链接已核验）

## 分类标签
`CI` `DevOps` `成本`
