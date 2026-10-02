# engineering/code-review ｜ 双轴代码审查 Skill

## 仓库 / 官网
- https://github.com/mattpocock/skills/tree/main/skills/engineering/code-review

## 功能描述
Matt Pocock 的代码审查 Skill。把一次 review 拆成 **Standards** 与 **Spec** 两条并行检查线：一条检查代码是否符合仓库规范，另一条检查实现是否真正满足原始 issue / spec。

### 核心特性
- 使用固定点到 HEAD 的 merge-base diff 做审查
- Standards 与 Spec 两个子 Agent 并行运行，避免互相污染上下文
- 自动寻找 issue、spec 文件和仓库规范来源
- 适合 PR、分支、WIP、指定 commit 之后的变更审查
- 比单纯 lint / 风格 review 更关注“有没有做偏需求”

### 适合场景
- PR 合并前审查
- Agent 写完功能后的自动验收
- 检查“代码没报错但需求做歪了”的情况

## 分类标签
`Code Review` `Engineering` `Agent Skill` `Git` `Spec`
