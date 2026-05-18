import { generateRoute, getAIAdvice, generateScenario, calculateRegret } from './ollamaService'
import { extractPlanningFileContent } from './planningFileService'
import { getRouteAttributeDeltas, normalizeGeneratedRoute } from './routeStateService'
import { buildRegretReportPayload } from './journeyStateService'
import { createSuccessResult, createErrorResult } from './serviceResult'

export const requestScenario = async (userInfo) => {
  try {
    const scenario = await generateScenario(userInfo)
    return createSuccessResult(scenario, { source: 'model' })
  } catch {
    return createErrorResult('场景生成失败，请稍后重试。', { code: 'SCENARIO_REQUEST_FAILED' })
  }
}

export const requestRoutes = async (userInfo, context) => {
  try {
    const response = await generateRoute(userInfo, context)
    const routes = Array.isArray(response?.routes) ? response.routes : []
    return createSuccessResult(routes.slice(0, 5).map((route, index) => normalizeGeneratedRoute(route, index)), {
      source: 'model',
      count: routes.length
    })
  } catch {
    return createErrorResult('路线生成失败，请稍后重试。', { code: 'ROUTE_REQUEST_FAILED' })
  }
}

export const requestAdvisorReply = async (question, context) => {
  try {
    const reply = await getAIAdvice(question, context)
    return createSuccessResult(reply, { source: 'model' })
  } catch {
    return createErrorResult('顾问暂时无法回复，请稍后重试。', { code: 'ADVISOR_REQUEST_FAILED' })
  }
}

export const requestRegretReport = async (payload) => {
  try {
    const reportPayload = buildRegretReportPayload(payload)
    const report = await calculateRegret(reportPayload)
    return createSuccessResult(report, { source: 'model' })
  } catch {
    return createErrorResult('终局报告生成失败，请稍后重试。', { code: 'REPORT_REQUEST_FAILED' })
  }
}

export const requestPlanningFileExtraction = async (file) => {
  try {
    const result = await extractPlanningFileContent(file)
    return createSuccessResult(result, {
      source: 'file',
      extractionMode: result?.meta?.extractionMode || 'unknown'
    })
  } catch (error) {
    return createErrorResult(error?.message || '文件处理失败，请更换文件后重试。', { code: 'FILE_EXTRACTION_FAILED' })
  }
}

export const resolveRouteAttributeDeltas = (route, currentAttributes) => getRouteAttributeDeltas(route, currentAttributes)
