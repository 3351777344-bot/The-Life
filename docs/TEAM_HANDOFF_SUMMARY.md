# 前端阶段工作总结与对接说明

更新时间：2026-05-18
适用分支：`Tilams`
面向对象：组长 / 前后端组员 / 需要联调的成员

## 一、我这段时间主要做了什么

这段时间我主要负责的是把现有前端 demo 收口成一个更完整、更适合演示和后续联调的初版前端。

不是单纯做页面美化，而是围绕以下几件事持续推进：

1. 把产品主流程真正串起来  
   `入局 -> 命轨 -> 衍化 -> 对比 -> 观心 -> 论道 -> 归途`

2. 把多个页面之间的状态和数据结构整理清楚  
   避免页面能看但逻辑是散的、断的

3. 把前端里原本比较 demo 的部分做成更像产品的交互  
   例如错误提示、空状态、引导说明、终局报告收口

4. 把服务层、联调边界和项目留档体系搭起来  
   方便后面组员继续接后端或继续扩展

## 二、当前前端已经完成到什么程度

当前版本已经可以视为：

`可演示的初版完整前端产品`

目前已经具备：

1. 完整主流程可跑通
2. 核心页面都已接上主状态
3. 路线生成、路线对比、属性展示、顾问问答、终局报告已经形成闭环
4. 多数关键失败场景已有页面级反馈
5. 命轨页做过一轮性能拆包和 three 优化
6. 有默认演示路径和文档支持
7. 有服务层、门面层、契约层，适合后续联调

## 三、我具体补过哪些方向

### 1. 主流程闭环

已经把以下页面串成一条完整流程：

1. `GenesisView`
2. `DestinyView`
3. `DivergenceView`
4. `ComparisonView`
5. `ReflectionView`
6. `MentorshipView`
7. `ConclusionView`

### 2. 服务与联调层

已经整理出的关键服务文件：

1. `src/services/lifeJourneyFacade.js`
2. `src/services/ollamaService.js`
3. `src/services/planningFileService.js`
4. `src/services/routeStateService.js`
5. `src/services/journeyStateService.js`
6. `src/services/serviceResult.js`
7. `src/services/serviceConfig.js`
8. `src/services/serviceContracts.js`

### 3. 页面稳定性

已经补过的内容包括：

1. loading 状态
2. 空状态
3. 错误提示
4. 页面引导文案
5. 节点编辑交互统一

### 4. 文档与留档

已经补好的文档体系：

1. 总计划：`docs/FRONTEND_EXECUTION_PLAN.md`
2. 每轮变更：`docs/change-logs/`
3. 阶段总结：`docs/phase-summaries/`
4. 默认演示路径：`docs/DEMO_FLOW.md`
5. 答辩讲稿：`docs/DEMO_TALK_TRACK.md`
6. 演示检查清单：`docs/DEMO_CHECKLIST.md`
7. 联调说明：`docs/INTEGRATION_HANDOFF.md`
8. 当前版本完成度：`docs/CURRENT_STATUS.md`

## 四、如果其他组员要和前端对接，应该看什么

### 1. 如果是组长想快速看当前进度

优先看：

1. `docs/CURRENT_STATUS.md`
2. `docs/phase-summaries/PHASE_INDEX.md`

### 2. 如果是后端或联调同学要接接口

优先看：

1. `docs/INTEGRATION_HANDOFF.md`
2. `src/services/lifeJourneyFacade.js`
3. `src/services/serviceResult.js`
4. `src/services/serviceContracts.js`
5. `src/services/serviceConfig.js`

### 3. 如果是组员想知道这几天具体改了什么

优先看：

1. `docs/change-logs/`

### 4. 如果是准备一起展示项目

优先看：

1. `docs/DEMO_FLOW.md`
2. `docs/DEMO_TALK_TRACK.md`

## 五、现在前端是怎么分层的

当前建议按下面理解：

### 页面层

负责：

1. 页面展示
2. 交互行为
3. 事件触发

### 门面层

文件：

`src/services/lifeJourneyFacade.js`

负责：

1. 统一给页面暴露可调用能力
2. 隔离底层服务实现
3. 给后续联调预留稳定入口

### 底层服务层

负责：

1. 模型调用
2. 文件处理
3. 路线规则
4. 旅程状态重置
5. 服务结果结构
6. 契约常量

## 六、如果后端现在要接，建议怎么接

建议顺序：

1. 不要先改页面
2. 先看 `lifeJourneyFacade.js`
3. 在 facade 对应能力里替换底层实现
4. 尽量保持页面消费结构不变

当前几个关键能力入口：

1. `requestScenario`
2. `requestRoutes`
3. `requestAdvisorReply`
4. `requestRegretReport`
5. `requestPlanningFileExtraction`

统一结果结构：

```js
{
  ok: true | false,
  data: any,
  error: {
    message: string,
    code: string
  } | null,
  meta: object
}
```

## 七、现在还没完全做成正式产品的地方

这些地方目前仍然更偏“初版演示能力”：

1. 文档上传目前以兜底提取为主，不是完整正式解析
2. 社会现实数据还不是正式在线接入
3. 多模态内容更多是展示入口和占位
4. 后悔值和部分路线影响仍带有启发式逻辑
5. 还没有正式测试体系

## 八、我建议团队接下来怎么推进

如果继续做下一步，建议顺序是：

1. 先接真实后端或统一接口格式
2. 再补正式数据源
3. 然后做测试与验收
4. 最后再考虑更高级的增强功能

