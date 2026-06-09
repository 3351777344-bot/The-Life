import http from "node:http";
import { existsSync, readFileSync } from "node:fs";
import { randomUUID } from "node:crypto";
import { resolve } from "node:path";

const loadEnvFile = (filePath) => {
  if (!existsSync(filePath)) {
    return;
  }

  const content = readFileSync(filePath, "utf8");

  for (const line of content.split(/\r?\n/)) {
    const trimmed = line.trim();

    if (!trimmed || trimmed.startsWith("#")) {
      continue;
    }

    const equalsIndex = trimmed.indexOf("=");

    if (equalsIndex === -1) {
      continue;
    }

    const key = trimmed.slice(0, equalsIndex).trim();
    let value = trimmed.slice(equalsIndex + 1).trim();

    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }

    if (key && process.env[key] === undefined) {
      process.env[key] = value;
    }
  }
};

loadEnvFile(resolve(process.cwd(), ".env"));
loadEnvFile(resolve(process.cwd(), "backend/.env"));

const PORT = Number(process.env.PORT || 3001);
const LLM_PROVIDER = process.env.LLM_PROVIDER || "openai-compatible";
const LLM_CHAT_COMPLETIONS_URL =
  process.env.LLM_CHAT_COMPLETIONS_URL ||
  "https://api-ai.vivo.com.cn/v1/chat/completions";
const LLM_BASE_URL =
  process.env.LLM_BASE_URL || "https://api-ai.vivo.com.cn/v1/chat/completions";
const LLM_MODEL = process.env.LLM_MODEL || "vivo-BlueLM-TB";
const LLM_ROUTE_MODEL = process.env.LLM_ROUTE_MODEL || LLM_MODEL;
const LLM_APP_ID =
  process.env.LLM_APP_ID ||
  process.env.APPID ||
  process.env.APP_ID ||
  "";
const LLM_APP_KEY =
  process.env.LLM_APP_KEY ||
  process.env.APPKEY ||
  process.env.APP_KEY ||
  "";
const IMAGE_GENERATE_URL =
  process.env.IMAGE_GENERATE_URL ||
  "https://api-ai.vivo.com.cn/api/v1/image_generation";
const VIDEO_GENERATE_URL =
  process.env.VIDEO_GENERATE_URL ||
  "https://api-ai.vivo.com.cn/api/v1/submit_task";
const VIDEO_QUERY_URL =
  process.env.VIDEO_QUERY_URL ||
  "https://api-ai.vivo.com.cn/api/v1/query_task";
const VIDEO_MODEL = process.env.VIDEO_MODEL || "Doubao-Seedance-1.0-pro";
const VIDEO_RATIO = process.env.VIDEO_RATIO || "16:9";
const VIDEO_DURATION_SECONDS = Number(process.env.VIDEO_DURATION_SECONDS || 5);
const OLLAMA_BASE_URL =
  process.env.OLLAMA_BASE_URL || "http://localhost:11434/api";
const OLLAMA_MODEL = process.env.OLLAMA_MODEL || "llama3";
const LLM_REQUEST_TIMEOUT_MS = Number(
  process.env.LLM_REQUEST_TIMEOUT_MS || 30000,
);
const BASE_META = {
  source: "backend",
  mode: "backend-api",
  modeLabel: "Backend API",
};

const createRequestId = () => randomUUID().slice(0, 8);

const getRequestLabel = (method, pathname) => `${method} ${pathname}`;

const logRequestStart = (requestId, method, pathname) => {
  console.log(`[${requestId}] -> ${getRequestLabel(method, pathname)}`);
};

const logRequestEnd = (
  requestId,
  method,
  pathname,
  statusCode,
  startedAt,
  source = "backend",
) => {
  const duration = Date.now() - startedAt;
  console.log(
    `[${requestId}] <- ${getRequestLabel(method, pathname)} ${statusCode} ${duration}ms source=${source}`,
  );
};

const fallbackAttributes = {
  career: 70,
  finance: 65,
  relationship: 75,
  health: 68,
  growth: 72,
};

const TEXT_FILE_EXTENSIONS = new Set(["txt", "md", "json", "csv", "tsv"]);
const OFFICE_FILE_EXTENSIONS = new Set(["doc", "docx"]);
const MAX_TEXT_LENGTH = 4000;

const normalizeWhitespace = (text = "") =>
  String(text).replace(/\s+/g, " ").trim();

const buildResultMeta = (source, extra = {}) => ({
  ...BASE_META,
  source,
  ...extra,
});

const parseModelContent = (content) => {
  if (typeof content !== "string") {
    return content;
  }

  let text = content.trim();

  if (!text) {
    return "";
  }

  // 尝试匹配 markdown 中的 json 块
  const jsonBlockMatch = text.match(/```(?:json)?\s*([\s\S]*?)\s*```/i);
  if (jsonBlockMatch) {
    text = jsonBlockMatch[1].trim();
  } else {
    // 尝试匹配大括号
    const braceMatch = text.match(/\{[\s\S]*\}/);
    if (braceMatch) {
      text = braceMatch[0];
    }
  }

  try {
    return JSON.parse(text);
  } catch {
    return content.trim();
  }
};

const readBody = async (req) => {
  const chunks = [];

  for await (const chunk of req) {
    chunks.push(chunk);
  }

  const raw = Buffer.concat(chunks).toString("utf8");

  if (!raw) {
    return {};
  }

  try {
    return JSON.parse(raw);
  } catch {
    return {};
  }
};

const sendJson = (res, statusCode, payload) => {
  res.writeHead(statusCode, {
    "Content-Type": "application/json; charset=utf-8",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,POST,OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  });
  res.end(JSON.stringify(payload));
};

const sendResponse = (res, requestContext, statusCode, payload) => {
  const meta = {
    ...payload.meta,
    requestId: requestContext.requestId,
  };

  const response = {
    ...payload,
    meta,
  };

  sendJson(res, statusCode, response);
  logRequestEnd(
    requestContext.requestId,
    requestContext.method,
    requestContext.pathname,
    statusCode,
    requestContext.startedAt,
    meta.source || "backend",
  );
};

const parseOllamaResponse = async (response) => {
  if (!response.ok) {
    throw new Error(`Ollama request failed with status ${response.status}`);
  }

  const data = await response.json();

  if (typeof data?.response === "string") {
    return parseModelContent(data.response);
  }

  return data?.response ?? data;
};

const parseChatCompletionResponse = async (response) => {
  if (!response.ok) {
    throw new Error(`Model request failed with status ${response.status}`);
  }

  const data = await response.json();
  const content =
    data?.choices?.[0]?.message?.content ??
    data?.choices?.[0]?.text ??
    data?.output ??
    data?.response;

  return parseModelContent(content) ?? data;
};

const buildOpenAICompatibleHeaders = () => {
  const headers = {
    "Content-Type": "application/json; charset=utf-8",
  };

  if (LLM_APP_KEY) {
    headers["Authorization"] = `Bearer ${LLM_APP_KEY}`;
  }

  return headers;
};

const buildOpenAICompatibleUrl = () => {
  const url = new URL(LLM_CHAT_COMPLETIONS_URL);
  const requestId = generateUUID();
  url.searchParams.set("request_id", requestId);
  return { url, requestId };
};

const assertModelCredentials = (featureName) => {
  if (!LLM_APP_KEY) {
    throw new Error(`${featureName} requires LLM_APP_KEY in .env`);
  }
};

const callWithRetry = async (fn, retries = 2, delayMs = 1500) => {
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
        console.log(`Waiting ${exponentialDelay}ms before retry...`);
        await new Promise((resolve) => setTimeout(resolve, exponentialDelay));
      }
    }
  }
  return null;
};

const fetchWithTimeout = async (
  url,
  options = {},
  timeoutMs = LLM_REQUEST_TIMEOUT_MS,
) => {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeoutMs);

  try {
    return await fetch(url, {
      ...options,
      signal: options.signal || controller.signal,
    });
  } finally {
    clearTimeout(timeoutId);
  }
};

const callOpenAICompatibleGenerate = async (prompt, options = {}) => {
  const requestFn = async () => {
    const { url, requestId } = buildOpenAICompatibleUrl();
    const response = await fetchWithTimeout(url.toString(), {
      method: "POST",
      headers: buildOpenAICompatibleHeaders(),
      body: JSON.stringify({
        model: options.model || LLM_MODEL,
        messages: [
          {
            role: "user",
            content: prompt,
          },
        ],
        stream: false,
        temperature: options.temperature ?? 0.7,
        max_tokens: options.maxTokens ?? 4096,
      }),
    }, options.timeoutMs);

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(
        `LLM request failed with status ${response.status}, request_id=${requestId}: ${errorText.slice(0, 300)}`,
      );
    }

    return await parseChatCompletionResponse(response);
  };

  try {
    return await callWithRetry(
      requestFn,
      options.retries ?? 1,
      options.delayMs ?? 800,
    );
  } catch (err) {
    console.error("LLM Request Error after retries:", err);
    return null;
  }
};

const callOllamaGenerate = async (prompt, options = {}) => {
  if (LLM_PROVIDER === "openai-compatible") {
    return callOpenAICompatibleGenerate(prompt, options);
  }

  const requestFn = async () => {
    const response = await fetchWithTimeout(`${OLLAMA_BASE_URL}/generate`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: options.model || OLLAMA_MODEL,
        prompt,
        stream: false,
        ...(options.format ? { format: options.format } : {}),
      }),
    }, options.timeoutMs);

    if (!response.ok) {
      throw new Error(`Ollama request failed with status ${response.status}`);
    }

    return await parseOllamaResponse(response);
  };

  try {
    return await callWithRetry(
      requestFn,
      options.retries ?? 1,
      options.delayMs ?? 800,
    );
  } catch {
    return null;
  }
};

const generateUUID = () => {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    const r = (Math.random() * 16) | 0;
    const v = c == "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};

const callMediaGenerate = async (prompt, type = "comic") => {
  const isVideo = type === "video";

  if (isVideo) {
    return await callVideoGenerate(prompt);
  }

  return await callImageGenerate(prompt);
};

const callImageGenerate = async (prompt) => {
  assertModelCredentials("Image generation");
  const requestId = generateUUID();
  const systemTime = Math.floor(Date.now() / 1000);

  const url = new URL(IMAGE_GENERATE_URL);
  url.searchParams.set("request_id", requestId);
  url.searchParams.set("system_time", systemTime);
  url.searchParams.set("module", "aigc");

  const requestFn = async () => {
    const response = await fetch(url.toString(), {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${LLM_APP_KEY}`,
      },
      body: JSON.stringify({
        model: "Doubao-Seedream-4.5",
        prompt: prompt,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Image generation failed: ${errorText.slice(0, 200)}`);
    }

    const data = await response.json();

    if (data.code !== 0) {
      throw new Error(
        `Image generation API error: ${data.message || "Unknown error"}`,
      );
    }

    return parseImageResponse(data);
  };

  return await callWithRetry(requestFn, 5, 2000);
};

const callVideoGenerate = async (prompt) => {
  assertModelCredentials("Video generation");
  const requestId = generateUUID();
  const systemTime = Math.floor(Date.now() / 1000);

  const url = new URL(VIDEO_GENERATE_URL);
  url.searchParams.set("request_id", requestId);
  url.searchParams.set("system_time", systemTime);
  url.searchParams.set("module", "aigc");

  const requestFn = async () => {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 180000);

    let response;
    try {
      response = await fetch(url.toString(), {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${LLM_APP_KEY}`,
        },
        body: JSON.stringify({
          model: VIDEO_MODEL,
          content: [
            {
              type: "text",
              text: `${prompt} --ratio ${VIDEO_RATIO} --dur ${VIDEO_DURATION_SECONDS}`,
            },
          ],
        }),
        signal: controller.signal,
      });
    } finally {
      clearTimeout(timeoutId);
    }

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Video generation failed: ${errorText.slice(0, 200)}`);
    }

    const data = await response.json();

    if (data.code !== 0) {
      const rateLimit = data?.data?.rate_limit;
      const limitDetail = rateLimit
        ? ` daily_remaining=${rateLimit.daily_remaining}, total_remaining=${rateLimit.total_remaining}`
        : "";
      throw new Error(
        `Video generation API error: ${data.message || "Unknown error"}${limitDetail}`,
      );
    }

    return parseVideoResponse(data);
  };

  return await requestFn();
};

const parseImageResponse = (data) => {
  if (!data || !data.data) return null;

  const imageUrl = data.data.image;
  if (imageUrl) {
    return [
      {
        url: imageUrl,
        id: data.trace_id || Date.now().toString(),
      },
    ];
  }

  return null;
};

const parseVideoResponse = (data) => {
  if (!data || !data.data) return null;

  const taskId = data.data.id;
  if (taskId) {
    return [
      {
        url: null,
        id: taskId,
        taskId: taskId,
        status: "pending",
        traceId: data.trace_id,
      },
    ];
  }

  return null;
};

const queryVideoTask = async (taskId) => {
  assertModelCredentials("Video task query");
  const requestId = generateUUID();
  const systemTime = Math.floor(Date.now() / 1000);

  const url = new URL(VIDEO_QUERY_URL);
  url.searchParams.set("task_id", taskId);
  url.searchParams.set("request_id", requestId);
  url.searchParams.set("system_time", systemTime);
  url.searchParams.set("module", "aigc");

  const requestFn = async () => {
    const response = await fetchWithTimeout(url.toString(), {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${LLM_APP_KEY}`,
      },
    }, 30000);

    if (!response.ok) {
      throw new Error(`Query task failed with status ${response.status}`);
    }

    const data = await response.json();

    if (data.code !== 0) {
      throw new Error(`Query task error: ${data.message}`);
    }

    return data.data;
  };

  try {
    return await callWithRetry(requestFn, 2, 3000);
  } catch (error) {
    console.error("Error querying video task:", error);
    return null;
  }
};
const createRoute = (index, userInfo = {}, context = {}) => {
  const feasibility = Math.max(
    35,
    Math.min(
      92,
      82 - index * 11 + Number(userInfo?.riskPreference === "high") * 8,
    ),
  );
  const names = [
    "稳定职业升级",
    "跨城跳跃成长",
    "长期学习转型",
    "创业试探路线",
    "自由职业实验",
  ];
  const descriptions = [
    "在当前领域继续深耕，争取更高平台和更稳妥的成长曲线。",
    "接受更高风险但更高回报的机会，换取更快的成长速度。",
    "把资源更多投入到学习、证书和技能升级，延迟短期收益。",
    "以小步试错方式探索创业或副业，保留回撤空间。",
    "通过更灵活的工作形式重构生活节奏和收入结构。",
  ];

  return {
    id: `backend_route_${index + 1}`,
    title: names[index] || `后端路线 ${index + 1}`,
    description: descriptions[index] || "后端生成的补充路线。",
    feasibility,
    difficulty: ["低", "中等", "中高", "高", "中等"][index] || "中等",
    benefit:
      ["稳定提升", "高成长", "长期收益", "弹性收益", "结构调整"][index] || "中",
    personality:
      ["稳健型", "进取型", "学习型", "风险偏好型", "平衡型"][index] || "平衡型",
    impactFactors: {
      career: fallbackAttributes.career + index * 2,
      finance: fallbackAttributes.finance + index * 3,
      relationship: fallbackAttributes.relationship - index,
      health: fallbackAttributes.health - index,
      growth: fallbackAttributes.growth + index * 4,
    },
    meta: {
      contextSnapshot: context?.scenario || null,
    },
  };
};

const createContextualRoute = (index, userInfo = {}, context = {}) => {
  const selectedNode = context?.selectedNode || {};
  const allNodes = Array.isArray(context?.treeNodes) ? context.treeNodes : [];
  const selectedNodeId = selectedNode.id || "current";
  const selectedNodeTitle = selectedNode.title || "当前节点";
  const selectedDepth = Number(selectedNode.depth || 1);
  const childCount = allNodes.filter((node) => node.parentId === selectedNodeId).length;
  const city = userInfo?.city || context?.city || "当前城市";
  const goal = userInfo?.lifeGoals || context?.goals || "长期目标";
  const occupation = userInfo?.occupation || "当前职业";
  const feasibilityOffset = (selectedDepth * 3 + childCount * 5) % 13;
  const feasibility = Math.max(
    35,
    Math.min(
      92,
      84 - index * 9 - selectedDepth * 2 + feasibilityOffset + Number(userInfo?.riskPreference === "high") * 6,
    ),
  );
  const routeTypes = [
    {
      title: "稳态深化",
      difficulty: "中等",
      benefit: "稳定提升",
      personality: "稳健型",
      focus: `保留${occupation}的主线优势，在${city}围绕“${selectedNodeTitle}”继续积累资源和确定性。`,
      milestones: ["定义下一阶段指标", "完成一次能力补强", "获得关键反馈"],
      opportunities: ["风险较低", "资源连续性强"],
      risks: ["节奏可能偏慢", "容易被惯性限制"],
      delta: { career: 7, finance: 5, relationship: 2, health: 1, growth: 6 },
    },
    {
      title: "跃迁试探",
      difficulty: "中高",
      benefit: "高成长",
      personality: "进取型",
      focus: `从“${selectedNodeTitle}”向外寻找更高平台、跨领域项目或关键合作，用更密集的行动换取成长速度。`,
      milestones: ["筛选三个外部机会", "完成一次作品展示", "决定是否放大投入"],
      opportunities: ["打开新资源面", "成长速度更快"],
      risks: ["短期压力上升", "结果不确定性较高"],
      delta: { career: 12, finance: 4, relationship: 4, health: -3, growth: 13 },
    },
    {
      title: "低成本实验",
      difficulty: "中等",
      benefit: "弹性收益",
      personality: "平衡型",
      focus: `把“${selectedNodeTitle}”拆成小实验，先验证副业、学习、作品、访谈或城市机会，再决定是否转向。`,
      milestones: ["设计两周实验", "记录投入产出", "选择保留、放大或放弃"],
      opportunities: ["回撤成本低", "能积累真实反馈"],
      risks: ["前期收益不明显", "需要持续复盘"],
      delta: { career: 6, finance: 2, relationship: 3, health: 0, growth: 10 },
    },
    {
      title: "关系资源扩展",
      difficulty: "中等",
      benefit: "资源增益",
      personality: "协作型",
      focus: `围绕“${selectedNodeTitle}”建立新的支持网络，把目标“${goal}”转化为可被他人理解和支持的合作议题。`,
      milestones: ["列出十个关键联系人", "完成三次深度沟通", "形成一个合作试点"],
      opportunities: ["获得外部支持", "降低单人决策盲区"],
      risks: ["沟通成本增加", "需要管理预期"],
      delta: { career: 5, finance: 3, relationship: 10, health: 1, growth: 7 },
    },
    {
      title: "生活结构重排",
      difficulty: "中高",
      benefit: "长期平衡",
      personality: "平衡型",
      focus: `不只追求路径结果，也重排时间、健康、收入和关系结构，让“${selectedNodeTitle}”能支撑更长周期的${goal}。`,
      milestones: ["审视时间分配", "设定健康底线", "形成月度复盘机制"],
      opportunities: ["可持续性更强", "减少后悔风险"],
      risks: ["短期推进变慢", "需要放弃部分机会"],
      delta: { career: 3, finance: 2, relationship: 4, health: 9, growth: 8 },
    },
  ];
  const routeType = routeTypes[(index + selectedDepth + childCount) % routeTypes.length];
  const clamp = (value) => Math.max(0, Math.min(100, value));

  return {
    id: `backend_route_${selectedNodeId}_${childCount}_${index + 1}_${Date.now()}`,
    title: routeType.title,
    description: `${routeType.focus} 当前处在第 ${selectedDepth} 层分支，已有 ${childCount} 条后续尝试；这条路线建议用 4-8 周做一次可回撤验证，再根据结果决定是否继续扩展。`,
    feasibility,
    difficulty: routeType.difficulty,
    benefit: routeType.benefit,
    personality: routeType.personality,
    impactFactors: {
      career: clamp(fallbackAttributes.career + routeType.delta.career + index),
      finance: clamp(fallbackAttributes.finance + routeType.delta.finance + index),
      relationship: clamp(fallbackAttributes.relationship + routeType.delta.relationship - index),
      health: clamp(fallbackAttributes.health + routeType.delta.health - index),
      growth: clamp(fallbackAttributes.growth + routeType.delta.growth + selectedDepth),
    },
    milestones: routeType.milestones,
    opportunities: routeType.opportunities,
    risks: routeType.risks,
    meta: {
      contextSnapshot: context?.scenario || null,
      selectedNodeId,
      selectedNodeTitle,
      selectedDepth,
      childCount,
    },
  };
};

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

const normalizeGeneratedRoute = (route, index = 0) => {
  const rawFeasibility = Number(route?.feasibility ?? 60);
  const feasibility =
    rawFeasibility < 10 ? Math.round(rawFeasibility * 100) : rawFeasibility;

  const normalizedImpactFactors = normalizeImpactFactors(route?.impactFactors);

  return {
    id: route?.id || `backend_route_${Date.now()}_${index}`,
    title: route?.title || route?.name || `后端路线${index + 1}`,
    description: route?.description || "暂无描述",
    feasibility,
    difficulty: route?.difficulty || "中等",
    benefit: route?.benefit || "中",
    personality: route?.personality || "平衡型",
    impactFactors: normalizedImpactFactors ||
      route?.attributeDeltaMap ||
      route?.impacts || {
        career: fallbackAttributes.career,
        finance: fallbackAttributes.finance,
        relationship: fallbackAttributes.relationship,
        health: fallbackAttributes.health,
        growth: fallbackAttributes.growth,
      },
    stages: route?.stages || [],
    milestones: route?.milestones || [],
    opportunities: route?.opportunities || [],
    risks: route?.risks || [],
  };
};

const buildScenario = (userInfo = {}) => ({
  scenario: `你目前在${userInfo.city || "一线城市"}工作，拥有${userInfo.occupation || "一份稳定职业"}，现在面临一次是否改变人生节奏的关键决策。`,
  options: [
    { text: "继续留在当前轨道，稳步积累", style: "风险规避型" },
    { text: "主动切换赛道，追求更快成长", style: "风险偏好型" },
    { text: "先提升能力，再择机行动", style: "平衡型" },
    { text: "尝试副业或项目制探索", style: "成长型" },
  ],
});

const normalizeScenario = (result, userInfo = {}) => {
  if (typeof result === "string" && result.trim()) {
    return {
      scenario: result.trim(),
      options: buildScenario(userInfo).options,
    };
  }

  if (result && typeof result === "object") {
    return {
      scenario: result.scenario || buildScenario(userInfo).scenario,
      options:
        Array.isArray(result.options) && result.options.length
          ? result.options
          : buildScenario(userInfo).options,
    };
  }

  return buildScenario(userInfo);
};

const buildAdvice = (question = "", context = {}) => {
  const topic = String(question || "当前处境").slice(0, 30);
  return `针对“${topic}”，更稳妥的做法是先保留基本盘，再围绕${context?.selectedRoute?.title || "当前选择"}做小步试验。先明确代价、回撤和时间边界，再决定是否放大投入。`;
};

const normalizeAdvice = (result, question, context) => {
  let text = "";

  if (typeof result === "string" && result.trim()) {
    text = result.trim();
  } else if (result && typeof result === "object") {
    text = result.advice || result.answer || result.response || "";
  }

  if (text) {
    text = text
      .replace(/\*\*\*/g, "")
      .replace(/###/g, "")
      .replace(/\*\*([^*]+)\*\*/g, "$1")
      .replace(/\*([^*]+)\*/g, "$1")
      .replace(/`{1,3}/g, "")
      .replace(/\n{3,}/g, "\n\n")
      .replace(/\r\n/g, "\n")
      .trim();
    return text;
  }

  return buildAdvice(question, context);
};

const buildRegretReport = (payload = {}) => {
  const routeTitle = payload?.selectedRoute?.title || "未选择路线";
  return {
    regretLevel: 28,
    regretText: "可控遗憾",
    analysis: `当前路径整体偏稳健，最大的不确定性来自于是否错过更高回报机会。结合${routeTitle}来看，整体风险仍在可接受区间。`,
    advice: "后续把决策拆成更小的可逆步骤，先验证再扩张。",
  };
};

const normalizeRegretReport = (result, payload = {}) => {
  if (result && typeof result === "object") {
    return {
      regretLevel: Number(result.regretLevel ?? 28),
      regretText: result.regretText || "可控遗憾",
      analysis: result.analysis || buildRegretReport(payload).analysis,
      advice: result.advice || buildRegretReport(payload).advice,
    };
  }

  return buildRegretReport(payload);
};

const buildPlanningFileSummary = (name, extension) => {
  if (extension === "docx") {
    return `已上传规划文档《${name}》。当前后端暂未对 .docx 做完整正文提取，将先记录文件元信息供路线描述使用。`;
  }

  if (extension === "doc") {
    return `已上传 Word 文档《${name}》。当前后端暂未对旧版 .doc 做完整正文提取，将先记录文件元信息供路线描述使用。`;
  }

  return `已上传文件《${name}》，当前以后端兜底摘要形式接入。`;
};

const buildPlanningExtraction = (payload = {}) => {
  const name = payload?.name || "未命名文件";
  const extension = String(payload?.extension || "").toLowerCase();
  const baseMeta = {
    name,
    extension,
    size: payload?.size || 0,
    uploadedAt: new Date().toISOString(),
  };

  if (TEXT_FILE_EXTENSIONS.has(extension)) {
    const normalizedText = normalizeWhitespace(payload?.text || "").slice(
      0,
      MAX_TEXT_LENGTH,
    );

    return {
      text: normalizedText,
      meta: {
        ...baseMeta,
        extractionMode: "text",
        summary: normalizedText
          ? `已提取 ${name} 的文本内容，可作为自定义路线参考。`
          : `已上传 ${name}，但文件内容为空。`,
      },
    };
  }

  if (OFFICE_FILE_EXTENSIONS.has(extension)) {
    const summary = buildPlanningFileSummary(name, extension);

    return {
      text: summary,
      meta: {
        ...baseMeta,
        extractionMode: "metadata-only",
        summary,
      },
    };
  }

  throw new Error(
    `暂不支持 .${extension || "unknown"} 文件，请上传 txt、md、json、csv、tsv、doc 或 docx`,
  );
};

const buildScenarioPrompt = (
  userInfo = {},
) => `基于用户信息生成一个情境化测评场景，要求只返回 JSON。

用户信息：${JSON.stringify(userInfo, null, 2)}

返回格式：
{
  "scenario": "一句完整的情境描述",
  "options": [
    { "text": "选项文本", "style": "决策风格" }
  ]
}`;

const buildRoutesPrompt = (
  userInfo = {},
  context = {},
) => `作为人生推演AI，请根据用户提供的人生树节点信息、当前选择和个人情况，为其衍化、扩展出 3-5 条更完整、更具象的具体人生路线。

用户信息：${JSON.stringify(userInfo, null, 2)}

人生树节点信息：${JSON.stringify(context?.treeNodes || [], null, 2)}

当前选择节点：${JSON.stringify(context?.selectedNode || {}, null, 2)}

其他情境：${JSON.stringify({ city: context?.city, goals: context?.goals, attributes: context?.attributes }, null, 2)}

分析要求：
1. 仔细分析人生树中的所有节点，理解用户已经做出的选择和可能的分支
2. 根据当前选择节点，推演未来可能的发展路径
3. 结合用户的个人情况（城市、目标、属性），生成符合其实际情况的路线
4. 每条路线都要考虑执行阶段、里程碑、机遇和风险

返回格式要求：
{
  "routes": [
    {
      "title": "响亮的路线名称(例如：稳健型主业精进路线)",
      "description": "基于用户规划延伸出的详细执行阶段、里程碑、机遇和风险等详细描述（扩展为完整的人生路线）",
      "feasibility": 0,
      "difficulty": "难度等级",
      "benefit": "预期收益",
      "personality": "适合的人格类型",
      "impactFactors": {
        "career": 0,
        "finance": 0,
        "relationship": 0,
        "health": 0,
        "growth": 0
      },
      "stages": [
        {"phase": "阶段1", "duration": "3-6个月", "focus": "核心任务和目标"}
      ],
      "milestones": ["关键里程碑1", "关键里程碑2", "关键里程碑3"],
      "opportunities": ["可能的机遇1", "可能的机遇2"],
      "risks": ["潜在风险1", "潜在风险2"]
    }
  ]
}`;

const buildAdvicePrompt = (question = "", context = {}) => {
  const role = context?.role || "人生顾问";

  const rolePersonalities = {
    职场导师: "专业、务实、注重结果，使用职场术语，强调执行力和职业发展",
    情感顾问: "温暖、关怀、同理心强，语言柔和，注重情感支持和心理建设",
    创业前辈: "经验丰富、直爽、注重实战，使用创业术语，强调风险控制和验证",
    人生规划师:
      "宏观视野、理性分析、注重平衡，语言全面，强调长期规划和多维度发展",
  };

  const personality = rolePersonalities[role] || "中立客观，注重实用性和可行性";

  return `你是${role}，${personality}。请回答用户问题。

问题：${question}
当前情境：${JSON.stringify(context, null, 2)}

要求：
1. 先回应用户的问题，表达理解、鼓励或适当的反馈（2-3句话）
2. 然后再分条给出具体建议
3. 分条列出时使用数字开头（1. 2. 3.），每条建议单独一行
4. 避免使用Markdown符号（如***、###、**）
5. 语言要符合${role}的口吻，让用户感受到专业且贴心的指导
6. 建议要有针对性，结合用户当前情境给出具体可执行的建议
7. 结尾可以加一句鼓励或总结的话`;
};

const buildRegretPrompt = (
  payload = {},
) => `基于用户的人生路径计算后悔值，要求只返回 JSON。

人生路径：${JSON.stringify(payload, null, 2)}

返回格式：
{
  "regretLevel": 0,
  "regretText": "后悔评级文本",
  "analysis": "详细分析",
  "advice": "人生建议"
}`;

const handleRequest = async (req, res, requestContext) => {
  const url = new URL(req.url, `http://${req.headers.host}`);

  logRequestStart(
    requestContext.requestId,
    requestContext.method,
    requestContext.pathname,
  );

  if (req.method === "GET" && url.pathname === "/api/health") {
    sendResponse(res, requestContext, 200, {
      ok: true,
      data: { status: "up" },
      error: null,
      meta: BASE_META,
    });
    return;
  }

  if (req.method === "OPTIONS") {
    sendResponse(res, requestContext, 204, {
      ok: true,
      data: null,
      error: null,
      meta: BASE_META,
    });
    return;
  }

  if (req.method !== "POST") {
    sendResponse(res, requestContext, 404, {
      ok: false,
      data: null,
      error: { message: "Not Found", code: "NOT_FOUND" },
      meta: BASE_META,
    });
    return;
  }

  const body = await readBody(req);

  if (url.pathname === "/api/scenario") {
    const modelResult = await callOllamaGenerate(
      buildScenarioPrompt(body.userInfo),
      { format: "json" },
    );
    const scenario = normalizeScenario(modelResult, body.userInfo);
    sendResponse(res, requestContext, 200, {
      ok: true,
      data: scenario,
      error: null,
      meta: buildResultMeta(modelResult ? "model" : "backend"),
    });
    return;
  }

  if (url.pathname === "/api/routes") {
    const modelResult = await callOllamaGenerate(
      buildRoutesPrompt(body.userInfo, body.context),
      { format: "json", model: LLM_ROUTE_MODEL, timeoutMs: 60000 },
    );
    console.log(
      "[DEBUG] /api/routes modelResult:",
      JSON.stringify(modelResult, null, 2).slice(0, 500),
    );
    const routes =
      Array.isArray(modelResult?.routes) && modelResult.routes.length
        ? modelResult.routes
            .slice(0, 5)
            .map((route, index) => normalizeGeneratedRoute(route, index))
        : Array.from({ length: 5 }, (_, index) =>
            createContextualRoute(index, body.userInfo, body.context),
          );
    sendResponse(res, requestContext, 200, {
      ok: true,
      data: routes,
      error: null,
      meta: buildResultMeta(modelResult ? "model" : "backend", {
        count: routes.length,
      }),
    });
    return;
  }

  if (url.pathname === "/api/advisor/reply") {
    const modelResult = await callOllamaGenerate(
      buildAdvicePrompt(body.question, body.context),
      { format: "json" },
    );
    sendResponse(res, requestContext, 200, {
      ok: true,
      data: normalizeAdvice(modelResult, body.question, body.context),
      error: null,
      meta: buildResultMeta(modelResult ? "model" : "backend"),
    });
    return;
  }

  if (url.pathname === "/api/regret-report") {
    const modelResult = await callOllamaGenerate(buildRegretPrompt(body), {
      format: "json",
    });
    sendResponse(res, requestContext, 200, {
      ok: true,
      data: normalizeRegretReport(modelResult, body),
      error: null,
      meta: buildResultMeta(modelResult ? "model" : "backend"),
    });
    return;
  }

  if (url.pathname === "/api/planning-file/extract") {
    const extraction = buildPlanningExtraction(body);
    sendResponse(res, requestContext, 200, {
      ok: true,
      data: extraction,
      error: null,
      meta: {
        ...BASE_META,
        extractionMode: extraction?.meta?.extractionMode || "unknown",
      },
    });
    return;
  }

  if (url.pathname === "/api/media/generate") {
    try {
      const mediaResult = await callMediaGenerate(body.prompt, body.type);
      sendResponse(res, requestContext, 200, {
        ok: !!mediaResult,
        data: mediaResult,
        error: mediaResult
          ? null
          : { message: "Media generation failed", code: "MEDIA_REQUEST_FAILED" },
        meta: buildResultMeta(mediaResult ? "model" : "backend"),
      });
    } catch (error) {
      sendResponse(res, requestContext, 200, {
        ok: false,
        data: null,
        error: {
          message: error?.message || "Media generation failed",
          code: "MEDIA_REQUEST_FAILED",
        },
        meta: buildResultMeta("backend"),
      });
    }
    return;
  }

  if (url.pathname === "/api/media/query-video") {
    const taskId = body.taskId;
    if (!taskId) {
      sendResponse(res, requestContext, 400, {
        ok: false,
        data: null,
        error: { message: "taskId is required", code: "INVALID_PARAMS" },
        meta: BASE_META,
      });
      return;
    }

    const taskResult = await queryVideoTask(taskId);
    sendResponse(res, requestContext, 200, {
      ok: !!taskResult,
      data: taskResult,
      error: taskResult
        ? null
        : { message: "Query video task failed", code: "QUERY_TASK_FAILED" },
      meta: BASE_META,
    });
    return;
  }

  sendResponse(res, requestContext, 404, {
    ok: false,
    data: null,
    error: { message: "Not Found", code: "NOT_FOUND" },
    meta: BASE_META,
  });
};

const server = http.createServer((req, res) => {
  const requestContext = {
    requestId: createRequestId(),
    method: req.method,
    pathname: new URL(req.url, `http://${req.headers.host}`).pathname,
    startedAt: Date.now(),
  };

  handleRequest(req, res, requestContext).catch((error) => {
    sendResponse(res, requestContext, 500, {
      ok: false,
      data: null,
      error: {
        message: error?.message || "Internal Server Error",
        code: "INTERNAL_SERVER_ERROR",
      },
      meta: BASE_META,
    });
  });
});

server.listen(PORT, () => {
  console.log(`Backend API listening on http://localhost:${PORT}`);
});
