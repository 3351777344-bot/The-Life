import { generateRoute, getAIAdvice, generateScenario, calculateRegret } from './ollamaService'
import { extractPlanningFileContent } from './planningFileService'
import { getRouteAttributeDeltas, normalizeGeneratedRoute } from './routeStateService'
import { buildRegretReportPayload } from './journeyStateService'

export const requestScenario = async (userInfo) => generateScenario(userInfo)

export const requestRoutes = async (userInfo, context) => {
  const response = await generateRoute(userInfo, context)
  const routes = Array.isArray(response?.routes) ? response.routes : []
  return routes.slice(0, 5).map((route, index) => normalizeGeneratedRoute(route, index))
}

export const requestAdvisorReply = async (question, context) => getAIAdvice(question, context)

export const requestRegretReport = async (payload) => {
  const reportPayload = buildRegretReportPayload(payload)
  return calculateRegret(reportPayload)
}

export const requestPlanningFileExtraction = async (file) => extractPlanningFileContent(file)

export const resolveRouteAttributeDeltas = (route, currentAttributes) => getRouteAttributeDeltas(route, currentAttributes)
