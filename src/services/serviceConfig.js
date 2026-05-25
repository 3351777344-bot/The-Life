export const SERVICE_MODE = {
  OLLAMA_LOCAL: 'ollama-local',
  BACKEND_API: 'backend-api'
}

export const activeServiceMode = SERVICE_MODE.BACKEND_API

export const getServiceModeLabel = () => {
  const labels = {
    [SERVICE_MODE.OLLAMA_LOCAL]: '本地 Ollama',
    [SERVICE_MODE.BACKEND_API]: '后端 API'
  }

  return labels[activeServiceMode] || activeServiceMode
}
