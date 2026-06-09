# API 调用实现文档

## 概述

本文档详细说明了项目中实现的API调用功能，包括路线生成、图片生成和视频生成三个核心功能。所有API调用均基于豆包（蓝心）大模型服务。

---

## 1. 路线生成 API

### 1.1 功能描述

根据用户填写的基本信息和命轨设计，调用豆包大模型生成多条人生路线建议。

### 1.2 API 端点

- **请求方法**: POST
- **路径**: `/api/routes`
- **后端处理**: `backend/server.js` → `generateRoutes()`

### 1.3 请求参数

```javascript
{
  userInfo: {
    name: string,        // 用户姓名
    age: number,         // 年龄
    occupation: string,  // 职业
    city: string,        // 城市
    personality: string, // 性格特点
    // ... 其他用户信息
  },
  context: {
    attributes: {        // 五维属性值
      career: number,    // 事业
      finance: number,   // 财富
      relationship: number, // 人际
      health: number,    // 健康
      growth: number     // 成长
    },
    selectedRoute: object // 当前选择的路线（用于对比）
  }
}
```

### 1.4 响应格式

```javascript
{
  ok: true,
  data: {
    routes: [
      {
        id: string,           // 路线唯一标识
        title: string,        // 路线标题
        description: string,  // 详细描述
        feasibility: number,  // 可行性评分（0-100）
        difficulty: string,   // 难度等级（低/中/高）
        benefit: string,      // 预期收益
        personality: string,  // 匹配性格
        impactFactors: {      // 五维影响因子
          career: number,
          finance: number,
          relationship: number,
          health: number,
          growth: number
        },
        stages: [             // 发展阶段
          {
            phase: string,
            description: string,
            duration: string
          }
        ],
        milestones: [],       // 关键里程碑
        opportunities: [],    // 机遇
        risks: []            // 风险
      }
    ]
  }
}
```

### 1.5 实现细节

#### 1.5.1 前端调用

**文件**: `src/services/lifeJourneyFacade.js`

```javascript
export const requestRoutes = async (userInfo, context) => {
  if (isBackendApiMode) {
    try {
      const response = await requestBackendRoutes(userInfo, context);

      if (response?.ok) {
        const routesData = response.data;
        let routesArray = [];

        // 支持两种响应格式：直接数组 或 {routes: [...]}
        if (Array.isArray(routesData)) {
          routesArray = routesData;
        } else if (routesData && typeof routesData === "object" && Array.isArray(routesData.routes)) {
          routesArray = routesData.routes;
        }

        if (routesArray.length > 0) {
          // 归一化处理，只取前5条路线
          const normalizedRoutes = routesArray
            .slice(0, 5)
            .map((route, index) => normalizeGeneratedRoute(route, index));
          return createSuccessResult(normalizedRoutes, {...});
        }
      }
      return normalizeBackendResult(response, ...);
    } catch (error) {
      return createErrorResult(...);
    }
  }
};
```

#### 1.5.2 数据归一化

**文件**: `src/services/routeStateService.js`

处理AI返回的多种数值格式：

- 小数（0.8）→ 转换为百分比（80）
- 个位数（8）→ 转换为百分比（80）
- 百分比（80）→ 保持不变

```javascript
const normalizeImpactFactors = (factors) => {
  if (!factors || typeof factors !== "object") return null;
  const normalized = {};
  const keys = ["career", "finance", "relationship", "health", "growth"];
  keys.forEach((key) => {
    const value = Number(factors[key]);
    if (!isNaN(value)) {
      if (value < 1) {
        normalized[key] = Math.round(value * 100);
      } else if (value >= 1 && value < 10) {
        normalized[key] = Math.round(value * 10);
      } else {
        normalized[key] = value;
      }
    }
  });
  return Object.keys(normalized).length > 0 ? normalized : null;
};
```

#### 1.5.3 超时配置

**文件**: `src/services/backendService.js`

```javascript
const backendApi = axios.create({
  baseURL: "http://localhost:3001/api",
  timeout: 180000, // 180秒超时
});
```

---

## 2. 媒体生成 API

### 2.1 功能描述

根据路线内容生成预览图片和视频，用于可视化展示人生轨迹。

### 2.2 API 端点

- **请求方法**: POST
- **路径**: `/api/media/generate`
- **后端处理**: `backend/server.js` → `generateMedia()`

### 2.3 请求参数

```javascript
{
  prompt: string,   // 生成提示词
  type: string      // 'image' 或 'video'
}
```

### 2.4 响应格式

```javascript
{
  ok: true,
  data: {
    items: [
      {
        url: string,  // 媒体文件URL
        id: string    // 唯一标识
      }
    ]
  }
}
```

### 2.5 图片生成实现

#### 2.5.1 模型配置

- **模型**: Doubao-Seedream-4.5（豆包文生图模型）
- **参数**: `--ratio 16:9`（16:9宽高比）

#### 2.5.2 后端实现

**文件**: `backend/server.js`

```javascript
const generateImage = async (prompt) => {
  const url = new URL(IMAGE_GENERATE_URL);
  url.searchParams.set("request_id", requestId);
  url.searchParams.set("system_time", systemTime);
  url.searchParams.set("module", "aigc");

  const response = await fetch(url.toString(), {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${LLM_APP_KEY}`,
    },
    body: JSON.stringify({
      model: "Doubao-Seedream-4.5",
      content: [
        {
          type: "text",
          text: `${prompt} --ratio 16:9`,
        },
      ],
    }),
  });

  const data = await response.json();
  return parseImageResponse(data);
};
```

### 2.6 视频生成实现

#### 2.6.1 模型配置

- **模型**: Doubao-Seedance-1.0-pro（豆包文生视频模型）
- **参数**:
  - `--ratio 16:9`（16:9宽高比）
  - `--duration 30`（30秒时长）

#### 2.6.2 Prompt 构建

**文件**: `src/components/ComparisonView.vue`

```javascript
const buildVideoPrompt = (route, user) => {
  const protagonist = {
    name: user?.name || "主人公",
    age: user?.age || "",
    occupation: user?.occupation || "待定",
    city: user?.city || "某城市",
    personality: route?.personality || "积极进取",
  };

  const stageDescriptions =
    route?.stages
      ?.map((s, i) => `阶段${i + 1}（${s.phase}）：${s.description}`)
      .join("\n") || "";

  return `电影级人生纪录片，4K高清，多个连贯镜头，时长约30秒。

【主人公】
${protagonist.name}，${protagonist.age}岁，${protagonist.occupation}，生活在${protagonist.city}。性格特点：${protagonist.personality}。

【人生路线】
「${route?.title}」：${route?.description}

【发展轨迹】
${stageDescriptions}

【拍摄要求】
1. 开场：清晨城市街景，主人公出门上班/上学的场景，展现${protagonist.city}的城市氛围
2. 中段：按照路线发展阶段展开，包含日常工作/学习场景、人际交往场景、日常生活场景
3. 高潮：展现关键里程碑达成时刻，如获得证书、升职、结婚等人生重要节点
4. 结尾：展望未来3-5年后的生活状态，暗示美好前景

【风格】
真实自然光摄影，温暖色调，贴近生活的细节捕捉，展现普通人追求幸福的真实故事。

请生成一个完整连贯的人生推演视频，时长约30秒。`;
};
```

#### 2.6.3 重试机制

**文件**: `backend/server.js`

针对API速率限制，实现了指数退避重试策略：

```javascript
const callWithRetry = async (fn, retries = 5, delayMs = 5000) => {
  for (let attempt = 1; attempt <= retries + 1; attempt++) {
    try {
      const result = await fn();
      if (result !== null && result !== undefined) {
        return result;
      }
    } catch (err) {
      console.warn(`API call attempt ${attempt} failed:`, err.message);
      if (attempt <= retries) {
        const exponentialDelay = delayMs * Math.pow(2, attempt - 1);
        console.warn(`Waiting ${exponentialDelay}ms before retry...`);
        await new Promise((resolve) => setTimeout(resolve, exponentialDelay));
      }
    }
  }
  return null;
};

// 视频生成调用
return await callWithRetry(requestFn, 5, 5000);
```

**重试策略**：
| 尝试次数 | 等待间隔 | 累计时间 |
|----------|----------|----------|
| 第1次失败 | 5秒 | 5秒 |
| 第2次失败 | 10秒 | 15秒 |
| 第3次失败 | 20秒 | 35秒 |
| 第4次失败 | 40秒 | 75秒 |
| 第5次失败 | 80秒 | 155秒 |

#### 2.6.4 前端冷却机制

**文件**: `src/components/ComparisonView.vue`

防止用户频繁调用API：

```javascript
const lastGenerationTime = ref(0);
const COOL_DOWN_TIME = 120000; // 2分钟

const handleGenerateMedia = async (route) => {
  const now = Date.now();
  const timeSinceLastGeneration = now - lastGenerationTime.value;

  if (timeSinceLastGeneration < COOL_DOWN_TIME) {
    const remainingTime = Math.ceil(
      (COOL_DOWN_TIME - timeSinceLastGeneration) / 1000,
    );
    alert(`视频生成请求过于频繁，请等待 ${remainingTime} 秒后再试`);
    return;
  }

  isGeneratingMedia[route.id] = true;
  try {
    const prompt = buildVideoPrompt(route, props.userInfo);
    const result = await generateMedia(prompt, "video");
    // ... 处理结果
    lastGenerationTime.value = Date.now();
  } catch (err) {
    console.error("媒体生成失败:", err);
    const errorMsg = err?.message || "Unknown error";
    if (errorMsg.includes("Rate limit")) {
      alert(
        "视频生成请求过于频繁，系统将在 2-32 秒内自动重试，最多重试 5 次。\n如果仍然失败，请等待 2 分钟后再试。",
      );
    } else {
      alert(`视频生成失败: ${errorMsg}`);
    }
  } finally {
    isGeneratingMedia[route.id] = false;
  }
};
```

---

## 3. 前端 API 配置

### 3.1 Axios 实例配置

#### 3.1.1 backendService.js

```javascript
const backendApi = axios.create({
  baseURL: "http://localhost:3001/api",
  timeout: 180000, // 180秒超时
});
```

#### 3.1.2 ollamaService.js

```javascript
const backendApi = axios.create({
  baseURL: "http://localhost:3001/api",
  timeout: 180000, // 180秒超时
});
```

### 3.2 错误处理

#### 3.2.1 速率限制检测

```javascript
if (errorMsg.includes("Rate limit")) {
  alert(
    "视频生成请求过于频繁，系统将在 2-32 秒内自动重试，最多重试 5 次。\n如果仍然失败，请等待 2 分钟后再试。",
  );
}
```

#### 3.2.2 超时处理

```javascript
if (errorMsg.includes("timeout")) {
  alert("请求超时，请稍后重试");
}
```

---

## 4. 后端 API 配置

### 4.1 环境变量

```env
LLM_APP_KEY=your_api_key_here
IMAGE_GENERATE_URL=https://ark.cn-beijing.volces.com/api/v3/chat/completions
VIDEO_GENERATE_URL=https://ark.cn-beijing.volces.com/api/v3/chat/completions
```

### 4.2 超时配置

```javascript
const controller = new AbortController();
const timeoutId = setTimeout(() => controller.abort(), 180000);

const response = await fetch(url.toString(), {
  // ...
  signal: controller.signal,
});

clearTimeout(timeoutId);
```

---

## 5. 数据流程图

```
用户操作
  ↓
前端组件（ComparisonView.vue）
  ↓
前端服务层（ollamaService.js / backendService.js）
  ↓
后端 API（backend/server.js）
  ↓
豆包大模型服务
  ↓
返回结果
  ↓
数据归一化（routeStateService.js）
  ↓
前端展示
```

---

## 6. 注意事项

### 6.1 API 额度限制

- 豆包 API 有每日调用限额
- 视频生成 API 有更严格的速率限制
- 建议监控 API 使用量，避免超额

### 6.2 超时处理

- 路线生成：180秒
- 图片生成：180秒
- 视频生成：180秒（含重试时间）

### 6.3 错误处理

- 所有 API 调用都应包含 try-catch
- 提供用户友好的错误提示
- 记录详细的错误日志

### 6.4 性能优化

- 前端冷却机制防止频繁调用
- 后端重试机制提高成功率
- 数据归一化确保一致性

---

## 7. 相关文件清单

### 前端文件

- `src/services/backendService.js` - 后端 API 调用封装
- `src/services/ollamaService.js` - 媒体生成 API 调用
- `src/services/lifeJourneyFacade.js` - 路线生成业务逻辑
- `src/services/routeStateService.js` - 路线数据归一化
- `src/components/ComparisonView.vue` - 对比视图组件
- `src/components/DivergenceView.vue` - 衍化视图组件

### 后端文件

- `backend/server.js` - 后端服务器和 API 实现

---

## 8. 更新日志

### 2026-05-28

- ✅ 实现路线生成 API（POST /api/routes）
- ✅ 实现图片生成 API（POST /api/media/generate, type=image）
- ✅ 实现视频生成 API（POST /api/media/generate, type=video）
- ✅ 添加数据归一化处理
- ✅ 实现指数退避重试机制
- ✅ 添加前端冷却机制
- ✅ 配置超时时间（180秒）
- ✅ 优化错误处理和用户提示
- ✅ 移除调试日志，优化生产环境代码
