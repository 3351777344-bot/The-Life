import axios from 'axios'

const backendApi = axios.create({
  baseURL: 'http://localhost:3001/api',
  timeout: 30000
})

const post = async (path, payload) => {
  const response = await backendApi.post(path, payload)
  return response.data
}

export const requestBackendScenario = (userInfo) => post('/scenario', { userInfo })

export const requestBackendRoutes = (userInfo, context) => post('/routes', { userInfo, context })

export const requestBackendAdvisorReply = (question, context) => post('/advisor/reply', { question, context })

export const requestBackendRegretReport = (payload) => post('/regret-report', payload)

export const requestBackendPlanningFileExtraction = (payload) => post('/planning-file/extract', payload)