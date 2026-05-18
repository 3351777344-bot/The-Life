import { generateRoute, getAIAdvice, generateScenario, calculateRegret } from './ollamaService'
import { extractPlanningFileContent } from './planningFileService'
import { getRouteAttributeDeltas, normalizeGeneratedRoute } from './routeStateService'
import { buildRegretReportPayload } from './journeyStateService'
import { createSuccessResult, createErrorResult } from './serviceResult'
import { activeServiceMode, getServiceModeLabel } from './serviceConfig'
import { SERVICE_ERROR_CODE, SERVICE_META_KEY, SERVICE_SOURCE } from './serviceContracts'

export const requestScenario = async (userInfo) => {
  try {
    const scenario = await generateScenario(userInfo)
    return createSuccessResult(scenario, {
      [SERVICE_META_KEY.SOURCE]: SERVICE_SOURCE.MODEL,
      [SERVICE_META_KEY.MODE]: activeServiceMode,
      [SERVICE_META_KEY.MODE_LABEL]: getServiceModeLabel()
    })
  } catch {
    return createErrorResult('场景生成失败，请稍后重试。', {
      code: SERVICE_ERROR_CODE.SCENARIO_REQUEST_FAILED,
      [SERVICE_META_KEY.MODE]: activeServiceMode,
      [SERVICE_META_KEY.MODE_LABEL]: getServiceModeLabel()
    })
  }
}

export const requestRoutes = async (userInfo, context) => {
  try {
    const response = await generateRoute(userInfo, context)
    const routes = Array.isArray(response?.routes) ? response.routes : []
    return createSuccessResult(routes.slice(0, 5).map((route, index) => normalizeGeneratedRoute(route, index)), {
      [SERVICE_META_KEY.SOURCE]: SERVICE_SOURCE.MODEL,
      [SERVICE_META_KEY.COUNT]: routes.length,
      [SERVICE_META_KEY.MODE]: activeServiceMode,
      [SERVICE_META_KEY.MODE_LABEL]: getServiceModeLabel()
    })
  } catch {
    return createErrorResult('路线生成失败，请稍后重试。', {
      code: SERVICE_ERROR_CODE.ROUTE_REQUEST_FAILED,
      [SERVICE_META_KEY.MODE]: activeServiceMode,
      [SERVICE_META_KEY.MODE_LABEL]: getServiceModeLabel()
    })
  }
}

export const requestAdvisorReply = async (question, context) => {
  try {
    const reply = await getAIAdvice(question, context)
    return createSuccessResult(reply, {
      [SERVICE_META_KEY.SOURCE]: SERVICE_SOURCE.MODEL,
      [SERVICE_META_KEY.MODE]: activeServiceMode,
      [SERVICE_META_KEY.MODE_LABEL]: getServiceModeLabel()
    })
  } catch {
    return createErrorResult('顾问暂时无法回复，请稍后重试。', {
      code: SERVICE_ERROR_CODE.ADVISOR_REQUEST_FAILED,
      [SERVICE_META_KEY.MODE]: activeServiceMode,
      [SERVICE_META_KEY.MODE_LABEL]: getServiceModeLabel()
    })
  }
}

export const requestRegretReport = async (payload) => {
  try {
    const reportPayload = buildRegretReportPayload(payload)
    const report = await calculateRegret(reportPayload)
    return createSuccessResult(report, {
      [SERVICE_META_KEY.SOURCE]: SERVICE_SOURCE.MODEL,
      [SERVICE_META_KEY.MODE]: activeServiceMode,
      [SERVICE_META_KEY.MODE_LABEL]: getServiceModeLabel()
    })
  } catch {
    return createErrorResult('终局报告生成失败，请稍后重试。', {
      code: SERVICE_ERROR_CODE.REPORT_REQUEST_FAILED,
      [SERVICE_META_KEY.MODE]: activeServiceMode,
      [SERVICE_META_KEY.MODE_LABEL]: getServiceModeLabel()
    })
  }
}

export const requestPlanningFileExtraction = async (file) => {
  try {
    const result = await extractPlanningFileContent(file)
    return createSuccessResult(result, {
      [SERVICE_META_KEY.SOURCE]: SERVICE_SOURCE.FILE,
      [SERVICE_META_KEY.EXTRACTION_MODE]: result?.meta?.extractionMode || 'unknown',
      [SERVICE_META_KEY.MODE]: activeServiceMode,
      [SERVICE_META_KEY.MODE_LABEL]: getServiceModeLabel()
    })
  } catch (error) {
    return createErrorResult(error?.message || '文件处理失败，请更换文件后重试。', {
      code: SERVICE_ERROR_CODE.FILE_EXTRACTION_FAILED,
      [SERVICE_META_KEY.MODE]: activeServiceMode,
      [SERVICE_META_KEY.MODE_LABEL]: getServiceModeLabel()
    })
  }
}

export const resolveRouteAttributeDeltas = (route, currentAttributes) => getRouteAttributeDeltas(route, currentAttributes)
