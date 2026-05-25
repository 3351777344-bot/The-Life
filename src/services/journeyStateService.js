export const cloneData = (value) => JSON.parse(JSON.stringify(value))

export const createDefaultUserInfo = () => ({
  age: '',
  education: '',
  occupation: '',
  city: '',
  income: '',
  family: '',
  skills: '',
  investment: '',
  riskPreference: '',
  delayGratification: '',
  stressResistance: '',
  decisionStyle: '',
  lifeGoals: ''
})

export const createDefaultScenario = () => ({
  scenario: '',
  options: []
})

export const createDefaultTreeNodes = () => ([
  {
    id: 'current',
    parentId: null,
    title: '当前节点',
    description: '尚未添加分支。',
    depth: 1,
    timeline: new Date().toISOString(),
    children: []
  }
])

export const createDefaultAttributes = () => ({
  career: 0,
  finance: 0,
  relationship: 0,
  health: 0,
  growth: 0
})

export const createDefaultAttributeHistory = () => ([])

export const createDefaultImpactHistory = () => ([])

export const buildRegretReportPayload = ({
  userInfo,
  selectedRoute,
  savedPaths,
  attributes,
  attributeHistory,
  impactHistory,
  decisionCount,
  currentAIRole
}) => ({
  userInfo,
  selectedRoute,
  savedPaths,
  attributes,
  attributeHistory,
  impactHistory,
  decisionCount,
  currentAIRole
})

export const resetJourneyState = ({
  currentView,
  isCardFlipped,
  currentScenario,
  treeNodes,
  selectedNode,
  treeScale,
  treeOffset,
  panStart,
  isPanning,
  aiRoutes,
  compareRoutes,
  customRoutes,
  selectedRoute,
  generatedMedia,
  mode,
  uploadedDocText,
  uploadedPlanMeta,
  attributes,
  attributeHistory,
  impactHistory,
  currentChart,
  socialFeed,
  chatMessages,
  chatInput,
  isListening,
  currentAIRole,
  currentAIDescription,
  savedPaths,
  regretLevel,
  regretText,
  regretAnalysis,
  aiAdvice,
  buildSocialFeed,
  defaultAiRoutes,
  defaultImpactHistory,
  defaultAttributeHistory,
  defaultAttributes,
  defaultScenario,
  defaultTreeNodes,
  defaultAIRole,
  defaultAIDescription,
  userCity
}) => {
  currentView.value = 'genesis'
  isCardFlipped.value = false
  currentScenario.value = cloneData(defaultScenario)
  treeNodes.value = cloneData(defaultTreeNodes)
  selectedNode.value = 'current'
  treeScale.value = 1
  treeOffset.value = { x: 0, y: 0 }
  panStart.value = { x: 0, y: 0 }
  isPanning.value = false
  aiRoutes.value = cloneData(defaultAiRoutes)
  compareRoutes.value = []
  customRoutes.value = []
  selectedRoute.value = null
  generatedMedia.value = []
  mode.value = 'ai'
  uploadedDocText.value = ''
  uploadedPlanMeta.value = null
  attributes.value = cloneData(defaultAttributes)
  attributeHistory.value = cloneData(defaultAttributeHistory)
  impactHistory.value = cloneData(defaultImpactHistory)
  currentChart.value = 'radar'
  socialFeed.value = typeof buildSocialFeed === 'function' ? buildSocialFeed(userCity) : []
  chatMessages.value = []
  chatInput.value = ''
  isListening.value = false
  currentAIRole.value = defaultAIRole
  currentAIDescription.value = defaultAIDescription
  savedPaths.value = []
  regretLevel.value = 20
  regretText.value = '暂无'
  regretAnalysis.value = '暂无'
  aiAdvice.value = ''
}
