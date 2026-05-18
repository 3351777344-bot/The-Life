# 前端联调说明

更新时间：2026-05-18
适用分支：`Tilams`

## 1. 目的

这份文档用于帮助项目组其他成员快速理解：

1. 当前前端的服务调用边界在哪里
2. 真正要接后端时，优先从哪里改
3. 哪些页面依赖哪些能力

## 2. 当前服务分层

### 2.1 页面层

页面层主要负责：

1. 展示
2. 交互
3. 状态切换

不建议直接在页面里写具体接口细节。

### 2.2 门面层

文件：

`src/services/lifeJourneyFacade.js`

这是页面优先依赖的一层，负责把底层能力封装成更稳定的前端接口。

当前提供的能力：

1. `requestScenario`
2. `requestRoutes`
3. `requestAdvisorReply`
4. `requestRegretReport`
5. `requestPlanningFileExtraction`
6. `resolveRouteAttributeDeltas`

### 2.3 底层服务

当前底层包括：

1. `ollamaService.js`
2. `planningFileService.js`
3. `routeStateService.js`
4. `journeyStateService.js`
5. `serviceResult.js`
6. `serviceConfig.js`
7. `serviceContracts.js`

## 3. 当前调用模式

当前模式：

1. `serviceConfig.js` 中的 `activeServiceMode`
2. 默认值为 `ollama-local`

意味着：

1. 当前前端默认按本地 Ollama 进行推演
2. 后续如果接入正式后端，可以先扩展模式配置，再替换门面层实现

## 4. 页面与能力映射

### 4.1 Genesis

依赖能力：

1. 场景生成 `requestScenario`

### 4.2 Divergence

依赖能力：

1. 路线生成 `requestRoutes`
2. 文档提取 `requestPlanningFileExtraction`
3. 路线属性增量 `resolveRouteAttributeDeltas`

### 4.3 Mentorship

依赖能力：

1. 顾问回复 `requestAdvisorReply`

### 4.4 Conclusion

依赖能力：

1. 终局报告 `requestRegretReport`

## 5. 推荐联调方式

建议顺序：

1. 先保持页面层不动
2. 优先改 `lifeJourneyFacade.js`
3. 若接口返回结构变化大，再改对应底层 service
4. 页面只消费统一结果结构：
   `ok / data / error / meta`

## 6. 当前统一结果结构

服务层统一返回：

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

其中推荐关注的常量来源：

1. `SERVICE_MODE`
2. `SERVICE_SOURCE`
3. `SERVICE_ERROR_CODE`
4. `SERVICE_META_KEY`

## 7. 如果后续接正式后端

推荐改法：

1. 在 `serviceConfig.js` 中新增模式，例如 `backend-api`
2. 在 `lifeJourneyFacade.js` 中按模式分发不同实现
3. 优先保持页面 props、事件和主流程状态不变

## 8. 当前注意事项

1. 当前项目仍带有一定 demo 兜底逻辑
2. 某些模型返回内容仍依赖 prompt 与本地服务稳定性
3. 正式联调前，建议先统一后端字段命名，再集中改 facade
