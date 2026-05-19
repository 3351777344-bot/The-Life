import http from 'node:http'

const PORT = Number(process.env.PORT || 3001)
const OLLAMA_BASE_URL = process.env.OLLAMA_BASE_URL || 'http://localhost:11434/api'
const OLLAMA_MODEL = process.env.OLLAMA_MODEL || 'llama3'
const BASE_META = {
  source: 'backend',
  mode: 'backend-api',
  modeLabel: '后端 API'
}

const fallbackAttributes = {
  career: 70,
  finance: 65,
  relationship: 75,
  health: 68,
  growth: 72
}

const TEXT_FILE_EXTENSIONS = new Set(['txt', 'md', 'json', 'csv', 'tsv'])
const OFFICE_FILE_EXTENSIONS = new Set(['doc', 'docx'])
const MAX_TEXT_LENGTH = 4000

const normalizeWhitespace = (text = '') => String(text).replace(/\s+/g, ' ').trim()

const buildResultMeta = (source, extra = {}) => ({
  ...BASE_META,
  source,
  ...extra
})

const readBody = async (req) => {
  const chunks = []

  for await (const chunk of req) {
    chunks.push(chunk)
  }

  const raw = Buffer.concat(chunks).toString('utf8')

  if (!raw) {
    return {}
  }

  try {
    return JSON.parse(raw)
  } catch {
    return {}
  }
}

const sendJson = (res, statusCode, payload) => {
  res.writeHead(statusCode, {
    'Content-Type': 'application/json; charset=utf-8',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,POST,OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type'
  })
  res.end(JSON.stringify(payload))
}

const parseOllamaResponse = async (response) => {
  if (!response.ok) {
    throw new Error(`Ollama request failed with status ${response.status}`)
  }

  const data = await response.json()

  if (typeof data?.response === 'string') {
    const text = data.response.trim()

    if (!text) {
      return ''
    }

    try {
      return JSON.parse(text)
    } catch {
      return text
    }
  }

  return data?.response ?? data
}

const callOllamaGenerate = async (prompt, options = {}) => {
  try {
    const response = await fetch(`${OLLAMA_BASE_URL}/generate`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: options.model || OLLAMA_MODEL,
        prompt,
        stream: false,
        ...(options.format ? { format: options.format } : {})
      })
    })

    return await parseOllamaResponse(response)
  } catch {
    return null
  }
}

const createRoute = (index, userInfo = {}, context = {}) => {
  const feasibility = Math.max(35, Math.min(92, 82 - index * 11 + Number(userInfo?.riskPreference === 'high') * 8))
  const names = ['稳定职业升级', '跨城跳跃成长', '长期学习转型', '创业试探路线', '自由职业实验']
  const descriptions = [
    '在当前领域继续深耕，争取更高平台和更稳妥的成长曲线。',
    '接受更高风险但更高回报的机会，换取更快的成长速度。',
    '把资源更多投入到学习、证书和技能升级，延迟短期收益。',
    '以小步试错方式探索创业或副业，保留回撤空间。',
    '通过更灵活的工作形式重构生活节奏和收入结构。'
  ]

  return {
    id: `backend_route_${index + 1}`,
    title: names[index] || `后端路线 ${index + 1}`,
    description: descriptions[index] || '后端生成的补充路线。',
    feasibility,
    difficulty: ['低', '中等', '中高', '高', '中等'][index] || '中等',
    benefit: ['稳定提升', '高成长', '长期收益', '弹性收益', '结构调整'][index] || '中',
    personality: ['稳健型', '进取型', '学习型', '风险偏好型', '平衡型'][index] || '平衡型',
    impactFactors: {
      career: fallbackAttributes.career + index * 2,
      finance: fallbackAttributes.finance + index * 3,
      relationship: fallbackAttributes.relationship - index,
      health: fallbackAttributes.health - index,
      growth: fallbackAttributes.growth + index * 4
    },
    meta: {
      contextSnapshot: context?.scenario || null
    }
  }
}

const normalizeGeneratedRoute = (route, index = 0) => ({
  id: route?.id || `backend_route_${Date.now()}_${index}`,
  title: route?.title || route?.name || `后端路线${index + 1}`,
  description: route?.description || '暂无描述',
  feasibility: Number(route?.feasibility ?? 60),
  difficulty: route?.difficulty || '中等',
  benefit: route?.benefit || '中',
  personality: route?.personality || '平衡型',
  impactFactors: route?.impactFactors || route?.attributeDeltaMap || route?.impacts || {
    career: fallbackAttributes.career,
    finance: fallbackAttributes.finance,
    relationship: fallbackAttributes.relationship,
    health: fallbackAttributes.health,
    growth: fallbackAttributes.growth
  }
})

const buildScenario = (userInfo = {}) => ({
  scenario: `你目前在${userInfo.city || '一线城市'}工作，拥有${userInfo.occupation || '一份稳定职业'}，现在面临一次是否改变人生节奏的关键决策。`,
  options: [
    { text: '继续留在当前轨道，稳步积累', style: '风险规避型' },
    { text: '主动切换赛道，追求更快成长', style: '风险偏好型' },
    { text: '先提升能力，再择机行动', style: '平衡型' },
    { text: '尝试副业或项目制探索', style: '成长型' }
  ]
})

const normalizeScenario = (result, userInfo = {}) => {
  if (typeof result === 'string' && result.trim()) {
    return {
      scenario: result.trim(),
      options: buildScenario(userInfo).options
    }
  }

  if (result && typeof result === 'object') {
    return {
      scenario: result.scenario || buildScenario(userInfo).scenario,
      options: Array.isArray(result.options) && result.options.length ? result.options : buildScenario(userInfo).options
    }
  }

  return buildScenario(userInfo)
}

const buildAdvice = (question = '', context = {}) => {
  const topic = String(question || '当前处境').slice(0, 30)
  return `针对“${topic}”，更稳妥的做法是先保留基本盘，再围绕${context?.selectedRoute?.title || '当前选择'}做小步试验。先明确代价、回撤和时间边界，再决定是否放大投入。`
}

const normalizeAdvice = (result, question, context) => {
  if (typeof result === 'string' && result.trim()) {
    return result.trim()
  }

  if (result && typeof result === 'object') {
    return result.advice || result.answer || result.response || buildAdvice(question, context)
  }

  return buildAdvice(question, context)
}

const buildRegretReport = (payload = {}) => {
  const routeTitle = payload?.selectedRoute?.title || '未选择路线'
  return {
    regretLevel: 28,
    regretText: '可控遗憾',
    analysis: `当前路径整体偏稳健，最大的不确定性来自于是否错过更高回报机会。结合${routeTitle}来看，整体风险仍在可接受区间。`,
    advice: '后续把决策拆成更小的可逆步骤，先验证再扩张。'
  }
}

const normalizeRegretReport = (result, payload = {}) => {
  if (result && typeof result === 'object') {
    return {
      regretLevel: Number(result.regretLevel ?? 28),
      regretText: result.regretText || '可控遗憾',
      analysis: result.analysis || buildRegretReport(payload).analysis,
      advice: result.advice || buildRegretReport(payload).advice
    }
  }

  return buildRegretReport(payload)
}

const buildPlanningFileSummary = (name, extension) => {
  if (extension === 'docx') {
    return `已上传规划文档《${name}》。当前后端暂未对 .docx 做完整正文提取，将先记录文件元信息供路线描述使用。`
  }

  if (extension === 'doc') {
    return `已上传 Word 文档《${name}》。当前后端暂未对旧版 .doc 做完整正文提取，将先记录文件元信息供路线描述使用。`
  }

  return `已上传文件《${name}》，当前以后端兜底摘要形式接入。`
}

const buildPlanningExtraction = (payload = {}) => {
  const name = payload?.name || '未命名文件'
  const extension = String(payload?.extension || '').toLowerCase()
  const baseMeta = {
    name,
    extension,
    size: payload?.size || 0,
    uploadedAt: new Date().toISOString()
  }

  if (TEXT_FILE_EXTENSIONS.has(extension)) {
    const normalizedText = normalizeWhitespace(payload?.text || '').slice(0, MAX_TEXT_LENGTH)

    return {
      text: normalizedText,
      meta: {
        ...baseMeta,
        extractionMode: 'text',
        summary: normalizedText
          ? `已提取 ${name} 的文本内容，可作为自定义路线参考。`
          : `已上传 ${name}，但文件内容为空。`
      }
    }
  }

  if (OFFICE_FILE_EXTENSIONS.has(extension)) {
    const summary = buildPlanningFileSummary(name, extension)

    return {
      text: summary,
      meta: {
        ...baseMeta,
        extractionMode: 'metadata-only',
        summary
      }
    }
  }

  throw new Error(`暂不支持 .${extension || 'unknown'} 文件，请上传 txt、md、json、csv、tsv、doc 或 docx`)
}

const buildScenarioPrompt = (userInfo = {}) => `基于用户信息生成一个情境化测评场景，要求只返回 JSON。

用户信息：${JSON.stringify(userInfo, null, 2)}

返回格式：
{
  "scenario": "一句完整的情境描述",
  "options": [
    { "text": "选项文本", "style": "决策风格" }
  ]
}`

const buildRoutesPrompt = (userInfo = {}, context = {}) => `基于用户信息和当前情境生成 3-5 条人生路线建议，要求只返回 JSON。

用户信息：${JSON.stringify(userInfo, null, 2)}
当前情境：${JSON.stringify(context, null, 2)}

返回格式：
{
  "routes": [
    {
      "title": "路线名称",
      "description": "详细描述",
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
      }
    }
  ]
}`

const buildAdvicePrompt = (question = '', context = {}) => `作为人生顾问，回答用户问题。

问题：${question}
当前情境：${JSON.stringify(context, null, 2)}

请给出清晰、现实、可执行的建议。`

const buildRegretPrompt = (payload = {}) => `基于用户的人生路径计算后悔值，要求只返回 JSON。

人生路径：${JSON.stringify(payload, null, 2)}

返回格式：
{
  "regretLevel": 0,
  "regretText": "后悔评级文本",
  "analysis": "详细分析",
  "advice": "人生建议"
}`

const handleRequest = async (req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`)

  if (req.method === 'GET' && url.pathname === '/api/health') {
    sendJson(res, 200, { ok: true, data: { status: 'up' }, error: null, meta: BASE_META })
    return
  }

  if (req.method === 'OPTIONS') {
    sendJson(res, 204, '')
    return
  }

  if (req.method !== 'POST') {
    sendJson(res, 404, { ok: false, data: null, error: { message: 'Not Found', code: 'NOT_FOUND' }, meta: BASE_META })
    return
  }

  const body = await readBody(req)

  if (url.pathname === '/api/scenario') {
    const modelResult = await callOllamaGenerate(buildScenarioPrompt(body.userInfo), { format: 'json' })
    const scenario = normalizeScenario(modelResult, body.userInfo)
    sendJson(res, 200, {
      ok: true,
      data: scenario,
      error: null,
      meta: buildResultMeta(modelResult ? 'model' : 'backend')
    })
    return
  }

  if (url.pathname === '/api/routes') {
    const modelResult = await callOllamaGenerate(buildRoutesPrompt(body.userInfo, body.context), { format: 'json' })
    const routes = Array.isArray(modelResult?.routes) && modelResult.routes.length
      ? modelResult.routes.slice(0, 5).map((route, index) => normalizeGeneratedRoute(route, index))
      : Array.from({ length: 5 }, (_, index) => createRoute(index, body.userInfo, body.context))
    sendJson(res, 200, {
      ok: true,
      data: routes,
      error: null,
      meta: buildResultMeta(modelResult ? 'model' : 'backend', { count: routes.length })
    })
    return
  }

  if (url.pathname === '/api/advisor/reply') {
    const modelResult = await callOllamaGenerate(buildAdvicePrompt(body.question, body.context), { format: 'json' })
    sendJson(res, 200, {
      ok: true,
      data: normalizeAdvice(modelResult, body.question, body.context),
      error: null,
      meta: buildResultMeta(modelResult ? 'model' : 'backend')
    })
    return
  }

  if (url.pathname === '/api/regret-report') {
    const modelResult = await callOllamaGenerate(buildRegretPrompt(body), { format: 'json' })
    sendJson(res, 200, {
      ok: true,
      data: normalizeRegretReport(modelResult, body),
      error: null,
      meta: buildResultMeta(modelResult ? 'model' : 'backend')
    })
    return
  }

  if (url.pathname === '/api/planning-file/extract') {
    const extraction = buildPlanningExtraction(body)
    sendJson(res, 200, {
      ok: true,
      data: extraction,
      error: null,
      meta: {
        ...BASE_META,
        extractionMode: extraction?.meta?.extractionMode || 'unknown'
      }
    })
    return
  }

  sendJson(res, 404, { ok: false, data: null, error: { message: 'Not Found', code: 'NOT_FOUND' }, meta: BASE_META })
}

const server = http.createServer((req, res) => {
  handleRequest(req, res).catch((error) => {
    sendJson(res, 500, {
      ok: false,
      data: null,
      error: {
        message: error?.message || 'Internal Server Error',
        code: 'INTERNAL_SERVER_ERROR'
      },
      meta: BASE_META
    })
  })
})

server.listen(PORT, () => {
  console.log(`Backend API listening on http://localhost:${PORT}`)
})