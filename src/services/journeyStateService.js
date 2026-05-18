export const cloneData = (value) => JSON.parse(JSON.stringify(value))

export const createDefaultUserInfo = () => ({
  age: '28',
  education: 'bachelor',
  occupation: '互联网产品经理',
  city: '北京',
  income: '15000',
  family: 'single',
  skills: '产品设计、数据分析、团队管理',
  investment: '50000',
  riskPreference: 'moderate',
  delayGratification: 'high',
  stressResistance: 'medium',
  decisionStyle: 'analytical',
  lifeGoals: '在5年内成为资深产品负责人，建立个人品牌；长期实现财务自由和生活灵活性'
})

export const createDefaultScenario = () => ({
  scenario: '你收到一个外地高薪 offer，但当前城市已有稳定生活基础，你会怎么选？',
  options: [
    { text: '立即转岗追求更高成长', style: '风险偏好型' },
    { text: '暂时不动，优先稳住基本盘', style: '风险规避型' },
    { text: '先谈远程或试用期再决定', style: '平衡型' }
  ]
})

export const createDefaultTreeNodes = () => ([
  {
    id: 'current',
    parentId: null,
    title: '当前人生节点',
    description: '从你的基础建模出发，展开关键选择。',
    depth: 1,
    timeline: new Date().toISOString(),
    children: ['branch-stay', 'branch-jump', 'branch-startup']
  },
  {
    id: 'branch-stay',
    parentId: 'current',
    title: '在现公司继续深耕',
    description: '稳定发展路线，逐步积累管理经验和行业影响力',
    depth: 2,
    timeline: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
    children: ['stay-promote', 'stay-transfer']
  },
  {
    id: 'branch-jump',
    parentId: 'current',
    title: '跳槽到大厂或创业公司',
    description: '追求更大平台或更大挑战，快速成长',
    depth: 2,
    timeline: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
    children: ['jump-tech', 'jump-startup']
  },
  {
    id: 'branch-startup',
    parentId: 'current',
    title: '独立创业或自由职业',
    description: '创造个人品牌，获得更高的上升潜力和收入',
    depth: 2,
    timeline: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
    children: ['startup-own', 'startup-invest']
  },
  {
    id: 'stay-promote',
    parentId: 'branch-stay',
    title: '争取晋升为总监',
    description: '专注于团队建设和战略规划',
    depth: 3,
    timeline: new Date().toISOString(),
    children: []
  },
  {
    id: 'stay-transfer',
    parentId: 'branch-stay',
    title: '转向策略或运营方向',
    description: '拓宽职业边界，增强竞争力',
    depth: 3,
    timeline: new Date().toISOString(),
    children: []
  },
  {
    id: 'jump-tech',
    parentId: 'branch-jump',
    title: '加入科技大厂（BAT）',
    description: '获得更优的薪资和平台机会',
    depth: 3,
    timeline: new Date().toISOString(),
    children: []
  },
  {
    id: 'jump-startup',
    parentId: 'branch-jump',
    title: '加入高成长创业公司',
    description: '获得期权和更多话语权',
    depth: 3,
    timeline: new Date().toISOString(),
    children: []
  },
  {
    id: 'startup-own',
    parentId: 'branch-startup',
    title: '创办自己的公司',
    description: '打造产品和团队',
    depth: 3,
    timeline: new Date().toISOString(),
    children: []
  },
  {
    id: 'startup-invest',
    parentId: 'branch-startup',
    title: '成为天使投资人/顾问',
    description: '通过投资和咨询获得收益',
    depth: 3,
    timeline: new Date().toISOString(),
    children: []
  }
])

export const createDefaultAttributes = () => ({
  career: 70,
  finance: 65,
  relationship: 75,
  health: 68,
  growth: 72
})

export const createDefaultAttributeHistory = () => ([
  { career: 60, finance: 55, relationship: 70, health: 65, growth: 60, time: new Date(Date.now() - 60 * 24 * 60 * 60 * 1000).toISOString() },
  { career: 65, finance: 60, relationship: 72, health: 66, growth: 65, time: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString() },
  { career: 68, finance: 63, relationship: 74, health: 67, growth: 70, time: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString() },
  { career: 70, finance: 65, relationship: 75, health: 68, growth: 72, time: new Date().toISOString() }
])

export const createDefaultImpactHistory = () => ([
  { id: 'impact_1', title: '完成大型项目交付', changes: { career: 5, growth: 10 }, time: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toLocaleString() },
  { id: 'impact_2', title: '获得年度奖金', changes: { finance: 8, relationship: 3 }, time: new Date(Date.now() - 15 * 24 * 60 * 60 * 1000).toLocaleString() },
  { id: 'impact_3', title: '带队参加行业大会', changes: { career: 3, growth: 5 }, time: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toLocaleString() }
])

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
  socialFeed.value = buildSocialFeed(userCity)
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
