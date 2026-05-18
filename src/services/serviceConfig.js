export const SERVICE_MODE = {
  OLLAMA_LOCAL: 'ollama-local'
}

export const activeServiceMode = SERVICE_MODE.OLLAMA_LOCAL

export const getServiceModeLabel = () => {
  const labels = {
    [SERVICE_MODE.OLLAMA_LOCAL]: '本地 Ollama'
  }

  return labels[activeServiceMode] || activeServiceMode
}
