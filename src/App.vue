<template>
  <div class="app">
    <div class="starfield" aria-hidden="true"></div>
    <div class="main-content">
      <ViewNav :currentView="currentView" @navigate="(v) => currentView = v" />

      <div v-if="statusMessage" class="status-toast" :class="`status-${statusType}`">{{ statusMessage }}</div>

      <InputDialog
        :show="showInputDialog"
        :title="inputDialog.title"
        :message="inputDialog.message"
        :placeholder="inputDialog.placeholder"
        :defaultValue="inputDialog.defaultValue"
        :inputType="inputDialog.inputType || 'text'"
        @confirm="handleInputConfirm"
        @cancel="showInputDialog = false"
      />

      <div v-if="currentView === 'genesis'">
        <GenesisView
          :userInfo="userInfo"
          :isCardFlipped="isCardFlipped"
          :currentScenario="currentScenario"
          :statusMessage="statusMessage"
          :scenarioError="scenarioError"
          @update:userInfo="(v) => userInfo = v"
          @fetch-scenario="fetchScenario"
          @flip-card="flipCard"
          @select-option="selectOption"
          @skip-scenario="skipScenario"
          @mark-edit="markDataEditable"
          @backup="backupLocalData"
          @clear="clearLocalData"
          @start-destiny="goToDestinyTree"
        />
      </div>

      <div v-else-if="currentView === 'destiny'">
        <DestinyView
          :treeNodes="treeNodes"
          :selectedNode="selectedNode"
          :selectedNodeData="selectedNodeData"
          :nodeCount="nodeCount"
          :leafCount="leafCount"
          :selectedDepth="selectedDepth"
          :treeTransformStyle="treeTransformStyle"
          :isPanning="isPanning"
          @add-node="addNode"
          @zoom-in="zoomIn"
          @zoom-out="zoomOut"
          @reset-view="resetView"
          @export-tree="exportTree"
          @reset-tree="resetTree"
          @start-pan="startPan"
          @pan-move="onPanMove"
          @end-pan="endPan"
          @select-node="selectNode"
          @edit-node="editNode"
          @delete-node="deleteNode"
          @extend-branch="extendBranch"
          @go-to-genesis="goToGenesis"
          @go-to-divergence="goToDivergence"
        />
      </div>

      <div v-else-if="currentView === 'divergence'">
        <DivergenceView
          :aiRoutes="aiRoutes"
          :isGenerating="isGeneratingRoutes"
          :compareRoutes="compareRoutes"
          :customRoutes="customRoutes"
          :selectedRoute="selectedRoute"
          :generatedMedia="generatedMedia"
          :routeGenerationError="routeGenerationError"
          :uploadedPlanMeta="uploadedPlanMeta"
          :mode="mode"
          @generate-ai-routes="generateAIRoutes"
          @refine-route="refineRoute"
          @replace-route="replaceRoute"
          @toggle-compare="toggleCompare"
          @select-route="selectRoute"
          @add-custom-route="addCustomRoute"
          @remove-custom-route="removeCustomRoute"
          @file-upload="handleFileUpload"
          @generate-comic="generateComic"
          @generate-video="generateVideo"
          @generate-poster="generatePoster"
          @go-to-destiny="goToDestinyTree"
          @go-to-comparison="goToComparison"
          @go-to-reflection="goToReflection"
          @toggle-mode="toggleMode"
        />
      </div>

      <div v-else-if="currentView === 'comparison'">
        <ComparisonView
          :routes="compareRoutes"
          :attributes="attributes"
          @go-back="() => currentView = 'divergence'"
          @route-selected="handleComparisonRouteSelected"
          @confirm-selection="handleComparisonConfirm"
        />
      </div>

      <div v-else-if="currentView === 'reflection'">
        <ReflectionView
          :attributes="attributes"
          :attributeHistory="attributeHistory"
          :impactHistory="impactHistory"
          :currentChart="currentChart"
          :radarAxes="radarAxes"
          :radarAxisPoints="radarAxisPoints"
          :radarPolygon="radarPolygon"
          :axisLabelMap="axisLabelMap"
          :socialFeed="socialFeed"
          @show-radar="showRadarChart"
          @show-trend="showTrendChart"
          @show-impact="showImpactTrace"
          @refresh-social="refreshSocialData"
          @go-to-divergence="goToDivergence"
          @go-to-mentorship="goToMentorship"
        />
      </div>

      <div v-else-if="currentView === 'mentorship'">
        <MentorshipView
          :chatMessages="chatMessages"
          :isGeneratingAIResponse="isGeneratingAIResponse"
          :chatInput="chatInput"
          :currentAI角色="currentAIRole"
          :currentAIDescription="currentAIDescription"
          :advisorError="advisorError"
          :isListening="isListening"
          @send-message="sendMessage"
          @select-ai-role="selectAIRole"
          @toggle-voice="toggleVoiceInput"
          @go-to-reflection="goToReflection"
          @go-to-conclusion="goToConclusion"
        />
      </div>

      <div v-else-if="currentView === 'conclusion'">
        <ConclusionView
          :savedPaths="savedPaths"
          :regretLevel="regretLevel"
          :regretText="regretText"
          :regretAnalysis="regretAnalysis"
          :aiAdvice="aiAdvice"
          :reportError="reportError"
          :totalSelections="totalSelections"
          :explorationTime="explorationTime"
          :achievementsUnlocked="achievementsUnlocked"
          :restartCount="restartCount"
          @go-to-mentorship="goToMentorship"
          @restart="restartJourney"
        />
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, defineAsyncComponent } from 'vue'
import ViewNav from './components/ViewNav.vue'
import InputDialog from './components/InputDialog.vue'
import { buildFallbackRouteImpacts, getRoutePreviewValues } from './services/routeStateService'
import {
  cloneData,
  createDefaultUserInfo,
  createDefaultScenario,
  createDefaultTreeNodes,
  createDefaultAttributes,
  createDefaultAttributeHistory,
  createDefaultImpactHistory,
  resetJourneyState
} from './services/journeyStateService'
import {
  requestScenario,
  requestRoutes,
  requestAdvisorReply,
  requestRegretReport,
  requestPlanningFileExtraction,
  resolveRouteAttributeDeltas
} from './services/lifeJourneyFacade'

const DEFAULT_AI_ROLE = '人生规划师'
const DEFAULT_AI_DESCRIPTION = '擅长把你的现实约束和长期目标转成可执行建议。'

const viewLoadingComponent = {
  template: `
    <div class="view-loading glass-container">
      <div class="view-loading__spinner"></div>
      <p class="view-loading__text">页面正在加载中...</p>
    </div>
  `
}

const createAsyncView = (loader) => defineAsyncComponent({
  loader,
  loadingComponent: viewLoadingComponent,
  delay: 120
})

const GenesisView = createAsyncView(() => import('./components/GenesisView.vue'))
const DestinyView = createAsyncView(() => import('./components/DestinyView.vue'))
const DivergenceView = createAsyncView(() => import('./components/DivergenceView.vue'))
const ComparisonView = createAsyncView(() => import('./components/ComparisonView.vue'))
const ReflectionView = createAsyncView(() => import('./components/ReflectionView.vue'))
const MentorshipView = createAsyncView(() => import('./components/MentorshipView.vue'))
const ConclusionView = createAsyncView(() => import('./components/ConclusionView.vue'))

const buildSocialFeed = (city = '北京') => ([
  { id: 'feed_1', source: '国家统计局', text: '青年就业市场回暖，数字服务类岗位增长明显。', date: new Date().toLocaleDateString() },
  { id: 'feed_2', source: '人社公开数据', text: '一线城市生活成本继续上升，择业需同步评估净收益。', date: new Date().toLocaleDateString() },
  { id: 'feed_3', source: '行业观察', text: `${city || '目标城市'} 的 AI 应用岗位更看重复合能力与持续学习。`, date: new Date().toLocaleDateString() }
])

const formatDuration = (durationMs) => {
  const totalMinutes = Math.max(1, Math.round(durationMs / (1000 * 60)))
  if (totalMinutes < 60) return `${totalMinutes}分钟`

  const hours = Math.floor(totalMinutes / 60)
  const minutes = totalMinutes % 60
  return minutes > 0 ? `${hours}小时${minutes}分钟` : `${hours}小时`
}

// Minimal reactive state to keep components running
const currentView = ref('genesis')
const statusMessage = ref('')
const statusType = ref('info')
const routeGenerationError = ref('')
const scenarioError = ref('')
const reportError = ref('')
const advisorError = ref('')

// Dialog state
const showInputDialog = ref(false)
const inputDialog = ref({
  title: '输入信息',
  message: '请输入',
  placeholder: '',
  defaultValue: '',
  onConfirm: null
})

const userInfo = ref(createDefaultUserInfo())
const isCardFlipped = ref(false)
const currentScenario = ref(createDefaultScenario())
const defaultScenario = cloneData(currentScenario.value)

const treeNodes = ref(createDefaultTreeNodes())
const defaultTreeNodes = cloneData(treeNodes.value)
const selectedNode = ref('current')
const selectedNodeData = computed(() => treeNodes.value.find(n => n.id === selectedNode.value))
const nodeCount = computed(() => treeNodes.value.length)
const leafCount = computed(() => treeNodes.value.filter(n => !n.children || n.children.length === 0).length)
const selectedDepth = computed(() => {
  const n = selectedNodeData.value
  return n?.depth || 1
})
const treeScale = ref(1)
const treeOffset = ref({ x: 0, y: 0 })
const panStart = ref({ x: 0, y: 0 })
const treeTransformStyle = computed(() => ({
  transform: `translate(${treeOffset.value.x}px, ${treeOffset.value.y}px) scale(${treeScale.value})`,
  transformOrigin: 'center top'
}))
const isPanning = ref(false)

const aiRoutes = ref([
  {
    id: 'route-growth',
    title: '快速成长路线',
    description: '在3-5年内成为行业资深专家，追求职业高度',
    keyMilestones: ['6个月：确定方向', '1年：升任主管', '3年：升任总监', '5年：成为行业专家'],
    requiredCapital: '50000-100000',
    riskLevel: 'medium',
    impactFactors: { career: 85, growth: 90, health: 60, relationship: 65, finance: 75 }
  },
  {
    id: 'route-balanced',
    title: '平衡发展路线',
    description: '在保持工作稳定性的同时，发展副业和个人品牌',
    keyMilestones: ['3个月：启动副业', '1年：月收入5000', '3年：客户突破100', '5年：年收入翻倍'],
    requiredCapital: '20000-50000',
    riskLevel: 'low',
    impactFactors: { career: 70, growth: 75, health: 80, relationship: 85, finance: 65 }
  },
  {
    id: 'route-entrepreneurship',
    title: '创业突破路线',
    description: '在2年内启动创业项目，争取融资和高估值',
    keyMilestones: ['3个月：确定赛道', '6个月：产品上线', '1年：天使融资', '2年：A轮融资'],
    requiredCapital: '200000-500000',
    riskLevel: 'high',
    impactFactors: { career: 100, growth: 100, health: 50, relationship: 60, finance: 90 }
  },
  {
    id: 'route-freedom',
    title: '自由职业路线',
    description: '逐步建立个人品牌，成为行业顾问和讲师',
    keyMilestones: ['6个月：积累1000粉丝', '1年：首次付费课程', '2年：月收入稳定', '3年：成为行业KOL'],
    requiredCapital: '10000-30000',
    riskLevel: 'medium',
    impactFactors: { career: 80, growth: 85, health: 85, relationship: 75, finance: 70 }
  }
])
const defaultAiRoutes = cloneData(aiRoutes.value)
const isGeneratingRoutes = ref(false)
const isGeneratingAIResponse = ref(false)
const compareRoutes = ref([])
const customRoutes = ref([])
const selectedRoute = ref(null)
const generatedMedia = ref([])
const mode = ref('ai')
const uploadedDocText = ref('')
const uploadedPlanMeta = ref(null)

const defaultAttributes = createDefaultAttributes()
const attributes = ref(cloneData(defaultAttributes))
const attributeHistory = ref(createDefaultAttributeHistory())
const defaultAttributeHistory = cloneData(attributeHistory.value)
const impactHistory = ref(createDefaultImpactHistory())
const defaultImpactHistory = cloneData(impactHistory.value)
const currentChart = ref('radar')
const radarAxes = ref([
  { key: 'career', label: '职业' },
  { key: 'finance', label: '财务' },
  { key: 'relationship', label: '人际' },
  { key: 'health', label: '健康' },
  { key: 'growth', label: '成长' }
])
const radarAxisPoints = computed(() => {
  const centerX = 120
  const centerY = 120
  const r = 90
  const total = radarAxes.value.length
  return radarAxes.value.map((_, i) => {
    const angle = (Math.PI * 2 * i) / total - Math.PI / 2
    return {
      x: centerX + Math.cos(angle) * r,
      y: centerY + Math.sin(angle) * r,
      lx: centerX + Math.cos(angle) * (r + 18),
      ly: centerY + Math.sin(angle) * (r + 18)
    }
  })
})
const radarPolygon = computed(() => {
  const centerX = 120
  const centerY = 120
  const maxR = 90
  const total = radarAxes.value.length
  return radarAxes.value
    .map((axis, i) => {
      const ratio = Math.max(0, Math.min(100, attributes.value[axis.key] || 0)) / 100
      const angle = (Math.PI * 2 * i) / total - Math.PI / 2
      const r = maxR * ratio
      const x = centerX + Math.cos(angle) * r
      const y = centerY + Math.sin(angle) * r
      return `${x},${y}`
    })
    .join(' ')
})
const axisLabelMap = ref({ career: '职业', finance: '财务', relationship: '人际', health: '健康', growth: '成长' })
const socialFeed = ref(buildSocialFeed(userInfo.value.city))

const chatMessages = ref([])
const chatInput = ref('')
const isListening = ref(false)
const currentAIRole = ref(DEFAULT_AI_ROLE)
const currentAIDescription = ref(DEFAULT_AI_DESCRIPTION)

const savedPaths = ref([])
const regretLevel = ref(20)
const regretText = ref('暂无')
const regretAnalysis = ref('暂无')
const aiAdvice = ref('')
const journeyStartedAt = ref(Date.now())
const decisionCount = ref(0)
const restartCount = ref(0)

const roleDescMap = {
  '职场导师': '聚焦职业路径、能力成长和岗位决策。',
  '情感顾问': '关注关系边界、沟通方式与情绪支持。',
  '创业前辈': '强调资源配置、风险管理和验证节奏。',
  '人生规划师': '平衡职业、财务、关系、健康与成长。'
}

const totalSelections = computed(() => decisionCount.value)
const explorationTime = computed(() => {
  currentView.value
  decisionCount.value
  chatMessages.value.length
  return formatDuration(Date.now() - journeyStartedAt.value)
})
const achievementsUnlocked = computed(() => {
  let count = 0
  if (decisionCount.value >= 1) count += 1
  if (compareRoutes.value.length >= 2) count += 1
  if (generatedMedia.value.length > 0) count += 1
  if (chatMessages.value.some((message) => message.role === 'ai')) count += 1
  return count
})

// Simple helpers
const setStatusMessage = (msg, type = 'info') => {
  statusMessage.value = msg
  statusType.value = type
  if (msg) {
    setTimeout(() => {
      statusMessage.value = ''
      statusType.value = 'info'
    }, 2500)
  }
}

const incrementDecisionCount = (amount = 1) => {
  decisionCount.value += amount
}

const recordAttributeHistory = () => {
  // snapshot current attributes with timestamp
  attributeHistory.value.push({ ...attributes.value, time: new Date().toISOString() })
  // keep a bounded history for charts
  if (attributeHistory.value.length > 24) attributeHistory.value.shift()
  // recompute lightweight regret after attribute change
  computeRegret()
}

const recordImpact = (title, changes) => {
  impactHistory.value.unshift({ id: `impact_${Date.now()}`, title, changes, time: new Date().toLocaleString() })
  if (impactHistory.value.length > 12) impactHistory.value.pop()
}

const appendChatMessage = (role, content) => {
  chatMessages.value.push({
    id: `${role}_${Date.now()}_${Math.random().toString(36).slice(2, 6)}`,
    role,
    content,
    time: new Date().toLocaleTimeString('zh-CN', { hour: '2-digit', minute: '2-digit' })
  })
}

// compute simple trend points for a given attribute key from history
const getTrendPath = (key) => {
  const records = attributeHistory.value
  if (!records.length) return ''
  const width = 400
  const height = 180
  const xStep = records.length > 1 ? width / (records.length - 1) : width
  const pairs = records.map((h, idx) => {
    const v = Math.max(0, Math.min(100, h[key] != null ? h[key] : 0))
    const x = 20 + idx * xStep
    const y = 200 - (v / 100) * height
    return `${idx === 0 ? 'M' : 'L'}${x},${y}`
  })
  return pairs.join(' ')
}

// Handle dialog input
const handleInputConfirm = (value) => {
  showInputDialog.value = false
  if (inputDialog.value.onConfirm) {
    inputDialog.value.onConfirm(value)
  }
}

// simple heuristic regret computation
const computeRegret = () => {
  if (!attributeHistory.value.length) {
    regretLevel.value = 5
    regretText.value = '未开始模拟'
    regretAnalysis.value = '无历史数据'
    return
  }
  // measure recent volatility across attributes
  const latest = attributeHistory.value[attributeHistory.value.length - 1]
  const prev = attributeHistory.value[attributeHistory.value.length - 2] || latest
  let vol = 0
  Object.keys(attributes.value).forEach(k => {
    const d = Math.abs((latest[k] || 0) - (prev[k] || 0))
    vol += d
  })
  // base regret on volatility and dropped averages
  const avgNow = Object.values(latest).filter(v => typeof v === 'number').reduce((a,b)=>a+b,0) / Object.keys(attributes.value).length
  const base = Math.max(0, 100 - Math.round(avgNow))
  const computed = Math.min(100, Math.round(base + vol))
  regretLevel.value = computed
  regretText.value = computed > 60 ? '存在较高后悔风险' : '后悔风险可控'
  regretAnalysis.value = `最近波动总和 ${Math.round(vol)}, 属性平均值 ${Math.round(avgNow)}。建议关注降低短期波动，平衡长期目标。`
  aiAdvice.value = regretLevel.value > 60 ? '建议分散投入、提升抗压能力与延迟满足训练。' : '保持当前节奏，逐步验证小规模决策。'
}

const findNode = (id) => treeNodes.value.find(n => n.id === id)

const collectSubtreeIds = (startId, acc = []) => {
  acc.push(startId)
  const node = findNode(startId)
  ;(node?.children || []).forEach((cid) => collectSubtreeIds(cid, acc))
  return acc
}

const applyAttributeChanges = (title, impacts = {}) => {
  const changes = {}
  Object.keys(impacts).forEach((k) => {
    const delta = Number(impacts[k]) || 0
    const before = attributes.value[k] || 0
    const after = Math.max(0, Math.min(100, before + delta))
    attributes.value[k] = after
    changes[k] = delta
  })
  if (Object.keys(changes).length) {
    recordImpact(title, changes)
    recordAttributeHistory()
  }
}

// Navigation
const goToDestinyTree = () => currentView.value = 'destiny'
const goToDivergence = () => currentView.value = 'divergence'
const goToComparison = () => currentView.value = 'comparison'
const goToReflection = () => currentView.value = 'reflection'
const goToMentorship = () => currentView.value = 'mentorship'
const goToConclusion = async () => {
  const reportPayload = {
    userInfo: userInfo.value,
    selectedRoute: selectedRoute.value,
    savedPaths: savedPaths.value,
    attributes: attributes.value,
    attributeHistory: attributeHistory.value,
    impactHistory: impactHistory.value,
    decisionCount: decisionCount.value,
    currentAIRole: currentAIRole.value
  }

  reportError.value = ''
  setStatusMessage('正在生成终局报告...')

  const reportResult = await requestRegretReport(reportPayload)
  if (reportResult.ok) {
    const report = reportResult.data
    if (report?.regretLevel != null) regretLevel.value = Number(report.regretLevel)
    if (report?.regretText) regretText.value = report.regretText
    if (report?.analysis) regretAnalysis.value = report.analysis
    if (report?.advice) aiAdvice.value = report.advice
  } else {
    reportError.value = reportResult.error?.message || '终局报告生成失败，请稍后重试。'
    computeRegret()
    setStatusMessage(reportError.value, 'error')
  }

  currentView.value = 'conclusion'
}
const goToGenesis = () => currentView.value = 'genesis'

// Genesis handlers
const fetchScenario = async () => {
  scenarioError.value = ''
  const result = await requestScenario(userInfo.value)
  if (result.ok && result.data?.scenario && Array.isArray(result.data?.options)) {
    currentScenario.value = result.data
    setStatusMessage('新场景已生成')
  } else if (!result.ok) {
    scenarioError.value = result.error?.message || '场景生成失败，请稍后重试。'
    setStatusMessage(scenarioError.value, 'error')
  }
}
const flipCard = () => isCardFlipped.value = !isCardFlipped.value
const selectOption = (opt) => {
  userInfo.value.decisionStyle = opt
  isCardFlipped.value = false
  
  // Apply attribute changes based on selected style
  const styleImpacts = {
    '风险偏好型': { career: 10, finance: 5, growth: 15, health: -5 },
    '风险规避型': { career: 0, finance: 5, health: 10, relationship: 5 },
    '平衡型': { career: 5, finance: 8, relationship: 5, growth: 5, health: 5 }
  }
  
  const impacts = styleImpacts[opt] || {}
  applyAttributeChanges(`选择决策风格：${opt}`, impacts)
  incrementDecisionCount()
  
  setStatusMessage(`决策风格已记录：${opt}`)
}
const skipScenario = () => setStatusMessage('已跳过场景')
const markDataEditable = () => setStatusMessage('可以修改信息')
const backupLocalData = () => { localStorage.setItem('life_local_backup', JSON.stringify({ userInfo: userInfo.value })); setStatusMessage('已备份') }
const clearLocalData = () => { localStorage.removeItem('life_local_backup'); setStatusMessage('已清除') }

// Simple chat
const sendMessage = (text) => {
  if (!text) return
  appendChatMessage('user', text)
  isGeneratingAIResponse.value = true
  const context = {
    role: currentAIRole.value,
    selectedRoute: selectedRoute.value?.title || '未选择路线',
    selectedNode: selectedNodeData.value?.title || '当前人生节点',
    attributes: attributes.value,
    recentImpacts: impactHistory.value.slice(0, 3)
  }
  advisorError.value = ''
  requestAdvisorReply(text, context)
    .then((result) => {
      if (result.ok) {
        appendChatMessage('ai', result.data || '建议暂不可用，请稍后重试。')
        return
      }
      advisorError.value = result.error?.message || '顾问暂时无法回复，请稍后重试。'
      appendChatMessage('ai', advisorError.value)
      setStatusMessage(advisorError.value, 'error')
    })
    .finally(() => {
      isGeneratingAIResponse.value = false
    })
}

const selectAIRole = (role) => {
  currentAIRole.value = role
  currentAIDescription.value = roleDescMap[role] || '为你提供基于当前节点的决策建议。'
}
const toggleVoiceInput = () => { isListening.value = !isListening.value; setStatusMessage(isListening.value ? '开始语音' : '停止语音') }

// Minimal tree helpers
const addNode = () => {
  const parentId = selectedNode.value || 'current'
  const parent = findNode(parentId)
  if (!parent) return
  
  // Step 1: Get title
  const defaultTitle = `分支-${(parent.children?.length || 0) + 1}`
  inputDialog.value = {
    title: '新增节点',
    message: '请输入节点标题：',
    placeholder: '例如：考虑创业',
    defaultValue: defaultTitle,
    inputType: 'text',
    onConfirm: (title) => {
      if (!title) {
        setStatusMessage('已取消')
        return
      }
      // Step 2: Get description
      inputDialog.value = {
        title: '新增节点',
        message: '请输入节点描述：',
        placeholder: '例如：在现有工作基础上探索新方向',
        defaultValue: '一次新的关键选择',
        inputType: 'text',
        onConfirm: (desc) => {
          const nodeId = `node_${Date.now()}`
          const newNode = {
            id: nodeId,
            parentId,
            title,
            description: desc || '一次新的关键选择',
            depth: (parent.depth || 1) + 1,
            timeline: new Date().toISOString(),
            children: []
          }
          parent.children = [...(parent.children || []), nodeId]
          treeNodes.value.push(newNode)
          selectedNode.value = nodeId
          recordAttributeHistory()
          incrementDecisionCount()
          setStatusMessage('已新增节点')
        }
      }
      showInputDialog.value = true
    }
  }
  showInputDialog.value = true
}
const zoomIn = () => { treeScale.value = Math.min(2, +(treeScale.value + 0.1).toFixed(2)) }
const zoomOut = () => { treeScale.value = Math.max(0.6, +(treeScale.value - 0.1).toFixed(2)) }
const resetView = () => {
  treeScale.value = 1
  treeOffset.value = { x: 0, y: 0 }
}
const exportTree = () => {
  const payload = {
    exportedAt: new Date().toISOString(),
    userInfo: userInfo.value,
    treeNodes: treeNodes.value,
    attributes: attributes.value,
    savedPaths: savedPaths.value
  }
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = 'life_tree_export.json'
  a.click()
  URL.revokeObjectURL(url)
  setStatusMessage('已导出图谱')
}
const resetTree = () => {
  treeNodes.value = [
    {
      id: 'current',
      parentId: null,
      title: '当前人生节点',
      description: '从你的基础建模出发，展开关键选择。',
      depth: 1,
      timeline: new Date().toISOString(),
      children: []
    }
  ]
  selectedNode.value = 'current'
  setStatusMessage('树状图已重置')
}
const startPan = (e) => {
  isPanning.value = true
  panStart.value = {
    x: e.clientX - treeOffset.value.x,
    y: e.clientY - treeOffset.value.y
  }
}
const onPanMove = (e) => {
  if (!isPanning.value) return
  treeOffset.value = {
    x: e.clientX - panStart.value.x,
    y: e.clientY - panStart.value.y
  }
}
const endPan = () => { isPanning.value = false }
const selectNode = (n) => { selectedNode.value = n }
const editNode = (id) => {
  const node = findNode(id)
  if (!node) return
  const title = window.prompt('编辑节点标题：', node.title)
  if (!title) return
  const desc = window.prompt('编辑节点描述：', node.description || '')
  node.title = title
  node.description = desc || ''
  setStatusMessage('节点已更新')
}
const deleteNode = (id) => {
  if (id === 'current') {
    setStatusMessage('根节点不可删除')
    return
  }
  const node = findNode(id)
  if (!node) return
  const idsToRemove = collectSubtreeIds(id)
  treeNodes.value = treeNodes.value.filter(n => !idsToRemove.includes(n.id))
  const parent = findNode(node.parentId)
  if (parent) parent.children = (parent.children || []).filter(cid => cid !== id)
  if (selectedNode.value === id) selectedNode.value = parent?.id || 'current'
  setStatusMessage('节点及其子分支已删除')
}
const extendBranch = (id) => {
  const parent = findNode(id)
  if (!parent) return
  
  inputDialog.value = {
    title: '延伸分支',
    message: '请输入要生成的分支数量（2-5）：',
    placeholder: '输入数字',
    defaultValue: '2',
    inputType: 'number',
    onConfirm: (value) => {
      const count = Number(value || 2)
      const branchCount = Number.isFinite(count) ? Math.max(2, Math.min(5, count)) : 2
      const createdIds = []
      for (let i = 1; i <= branchCount; i += 1) {
        const nodeId = `node_${Date.now()}_${i}`
        const node = {
          id: nodeId,
          parentId: id,
          title: `${parent.title}-分支${i}`,
          description: `基于 ${parent.title} 的分支方案 ${i}`,
          depth: (parent.depth || 1) + 1,
          timeline: new Date().toISOString(),
          children: []
        }
        treeNodes.value.push(node)
        createdIds.push(nodeId)
      }
      parent.children = [...(parent.children || []), ...createdIds]
      recordAttributeHistory()
      incrementDecisionCount(branchCount)
      setStatusMessage(`已延伸 ${branchCount} 个分支`)
    }
  }
  showInputDialog.value = true
}

// divergence implementations (lightweight but functional)
const generateAIRoutes = async () => {
  isGeneratingRoutes.value = true
  routeGenerationError.value = ''
  try {
    const context = {
      selectedNode: selectedNodeData.value,
      city: userInfo.value.city,
      goals: userInfo.value.lifeGoals,
      attributes: attributes.value
    }
    const result = await requestRoutes(userInfo.value, context)
    if (result.ok) {
      aiRoutes.value = result.data
      setStatusMessage('AI 路线已生成')
      return
    }

    routeGenerationError.value = result.error?.message || '路线生成失败，请稍后重试。'
    setStatusMessage(routeGenerationError.value, 'error')
  } finally {
    isGeneratingRoutes.value = false
  }
}

const selectRoute = (route) => {
  if (!route) return
  selectedRoute.value = route

  const routeId = route.id || `path_${Date.now()}`
  const existingIndex = savedPaths.value.findIndex((savedRoute) => savedRoute.id === routeId)
  if (existingIndex >= 0) {
    savedPaths.value.splice(existingIndex, 1)
  }
  savedPaths.value.unshift({
    id: routeId,
    title: route.title,
    route,
    date: new Date().toLocaleString()
  })
  if (savedPaths.value.length > 12) savedPaths.value.pop()
  
  // Apply route impacts to attributes
  const impacts = resolveRouteAttributeDeltas(route, attributes.value)
  const changes = {}
  Object.keys(impacts).forEach((k) => {
    const targetValue = Number(impacts[k]) || 0
    const before = attributes.value[k] || 0
    const delta = Math.round(targetValue)
    const after = Math.max(0, Math.min(100, before + delta))
    attributes.value[k] = after
    changes[k] = delta
  })
  
  if (Object.keys(changes).length) {
    recordImpact(`选择路线：${route.title}`, changes)
    recordAttributeHistory()
  }
  incrementDecisionCount()
  
  setStatusMessage(`已选择路线：${route.title}`)
}

const refineRoute = (index) => {
  const route = aiRoutes.value[index]
  if (!route) return
  route.description = `${route.description}（细化：拆解为季度行动里程碑，并设置可验证指标。）`
  route.feasibility = Math.min(100, Number(route.feasibility || 60) + 5)
  setStatusMessage(`已细化路线：${route.title}`)
}
const replaceRoute = (index) => {
  const route = aiRoutes.value[index]
  if (!route) return
  const replacement = {
    id: `ai_route_replace_${Date.now()}`,
    title: `${route.title}-替代方案`,
    description: '以更低风险执行同类目标，分阶段验证后再扩大投入。',
    feasibility: Math.max(45, Number(route.feasibility || 60) - 8),
    difficulty: '中等',
    benefit: route.benefit || '中',
    tag: '替代',
    tagColor: 'mid',
    attributeDeltaMap: {
      career: Math.round((Math.random() * 12) - 2),
      finance: Math.round((Math.random() * 10) - 2),
      relationship: Math.round((Math.random() * 10) - 2),
      health: Math.round((Math.random() * 10) - 2),
      growth: Math.round((Math.random() * 12) - 2)
    },
    impacts: null
  }
  aiRoutes.value.splice(index, 1, replacement)
  setStatusMessage('路线已替换')
}
const toggleCompare = (route) => {
  const idx = compareRoutes.value.findIndex(r => r.id === route.id)
  if (idx >= 0) compareRoutes.value.splice(idx, 1)
  else if (compareRoutes.value.length < 2) compareRoutes.value.push(route)
  else {
    compareRoutes.value.shift()
    compareRoutes.value.push(route)
  }

  if (compareRoutes.value.length === 2) {
    const [a, b] = compareRoutes.value
    const deltas = Object.keys(attributes.value).map((k) => {
      const va = Number(getRoutePreviewValues(a)?.[k] || 0)
      const vb = Number(getRoutePreviewValues(b)?.[k] || 0)
      return `${axisLabelMap.value[k]}:${va >= vb ? `${a.title}优(+${va - vb})` : `${b.title}优(+${vb - va})`}`
    })
    setStatusMessage(`双路径对比：${deltas.join(' / ')}`)
  }
}
const addCustomRoute = (route) => {
  const title = String(route?.title || '').trim()
  if (!title) {
    setStatusMessage('请先填写路线名称')
    return
  }
  const desc = String(route?.description || '').trim()
  const feasibility = Math.max(0, Math.min(100, Number(route?.feasibility || 50)))
  const custom = {
    id: `custom_${Date.now()}`,
    title,
    description: desc || (uploadedDocText.value ? `文档摘要：${uploadedDocText.value.slice(0, 80)}...` : '自定义路线'),
    feasibility,
    difficulty: route?.difficulty || '中等',
    benefit: route?.benefit || '中等',
    attributeDeltaMap: {
      career: Math.round((feasibility - 50) / 8),
      finance: Math.round((feasibility - 50) / 10),
      relationship: Math.round((Math.random() * 10) - 3),
      health: Math.round((Math.random() * 8) - 2),
      growth: Math.round((Math.random() * 14) - 3)
    },
    impacts: null,
    sourceFile: uploadedPlanMeta.value?.name || null
  }
  customRoutes.value.unshift(custom)
  setStatusMessage('自定义路线已添加')
}
const removeCustomRoute = (index) => {
  customRoutes.value.splice(index, 1)
  setStatusMessage('已删除自定义路线')
}
const handleFileUpload = async (event) => {
  const file = event?.target?.files?.[0]
  if (!file) return

  try {
    const result = await requestPlanningFileExtraction(file)
    if (!result.ok) {
      uploadedDocText.value = ''
      uploadedPlanMeta.value = null
      setStatusMessage(result.error?.message || '文件读取失败，请更换文件后重试。', 'error')
      return
    }

    const { text, meta } = result.data
    uploadedDocText.value = text
    uploadedPlanMeta.value = meta
    setStatusMessage(`已接入文件：${file.name}`)
  } finally {
    if (event?.target) {
      event.target.value = ''
    }
  }
}
const buildMedia = (type, title) => ({
  id: `${type}_${Date.now()}_${Math.random().toString(36).slice(2, 6)}`,
  type,
  title,
  description: `基于「${selectedRoute.value?.title || '当前路线'}」生成`,
  time: new Date().toLocaleString()
})
const generateComic = () => {
  generatedMedia.value.unshift(buildMedia('comic', '人生分支漫画'))
  setStatusMessage('漫画素材已生成')
}
const generateVideo = () => {
  generatedMedia.value.unshift(buildMedia('video', '15秒分支短视频'))
  setStatusMessage('短视频素材已生成')
}
const generatePoster = () => {
  generatedMedia.value.unshift(buildMedia('poster', '时间轴海报'))
  setStatusMessage('海报素材已生成')
}
const toggleMode = () => { mode.value = mode.value === 'ai' ? 'custom' : 'ai' }

const handleComparisonRouteSelected = (route) => {
  selectRoute(route)
}

const handleComparisonConfirm = () => {
  if (
    compareRoutes.value.length > 0 &&
    (!selectedRoute.value || !compareRoutes.value.some((route) => route.id === selectedRoute.value?.id))
  ) {
    selectRoute(compareRoutes.value[0])
  }
  goToReflection()
}

const showRadarChart = () => { currentChart.value = 'radar' }
const showTrendChart = () => { currentChart.value = 'trend' }
const showImpactTrace = () => { currentChart.value = 'impact' }

const refreshSocialData = () => {
  const samples = [
    { source: '教育部公开数据', text: '研究生招生结构持续调整，应用型方向名额增加。' },
    { source: '招聘平台样本', text: 'AI 产品、数据分析、复合型岗位需求增加。' },
    { source: '城市发展动态', text: `${userInfo.value.city || '目标城市'} 新增人才补贴政策，适合长期规划。` }
  ]
  socialFeed.value = samples.map((item, idx) => ({
    id: `feed_refresh_${Date.now()}_${idx}`,
    ...item,
    date: new Date().toLocaleDateString()
  }))
  setStatusMessage('社会数据已刷新')
}

const restartJourney = async () => {
  restartCount.value += 1
  decisionCount.value = 0
  journeyStartedAt.value = Date.now()
  resetJourneyState({
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
    defaultAIRole: DEFAULT_AI_ROLE,
    defaultAIDescription: DEFAULT_AI_DESCRIPTION,
    userCity: userInfo.value.city
  })
  computeRegret()
  setStatusMessage('已重新开始新一轮人生旅程')

  await generateAIRoutes()
}

onMounted(() => {
  const backup = localStorage.getItem('life_local_backup')
  if (backup) {
    try {
      const parsed = JSON.parse(backup)
      if (parsed?.userInfo) userInfo.value = { ...userInfo.value, ...parsed.userInfo }
    } catch {
      // ignore invalid backup
    }
  }
  generateAIRoutes()
  computeRegret()
})
</script>

<style scoped>
.main-content { padding: var(--space-lg); max-width: 1200px; margin: 0 auto }
.status-toast { padding: 0.8rem 1rem; background: #f7f7f7; border-radius: 10px; margin-bottom: var(--space-md); box-shadow: 0 4px 12px rgba(0,0,0,0.04); }
.status-toast.status-error { background: rgba(255, 107, 107, 0.16); color: #ffd7d7; border: 1px solid rgba(255, 107, 107, 0.4); }
.status-toast.status-success { background: rgba(0, 208, 132, 0.16); color: #dff9ee; border: 1px solid rgba(0, 208, 132, 0.35); }
.title { font-size: 1.8rem; margin-bottom: 1rem }
.view-loading {
  min-height: 240px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 14px;
  margin-top: var(--space-lg);
}
.view-loading__spinner {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: 3px solid rgba(212, 165, 116, 0.25);
  border-top-color: var(--color-accent-gold);
  animation: view-spin 0.9s linear infinite;
}
.view-loading__text {
  color: var(--color-text-secondary);
  font-size: 0.95rem;
}
@keyframes view-spin {
  to { transform: rotate(360deg); }
}
</style>
