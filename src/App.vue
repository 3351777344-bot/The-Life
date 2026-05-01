<template>
  <div class="app">
    <div class="starfield" aria-hidden="true"></div>
    <div class="main-content">
      <ViewNav :currentView="currentView" @navigate="(v) => currentView = v" />

      <div v-if="statusMessage" class="status-toast">{{ statusMessage }}</div>

      <div v-if="currentView === 'genesis'">
        <GenesisView
          :userInfo="userInfo"
          :isCardFlipped="isCardFlipped"
          :currentScenario="currentScenario"
          :statusMessage="statusMessage"
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
          :isGenerating="isGenerating"
          :compareRoutes="compareRoutes"
          :customRoutes="customRoutes"
          :selectedRoute="selectedRoute"
          :generatedMedia="generatedMedia"
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
          @go-to-reflection="goToReflection"
          @toggle-mode="toggleMode"
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
          :isGeneratingAIResponse="isGenerating"
          :chatInput="chatInput"
          :currentAI角色="currentAIRole"
          :currentAIDescription="currentAIDescription"
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
          @restart="goToGenesis"
        />
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import ViewNav from './components/ViewNav.vue'
import GenesisView from './components/GenesisView.vue'
import DestinyView from './components/DestinyView.vue'
import DivergenceView from './components/DivergenceView.vue'
import ReflectionView from './components/ReflectionView.vue'
import MentorshipView from './components/MentorshipView.vue'
import ConclusionView from './components/ConclusionView.vue'

// Minimal reactive state to keep components running
const currentView = ref('genesis')
const statusMessage = ref('')

const userInfo = ref({ age: '', education: '', occupation: '', city: '' })
const isCardFlipped = ref(false)
const currentScenario = ref({ scenario: '默认场景', options: [] })

const treeNodes = ref([])
const selectedNode = ref('current')
const selectedNodeData = computed(() => treeNodes.value.find(n => n.id === selectedNode.value))
const nodeCount = computed(() => treeNodes.value.length)
const leafCount = computed(() => treeNodes.value.filter(n => !n.children || n.children.length === 0).length)
const selectedDepth = computed(() => 1)
const treeTransformStyle = computed(() => ({ transform: 'none' }))
const isPanning = ref(false)

const aiRoutes = ref([])
const isGenerating = ref(false)
const compareRoutes = ref([])
const customRoutes = ref([])
const selectedRoute = ref(null)
const generatedMedia = ref([])
const mode = ref('ai')

const attributes = ref({ career: 50, finance: 50, relationship: 50, health: 50, growth: 50 })
const attributeHistory = ref([])
const impactHistory = ref([])
const currentChart = ref('radar')
const radarAxes = ref([
  { key: 'career', label: '职业' },
  { key: 'finance', label: '财务' },
  { key: 'relationship', label: '人际' },
  { key: 'health', label: '健康' },
  { key: 'growth', label: '成长' }
])
const radarAxisPoints = computed(() => radarAxes.value.map((_, i) => ({ x: 0, y: 0, lx: 0, ly: 0 })))
const radarPolygon = computed(() => '')
const axisLabelMap = ref({ career: '职业', finance: '财务', relationship: '人际', health: '健康', growth: '成长' })
const socialFeed = ref([])

const chatMessages = ref([])
const chatInput = ref('')
const isListening = ref(false)
const currentAIRole = ref('人生规划师')
const currentAIDescription = ref('简化 AI 描述')

const savedPaths = ref([])
const regretLevel = ref(20)
const regretText = ref('暂无')
const regretAnalysis = ref('暂无')
const aiAdvice = ref('')

// Simple helpers
const setStatusMessage = (msg) => {
  statusMessage.value = msg
  if (msg) setTimeout(() => statusMessage.value = '', 2500)
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

// compute simple trend points for a given attribute key from history
const getTrendPath = (key) => {
  const points = attributeHistory.value.map((h) => ({ t: h.time, v: h[key] != null ? h[key] : 0 }))
  return points
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

// Navigation
const goToDestinyTree = () => currentView.value = 'destiny'
const goToDivergence = () => currentView.value = 'divergence'
const goToReflection = () => currentView.value = 'reflection'
const goToMentorship = () => currentView.value = 'mentorship'
const goToConclusion = () => currentView.value = 'conclusion'
const goToGenesis = () => currentView.value = 'genesis'

// Genesis handlers
const fetchScenario = () => { currentScenario.value = { scenario: '随机场景', options: [{ text: '选项A', style: 'A' }, { text: '选项B', style: 'B' }] } }
const flipCard = () => isCardFlipped.value = !isCardFlipped.value
const selectOption = (opt) => { userInfo.value.decisionStyle = opt; isCardFlipped.value = false }
const skipScenario = () => setStatusMessage('已跳过场景')
const markDataEditable = () => setStatusMessage('可以修改信息')
const backupLocalData = () => { localStorage.setItem('life_local_backup', JSON.stringify({ userInfo: userInfo.value })); setStatusMessage('已备份') }
const clearLocalData = () => { localStorage.removeItem('life_local_backup'); setStatusMessage('已清除') }

// Simple chat
const sendMessage = (text) => {
  if (!text) return
  chatMessages.value.push(text)
  isGenerating.value = true
  setTimeout(() => { chatMessages.value.push('（AI 简化回复）' + text); isGenerating.value = false }, 700)
}

const selectAIRole = (role) => { currentAIRole.value = role; currentAIDescription.value = role }
const toggleVoiceInput = () => { isListening.value = !isListening.value; setStatusMessage(isListening.value ? '开始语音' : '停止语音') }

// Minimal tree helpers
const addNode = () => { treeNodes.value.push({ id: `node_${Date.now()}`, title: '新节点', children: [] }) }
const zoomIn = () => {}
const zoomOut = () => {}
const resetView = () => {}
const exportTree = () => {}
const resetTree = () => { treeNodes.value = [] }
const startPan = () => {}
const onPanMove = () => {}
const endPan = () => {}
const selectNode = (n) => { selectedNode.value = n }
const editNode = () => {}
const deleteNode = () => {}
const extendBranch = () => {}

// divergence implementations (lightweight but functional)
const generateAIRoutes = () => {
  isGenerating.value = true
  // create 3 candidate routes with attribute impacts
  const candidates = [
    { id: 'r1', title: '稳健发展', description: '职业为主、低风险投资', impacts: { career: +8, finance: +4, growth: +6, health: -2 } },
    { id: 'r2', title: '创业探索', description: '高增长高风险路径', impacts: { career: +15, finance: -10, growth: +18, relationship: -5 } },
    { id: 'r3', title: '平衡生活', description: '轻度成长与稳定家庭', impacts: { career: +3, finance: +2, relationship: +8, health: +6 } }
  ]
  setTimeout(() => {
    aiRoutes.value = candidates
    isGenerating.value = false
  }, 600)
}

const selectRoute = (route) => {
  if (!route) return
  selectedRoute.value = route
  // persist chosen path
  savedPaths.value.unshift({ id: route.id || `path_${Date.now()}`, title: route.title, route })
  if (savedPaths.value.length > 12) savedPaths.value.pop()
  // apply impacts to attributes
  const changes = {}
  Object.keys(route.impacts || {}).forEach(k => {
    const delta = route.impacts[k]
    const before = attributes.value[k] || 0
    let after = before + delta
    after = Math.max(0, Math.min(100, after))
    attributes.value[k] = after
    changes[k] = { before, after, delta }
  })
  recordImpact(route.title || '已选路线', changes)
  recordAttributeHistory()
}

const refineRoute = () => {}
const replaceRoute = () => {}
const toggleCompare = () => {}
const addCustomRoute = () => {}
const removeCustomRoute = () => {}
const handleFileUpload = () => {}
const generateComic = () => {}
const generateVideo = () => {}
const generatePoster = () => {}
const toggleMode = () => { mode.value = mode.value === 'ai' ? 'custom' : 'ai' }

onMounted(() => {
  recordAttributeHistory()
})
</script>

<style scoped>
.main-content { padding: 2rem; max-width: 1200px; margin: 0 auto }
.status-toast { padding: 0.6rem 1rem; background: #f0f0f0; border-radius: 8px; margin-bottom: 1rem }
.title { font-size: 1.8rem; margin-bottom: 1rem }
</style>
