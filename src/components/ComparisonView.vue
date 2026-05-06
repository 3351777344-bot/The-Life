<template>
  <div class="comparison-view">
    <div class="light-beam beam-1"></div>
    <div class="light-beam beam-2"></div>
    <div class="light-beam beam-3"></div>

    <div class="comparison-container glass-container">
      <div class="beam-accent top-left"></div>
      <div class="beam-accent top-right"></div>
      <div class="beam-accent bottom-left"></div>
      <div class="beam-accent bottom-right"></div>

      <div class="header-section">
        <div class="header-icon">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" stroke="url(#compGrad)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <polyline points="22 4 12 14.01 9 11.01" stroke="url(#compGrad)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <defs>
              <linearGradient id="compGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#ffd700"/>
                <stop offset="50%" stop-color="#d4a574"/>
                <stop offset="100%" stop-color="#cd7f32"/>
              </linearGradient>
            </defs>
          </svg>
        </div>
        <h1 class="main-title">人生分岔路</h1>
        <p class="subtitle">AIGC人生规划与决策辅助互动产品</p>
      </div>

      <div class="comparison-main">
        <aside class="left-sidebar">
          <AttributesSidebar
            :attributes="attributes"
            :showTrendPreview="true"
          />
        </aside>

        <main class="comparison-area">
          <div class="comparison-header">
            <h2 class="comparison-title">平行空间双窗对比</h2>
            <div class="comparison-controls">
              <button
                class="btn btn-small"
                :class="{ active: comparisonMode === 'side-by-side' }"
                @click="comparisonMode = 'side-by-side'"
              >
                ▭▭ 并排
              </button>
              <button
                class="btn btn-small"
                :class="{ active: comparisonMode === 'slider' }"
                @click="comparisonMode = 'slider'"
              >
                ⇄ 滑块
              </button>
              <button
                class="btn btn-small"
                :class="{ active: comparisonMode === 'blend' }"
                @click="comparisonMode = 'blend'"
              >
                ◐ 融合
              </button>
              <button v-if="selectedRoutes.length >= 2" class="btn btn-small" @click="swapRoutes">
                ⇅ 交换
              </button>
            </div>
          </div>

          <div v-if="routes.length > 2" class="route-selector glass-card">
            <div class="selector-header">
              <h4>🔄 切换对比路线</h4>
            </div>
            <div class="selector-grid">
              <div v-for="(route, idx) in routes" :key="idx" class="route-option">
                <button
                  class="route-btn"
                  :class="{ selected: selectedRoutes.includes(route) }"
                  @click="addRouteToComparison(route)"
                >
                  <span class="route-name">{{ route.title }}</span>
                  <span class="route-feasibility">{{ route.feasibility }}%</span>
                </button>
              </div>
            </div>
          </div>

          <div v-if="comparisonMode === 'side-by-side'" class="comparison-content side-by-side">
            <div class="route-window left-window">
              <div class="route-card glass-card" @click="expandRoute(selectedRoutes[0])">
                <div class="expand-hint">点击放大</div>
                <div class="route-glow"></div>
                <div class="route-type" :class="selectedRoutes[0]?.type">{{ selectedRoutes[0]?.type }}</div>
                <h3 class="route-title">{{ selectedRoutes[0]?.title }}</h3>
                <p class="route-description">{{ selectedRoutes[0]?.description }}</p>
                <div class="metrics">
                  <div class="metric-item">
                    <span class="metric-label">可行性</span>
                    <div class="metric-bar">
                      <div class="metric-fill" :style="{ width: selectedRoutes[0]?.feasibility + '%' }"></div>
                    </div>
                    <span class="metric-value">{{ selectedRoutes[0]?.feasibility }}%</span>
                  </div>
                  <div class="metric-item">
                    <span class="metric-label">难度</span>
                    <span class="metric-badge" :class="getDifficultyClass(selectedRoutes[0]?.difficulty)">
                      {{ selectedRoutes[0]?.difficulty }}
                    </span>
                  </div>
                  <div class="metric-item">
                    <span class="metric-label">预期收益</span>
                    <span class="metric-badge benefit">{{ selectedRoutes[0]?.benefit }}</span>
                  </div>
                </div>
                <div class="attribute-impact">
                  <h4>属性影响</h4>
                  <div class="impact-list">
                    <div
                      v-for="(impact, attr) in getRouteImpacts(selectedRoutes[0])"
                      :key="attr"
                      class="impact-tag"
                      :class="{ positive: impact >= 0, negative: impact < 0 }"
                    >
                      {{ attributeLabels[attr] }} {{ impact > 0 ? '+' : '' }}{{ impact }}
                    </div>
                  </div>
                </div>
                <button class="btn btn-primary full-width" @click.stop="selectRoute(selectedRoutes[0])">
                  选择此路线
                </button>
              </div>
            </div>
            <div class="route-window right-window">
              <div class="route-card glass-card" @click="expandRoute(selectedRoutes[1])">
                <div class="expand-hint">点击放大</div>
                <div class="route-glow"></div>
                <div class="route-type" :class="selectedRoutes[1]?.type">{{ selectedRoutes[1]?.type }}</div>
                <h3 class="route-title">{{ selectedRoutes[1]?.title }}</h3>
                <p class="route-description">{{ selectedRoutes[1]?.description }}</p>
                <div class="metrics">
                  <div class="metric-item">
                    <span class="metric-label">可行性</span>
                    <div class="metric-bar">
                      <div class="metric-fill" :style="{ width: selectedRoutes[1]?.feasibility + '%' }"></div>
                    </div>
                    <span class="metric-value">{{ selectedRoutes[1]?.feasibility }}%</span>
                  </div>
                  <div class="metric-item">
                    <span class="metric-label">难度</span>
                    <span class="metric-badge" :class="getDifficultyClass(selectedRoutes[1]?.difficulty)">
                      {{ selectedRoutes[1]?.difficulty }}
                    </span>
                  </div>
                  <div class="metric-item">
                    <span class="metric-label">预期收益</span>
                    <span class="metric-badge benefit">{{ selectedRoutes[1]?.benefit }}</span>
                  </div>
                </div>
                <div class="attribute-impact">
                  <h4>属性影响</h4>
                  <div class="impact-list">
                    <div
                      v-for="(impact, attr) in getRouteImpacts(selectedRoutes[1])"
                      :key="attr"
                      class="impact-tag"
                      :class="{ positive: impact >= 0, negative: impact < 0 }"
                    >
                      {{ attributeLabels[attr] }} {{ impact > 0 ? '+' : '' }}{{ impact }}
                    </div>
                  </div>
                </div>
                <button class="btn btn-primary full-width" @click.stop="selectRoute(selectedRoutes[1])">
                  选择此路线
                </button>
              </div>
            </div>
          </div>

          <div v-else-if="comparisonMode === 'slider'" class="comparison-content slider-mode">
            <div class="slider-container glass-card">
              <div class="slider-content">
                <div class="slider-left" :style="{ width: sliderPosition + '%' }">
                  <div class="route-card glass-card" v-if="selectedRoutes[0]">
                    <div class="route-glow"></div>
                    <div class="route-type" :class="selectedRoutes[0].type">{{ selectedRoutes[0].type }}</div>
                    <h3 class="route-title">{{ selectedRoutes[0].title }}</h3>
                    <p class="route-description">{{ selectedRoutes[0].description }}</p>
                  </div>
                </div>
                <div class="slider-right" :style="{ width: (100 - sliderPosition) + '%' }">
                  <div class="route-card glass-card" v-if="selectedRoutes[1]">
                    <div class="route-glow"></div>
                    <div class="route-type" :class="selectedRoutes[1].type">{{ selectedRoutes[1].type }}</div>
                    <h3 class="route-title">{{ selectedRoutes[1].title }}</h3>
                    <p class="route-description">{{ selectedRoutes[1].description }}</p>
                  </div>
                </div>
                <div
                  class="slider-handle"
                  :style="{ left: sliderPosition + '%' }"
                  @mousedown="startSliderDrag"
                  @touchstart="startSliderDrag"
                >
                  <span class="slider-arrow">⇄</span>
                </div>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                v-model="sliderPosition"
                class="slider-input"
              >
            </div>
          </div>

          <div v-else-if="comparisonMode === 'blend'" class="comparison-content blend-mode">
            <div class="blend-container">
              <div v-for="(route, idx) in selectedRoutes" :key="idx" class="blend-layer" :style="{ opacity: 0.5 }">
                <div class="route-card glass-card">
                  <div class="route-glow"></div>
                  <div class="route-type" :class="route.type">{{ route.type }}</div>
                  <h3 class="route-title">{{ route.title }}</h3>
                  <div class="metrics">
                    <div class="metric-item">
                      <span class="metric-label">可行性</span>
                      <div class="metric-bar">
                        <div class="metric-fill" :style="{ width: route.feasibility + '%' }"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="comparison-analysis glass-card" v-if="selectedRoutes.length === 2">
            <div class="analysis-header">
              <h4>对比分析</h4>
            </div>
            <div class="analysis-grid">
              <div class="analysis-item">
                <span class="analysis-label">综合评分差异</span>
                <span class="analysis-value" :class="getScoreDifference() >= 0 ? 'positive' : 'negative'">
                  {{ getScoreDifference() > 0 ? '+' : '' }}{{ getScoreDifference() }}
                </span>
              </div>
              <div class="analysis-item">
                <span class="analysis-label">难度对比</span>
                <span class="analysis-value">
                  {{ selectedRoutes[0].difficulty }} vs {{ selectedRoutes[1].difficulty }}
                </span>
              </div>
              <div class="analysis-item">
                <span class="analysis-label">收益期望</span>
                <span class="analysis-value">
                  {{ selectedRoutes[0].benefit }} vs {{ selectedRoutes[1].benefit }}
                </span>
              </div>
            </div>
          </div>
        </main>

        <aside class="right-sidebar">
          <div class="social-dynamics glass-card">
            <div class="panel-header">
              <h3 class="panel-title">社会现实联动</h3>
            </div>
            <div class="social-item" v-for="item in socialData" :key="item.id">
              <span class="social-tag" :class="item.category">{{ item.category }}</span>
              <p class="social-text">{{ item.text }}</p>
            </div>
          </div>

          <div class="policy-info glass-card">
            <div class="panel-header">
              <h3 class="panel-title">教育/共聚政策</h3>
            </div>
            <div class="policy-item" v-for="policy in policyData" :key="policy.id">
              <h4 class="policy-title">{{ policy.title }}</h4>
              <p class="policy-text">{{ policy.description }}</p>
              <span class="policy-date">{{ policy.date }}</span>
            </div>
          </div>
        </aside>
      </div>

      <div class="comparison-footer">
        <button class="btn btn-secondary" @click="$emit('go-back')">← 返回</button>
        <button class="btn btn-primary" @click="$emit('confirm-selection')">确认选择</button>
      </div>

      <Teleport to="body">
        <div v-if="expandedRoute" class="expanded-modal" @click="closeExpanded">
          <div class="expanded-content glass-container" @click.stop>
            <button class="expanded-close" @click="closeExpanded">×</button>
            <div class="expanded-header">
              <div class="route-type" :class="expandedRoute.type">{{ expandedRoute.type }}</div>
              <h2 class="expanded-title">{{ expandedRoute.title }}</h2>
              <p class="expanded-description">{{ expandedRoute.description }}</p>
            </div>
            <div class="expanded-metrics">
              <div class="expanded-metric">
                <span class="metric-label">可行性</span>
                <div class="metric-bar large">
                  <div class="metric-fill" :style="{ width: expandedRoute.feasibility + '%' }"></div>
                </div>
                <span class="metric-value">{{ expandedRoute.feasibility }}%</span>
              </div>
              <div class="expanded-metric">
                <span class="metric-label">难度</span>
                <span class="metric-badge large" :class="getDifficultyClass(expandedRoute.difficulty)">
                  {{ expandedRoute.difficulty }}
                </span>
              </div>
              <div class="expanded-metric">
                <span class="metric-label">预期收益</span>
                <span class="metric-badge benefit large">{{ expandedRoute.benefit }}</span>
              </div>
            </div>
            <div class="expanded-impacts">
              <h4>属性影响</h4>
              <div class="impact-list">
                <div
                  v-for="(impact, attr) in getRouteImpacts(expandedRoute)"
                  :key="attr"
                  class="impact-tag large"
                  :class="{ positive: impact >= 0, negative: impact < 0 }"
                >
                  {{ attributeLabels[attr] }} {{ impact > 0 ? '+' : '' }}{{ impact }}
                </div>
              </div>
            </div>
            <button class="btn btn-primary full-width" @click="selectRoute(expandedRoute)">
              选择此路线
            </button>
          </div>
        </div>
      </Teleport>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import AttributesSidebar from './AttributesSidebar.vue'

const props = defineProps({
  routes: {
    type: Array,
    default: () => []
  },
  attributes: {
    type: Object,
    default: () => ({})
  }
})

const emit = defineEmits(['go-back', 'confirm-selection', 'route-selected'])

const comparisonMode = ref('side-by-side')
const selectedRoutes = ref([])
const sliderPosition = ref(50)
let isDraggingSlider = false
const expandedRoute = ref(null)

watch(() => props.routes, (newRoutes) => {
  if (newRoutes && newRoutes.length >= 2) {
    selectedRoutes.value = [newRoutes[0], newRoutes[1]]
  } else if (newRoutes && newRoutes.length === 1) {
    selectedRoutes.value = [newRoutes[0]]
  }
}, { immediate: true, deep: true })

const expandRoute = (route) => {
  if (route) {
    expandedRoute.value = route
  }
}

const closeExpanded = () => {
  expandedRoute.value = null
}

const attributeLabels = {
  career: '职业发展',
  finance: '财务状况',
  relationship: '人际关系',
  health: '健康状态',
  growth: '个人成长'
}

const getTagColor = (tag) => {
  const colors = {
    'AI科技': 'tag-ai',
    '创业': 'tag-startup',
    '体制': 'tag-system',
    '艺术': 'tag-art',
    '自由职业': 'tag-freelance'
  }
  return colors[tag] || 'tag-default'
}

const getRouteImpacts = (route) => {
  if (!route) return {}
  if (route.impacts) return route.impacts
  return {
    career: route.feasibility || 0,
    finance: (route.feasibility * 0.8) || 0,
    relationship: 50,
    health: 60,
    growth: (route.feasibility * 0.9) || 0
  }
}

const mentorTip = ref('当前的最优选择是平衡职业发展与个人成长的道路')

const socialData = [
  {
    id: 1,
    category: '行业',
    text: '2025年AI行业增速预计20.3%，投融资超6000亿'
  },
  {
    id: 2,
    category: '政策',
    text: '国家发布《十四五数字经济发展规划》支持新兴产业'
  },
  {
    id: 3,
    category: '数据',
    text: '互联网行业平均薪资同比增长22.3%'
  }
]

const policyData = [
  {
    id: 1,
    title: '教育支持政策',
    description: '国家继续教育计划支持职业技能提升',
    date: '2025年1月'
  },
  {
    id: 2,
    title: '创业扶持政策',
    description: '创新创业基金增加到100亿元规模',
    date: '2025年1月'
  }
]

const getAttributeClass = (value) => {
  if (value >= 80) return 'high'
  if (value >= 60) return 'medium'
  return 'low'
}

const getDifficultyClass = (difficulty) => {
  const map = { '低': 'easy', '中等': 'medium', '高': 'hard' }
  return map[difficulty] || 'medium'
}

const getScoreDifference = () => {
  if (selectedRoutes.value.length < 2) return 0
  const score1 = selectedRoutes.value[0].feasibility || 0
  const score2 = selectedRoutes.value[1].feasibility || 0
  return score1 - score2
}

const swapRoutes = () => {
  if (selectedRoutes.value.length >= 2) {
    const temp = selectedRoutes.value[0]
    selectedRoutes.value[0] = selectedRoutes.value[1]
    selectedRoutes.value[1] = temp
  }
}

const replaceRoute = (slot, route) => {
  selectedRoutes.value[slot] = route
}

const addRouteToComparison = (route) => {
  if (selectedRoutes.value.length < 2) {
    selectedRoutes.value.push(route)
  } else {
    selectedRoutes.value[1] = route
  }
}

const selectRoute = (route) => {
  emit('route-selected', route)
}

const startSliderDrag = (e) => {
  isDraggingSlider = true
  document.addEventListener('mousemove', handleSliderMove)
  document.addEventListener('mouseup', endSliderDrag)
}

const handleSliderMove = (e) => {
  if (!isDraggingSlider) return
  const container = document.querySelector('.slider-container')
  if (!container) return
  const rect = container.getBoundingClientRect()
  const pos = ((e.clientX - rect.left) / rect.width) * 100
  sliderPosition.value = Math.max(0, Math.min(100, pos))
}

const endSliderDrag = () => {
  isDraggingSlider = false
  document.removeEventListener('mousemove', handleSliderMove)
  document.removeEventListener('mouseup', endSliderDrag)
}
</script>

<style scoped>
.comparison-view {
  min-height: 100vh;
  padding: 24px;
  position: relative;
  overflow: hidden;
}

.comparison-container {
  max-width: 1600px;
  margin: 0 auto;
  padding: 32px;
  position: relative;
}

.light-beam {
  position: fixed;
  top: 0;
  left: 0;
  width: 200%;
  height: 100%;
  pointer-events: none;
  z-index: 0;
  background: linear-gradient(270deg, transparent, rgba(212, 165, 116, 0.12), rgba(255, 215, 100, 0.2), rgba(212, 165, 116, 0.12), transparent);
  animation: beam-flow 12s linear infinite;
  opacity: 0.4;
}

.beam-1 { animation-delay: 0s; top: 5%; }
.beam-2 { animation-delay: -4s; top: 35%; opacity: 0.25; }
.beam-3 { animation-delay: -8s; top: 65%; opacity: 0.15; }

@keyframes beam-flow {
  0% { transform: translateX(-50%) skewX(-15deg); opacity: 0; }
  10% { opacity: 0.4; }
  90% { opacity: 0.4; }
  100% { transform: translateX(50%) skewX(-15deg); opacity: 0; }
}

.beam-accent {
  position: absolute;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  pointer-events: none;
  filter: blur(50px);
  opacity: 0.35;
}

.beam-accent.top-left {
  top: -30px;
  left: -30px;
  background: radial-gradient(circle, rgba(255, 215, 100, 0.5) 0%, transparent 70%);
}

.beam-accent.top-right {
  top: -30px;
  right: -30px;
  background: radial-gradient(circle, rgba(212, 165, 116, 0.5) 0%, transparent 70%);
}

.beam-accent.bottom-left {
  bottom: -30px;
  left: -30px;
  background: radial-gradient(circle, rgba(205, 127, 50, 0.4) 0%, transparent 70%);
}

.beam-accent.bottom-right {
  bottom: -30px;
  right: -30px;
  background: radial-gradient(circle, rgba(255, 191, 0, 0.4) 0%, transparent 70%);
}

.header-section {
  text-align: center;
  margin-bottom: 40px;
  animation: fadeInDown 0.8s ease-out;
  position: relative;
}

.header-icon {
  margin-bottom: 16px;
  animation: float-gentle 4s ease-in-out infinite;
}

.main-title {
  font-size: 3rem;
  font-weight: 700;
  background: linear-gradient(135deg, #ffd700, #d4a574, #ffbf00);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 8px;
  text-shadow: 0 0 40px rgba(212, 165, 116, 0.3);
}

.subtitle {
  font-size: 1rem;
  color: var(--color-text-secondary);
  letter-spacing: 0.1em;
}

.comparison-main {
  display: grid;
  grid-template-columns: 280px 1fr 280px;
  gap: 24px;
  margin-bottom: 40px;
  position: relative;
  z-index: 1;
}

.left-sidebar {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.right-sidebar {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.comparison-area {
  min-height: 600px;
}

.comparison-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
  flex-wrap: wrap;
  gap: 16px;
}

.comparison-title {
  font-size: 1.6rem;
  color: var(--color-accent-gold);
}

.comparison-controls {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

.btn.btn-small {
  padding: 8px 16px;
  font-size: 0.85rem;
  background: var(--glass-bg);
  border: 1px solid var(--glass-border);
  color: var(--color-text-secondary);
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn.btn-small:hover,
.btn.btn-small.active {
  background: rgba(212, 165, 116, 0.25);
  border-color: var(--color-accent-gold);
  color: var(--color-accent-gold);
  box-shadow: 0 0 15px rgba(212, 165, 116, 0.2);
}

.route-selector {
  padding: 20px;
  margin-bottom: 24px;
}

.selector-header {
  margin-bottom: 16px;
}

.route-selector h4 {
  color: var(--color-accent-gold);
  font-size: 1rem;
}

.selector-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 12px;
}

.route-option {
  width: 100%;
}

.route-btn {
  width: 100%;
  padding: 12px;
  background: var(--glass-bg);
  border: 2px solid var(--glass-border);
  border-radius: 10px;
  color: var(--color-text-secondary);
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.route-btn:hover {
  background: rgba(212, 165, 116, 0.15);
  border-color: rgba(212, 165, 116, 0.5);
  transform: translateY(-2px);
}

.route-btn.selected {
  background: rgba(212, 165, 116, 0.3);
  border-color: var(--color-accent-gold);
  color: var(--color-accent-gold);
  box-shadow: 0 0 20px rgba(212, 165, 116, 0.3);
}

.route-name {
  font-weight: 600;
  font-size: 0.9rem;
}

.route-feasibility {
  font-size: 0.75rem;
  opacity: 0.7;
}

.comparison-content {
  margin-bottom: 24px;
}

.side-by-side {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.left-window,
.right-window {
  flex: 1;
}

.left-window .route-card,
.right-window .route-card {
  cursor: pointer;
}

.expand-hint {
  position: absolute;
  top: 12px;
  right: 12px;
  font-size: 0.7rem;
  color: var(--color-accent-gold);
  opacity: 0;
  transition: opacity 0.3s ease;
  background: rgba(0, 0, 0, 0.3);
  padding: 4px 8px;
  border-radius: 4px;
}

.route-card:hover .expand-hint {
  opacity: 1;
}

.route-window {
  animation: slideInUp 0.6s ease-out forwards;
  opacity: 0;
}

.left-window { animation-delay: 0s; }
.right-window { animation-delay: 0.15s; }

@keyframes slideInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.route-card {
  padding: 24px;
  position: relative;
  overflow: hidden;
  transition: all 0.4s ease;
}

.route-glow {
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle at center, rgba(212, 165, 116, 0.08) 0%, transparent 50%);
  opacity: 0;
  transition: opacity 0.4s ease;
  pointer-events: none;
}

.route-card:hover .route-glow {
  opacity: 1;
}

.route-card:hover {
  border-color: var(--glass-border-hover);
  transform: translateY(-6px);
  box-shadow: var(--glass-shadow-glow);
}

.route-type {
  display: inline-block;
  padding: 6px 14px;
  border-radius: 8px;
  font-size: 0.75rem;
  font-weight: 600;
  margin-bottom: 14px;
  background: rgba(212, 165, 116, 0.2);
  color: var(--color-accent-gold);
}

.route-title {
  font-size: 1.4rem;
  margin-bottom: 12px;
  color: var(--color-accent-gold-light);
}

.route-description {
  color: var(--color-text-secondary);
  margin-bottom: 20px;
  line-height: 1.6;
  font-size: 0.95rem;
}

.metrics {
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin-bottom: 20px;
}

.metric-item {
  display: flex;
  align-items: center;
  gap: 12px;
}

.metric-label {
  min-width: 60px;
  font-size: 0.85rem;
  color: var(--color-text-secondary);
}

.metric-bar {
  flex: 1;
  height: 8px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 4px;
  overflow: hidden;
}

.metric-bar.large {
  height: 12px;
}

.metric-fill {
  height: 100%;
  background: linear-gradient(90deg, #ffd700, #d4a574);
  border-radius: 4px;
  transition: width 0.5s ease;
}

.metric-value {
  min-width: 40px;
  text-align: right;
  font-weight: 600;
  color: var(--color-accent-gold);
}

.metric-badge {
  padding: 4px 12px;
  border-radius: 6px;
  font-size: 0.8rem;
  font-weight: 600;
}

.metric-badge.easy {
  background: rgba(72, 187, 120, 0.2);
  color: #48bb78;
}

.metric-badge.medium {
  background: rgba(250, 204, 21, 0.2);
  color: #facc15;
}

.metric-badge.hard {
  background: rgba(245, 101, 101, 0.2);
  color: #f56565;
}

.metric-badge.benefit {
  background: rgba(66, 153, 225, 0.2);
  color: #4299e1;
}

.metric-badge.large {
  padding: 8px 16px;
  font-size: 1rem;
}

.attribute-impact {
  margin-bottom: 20px;
}

.attribute-impact h4 {
  font-size: 0.95rem;
  color: var(--color-accent-gold);
  margin-bottom: 12px;
}

.impact-list {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.impact-tag {
  padding: 6px 12px;
  border-radius: 6px;
  font-size: 0.8rem;
}

.impact-tag.positive {
  background: rgba(72, 187, 120, 0.15);
  color: #48bb78;
}

.impact-tag.negative {
  background: rgba(245, 101, 101, 0.15);
  color: #f56565;
}

.impact-tag.large {
  padding: 10px 18px;
  font-size: 1rem;
}

.slider-mode {
  margin-bottom: 24px;
}

.slider-container {
  padding: 0;
  overflow: hidden;
}

.slider-content {
  position: relative;
  height: 300px;
  display: flex;
}

.slider-left,
.slider-right {
  position: absolute;
  top: 0;
  height: 100%;
  overflow: hidden;
}

.slider-left {
  left: 0;
  border-right: 2px solid var(--color-accent-gold);
}

.slider-right {
  right: 0;
}

.slider-left .route-card,
.slider-right .route-card {
  height: 100%;
  margin: 0;
  border-radius: 0;
}

.slider-handle {
  position: absolute;
  top: 0;
  width: 40px;
  height: 100%;
  background: rgba(212, 165, 116, 0.3);
  backdrop-filter: blur(10px);
  cursor: ew-resize;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  border-radius: 8px;
}

.slider-arrow {
  font-size: 24px;
  color: var(--color-accent-gold);
}

.slider-input {
  width: 100%;
  height: 8px;
  margin-top: 16px;
  -webkit-appearance: none;
  appearance: none;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 4px;
  cursor: pointer;
}

.slider-input::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 24px;
  height: 24px;
  background: linear-gradient(135deg, #ffd700, #d4a574);
  border-radius: 50%;
  cursor: pointer;
  box-shadow: 0 0 15px rgba(212, 165, 116, 0.5);
}

.slider-input::-moz-range-thumb {
  width: 24px;
  height: 24px;
  background: linear-gradient(135deg, #ffd700, #d4a574);
  border-radius: 50%;
  cursor: pointer;
  border: none;
  box-shadow: 0 0 15px rgba(212, 165, 116, 0.5);
}

.blend-mode {
  margin-bottom: 24px;
}

.blend-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
}

.blend-layer {
  position: relative;
}

.comparison-analysis {
  padding: 24px;
}

.analysis-header {
  margin-bottom: 20px;
}

.analysis-header h4 {
  font-size: 1.1rem;
  color: var(--color-accent-gold);
}

.analysis-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.analysis-item {
  text-align: center;
  padding: 16px;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 12px;
}

.analysis-label {
  display: block;
  font-size: 0.85rem;
  color: var(--color-text-secondary);
  margin-bottom: 8px;
}

.analysis-value {
  font-size: 1.4rem;
  font-weight: 700;
  color: var(--color-accent-gold);
}

.analysis-value.positive {
  color: #48bb78;
}

.analysis-value.negative {
  color: #f56565;
}

.social-dynamics,
.policy-info {
  padding: 20px;
}

.panel-header {
  margin-bottom: 16px;
}

.panel-title {
  font-size: 1rem;
  color: var(--color-accent-gold);
}

.social-item {
  padding: 12px;
  margin-bottom: 12px;
  background: rgba(0, 0, 0, 0.15);
  border-radius: 8px;
}

.social-item:last-child {
  margin-bottom: 0;
}

.social-tag {
  display: inline-block;
  padding: 4px 10px;
  border-radius: 4px;
  font-size: 0.7rem;
  font-weight: 600;
  margin-bottom: 8px;
}

.social-tag.行业 {
  background: rgba(66, 153, 225, 0.2);
  color: #4299e1;
}

.social-tag.政策 {
  background: rgba(250, 204, 21, 0.2);
  color: #facc15;
}

.social-tag.数据 {
  background: rgba(168, 85, 247, 0.2);
  color: #a855f7;
}

.social-text {
  font-size: 0.85rem;
  color: var(--color-text-secondary);
  line-height: 1.5;
}

.policy-item {
  padding: 14px;
  margin-bottom: 12px;
  background: rgba(0, 0, 0, 0.15);
  border-radius: 8px;
}

.policy-item:last-child {
  margin-bottom: 0;
}

.policy-title {
  font-size: 0.95rem;
  color: var(--color-accent-gold-light);
  margin-bottom: 6px;
}

.policy-text {
  font-size: 0.85rem;
  color: var(--color-text-secondary);
  margin-bottom: 8px;
}

.policy-date {
  font-size: 0.75rem;
  color: var(--color-text-muted);
}

.comparison-footer {
  display: flex;
  justify-content: center;
  gap: 20px;
  padding-top: 24px;
}

.expanded-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  animation: fadeIn 0.3s ease;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.expanded-content {
  max-width: 600px;
  width: 90%;
  max-height: 90vh;
  overflow-y: auto;
  padding: 40px;
  position: relative;
  animation: scaleIn 0.3s ease;
}

@keyframes scaleIn {
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.expanded-close {
  position: absolute;
  top: 16px;
  right: 16px;
  width: 40px;
  height: 40px;
  border: none;
  background: rgba(212, 165, 116, 0.2);
  color: var(--color-accent-gold);
  font-size: 24px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.expanded-close:hover {
  background: rgba(212, 165, 116, 0.4);
  transform: rotate(90deg);
}

.expanded-header {
  text-align: center;
  margin-bottom: 32px;
}

.expanded-title {
  font-size: 2rem;
  color: var(--color-accent-gold);
  margin: 16px 0;
}

.expanded-description {
  color: var(--color-text-secondary);
  font-size: 1.1rem;
  line-height: 1.8;
}

.expanded-metrics {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 32px;
}

.expanded-metric {
  display: flex;
  align-items: center;
  gap: 16px;
}

.expanded-metric .metric-label {
  min-width: 80px;
  font-weight: 600;
}

.expanded-impacts {
  margin-bottom: 32px;
}

.expanded-impacts h4 {
  color: var(--color-accent-gold);
  margin-bottom: 16px;
  font-size: 1.1rem;
}

.expanded-impacts .impact-list {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes float-gentle {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

@media (max-width: 1200px) {
  .comparison-main {
    grid-template-columns: 250px 1fr 250px;
  }
}

@media (max-width: 1024px) {
  .comparison-main {
    grid-template-columns: 1fr;
  }

  .left-sidebar,
  .right-sidebar {
    order: 2;
  }

  .comparison-area {
    order: 1;
  }

  .right-sidebar {
    flex-direction: row;
    flex-wrap: wrap;
  }

  .social-dynamics,
  .policy-info {
    flex: 1;
    min-width: 300px;
  }
}

@media (max-width: 768px) {
  .comparison-view {
    padding: 12px;
  }

  .comparison-container {
    padding: 16px;
  }

  .main-title {
    font-size: 2rem;
  }

  .comparison-header {
    flex-direction: column;
    align-items: flex-start;
  }

  .blend-mode .blend-container {
    grid-template-columns: 1fr;
  }

  .analysis-grid {
    grid-template-columns: 1fr;
  }

  .comparison-footer {
    flex-direction: column;
  }

  .comparison-footer .btn {
    width: 100%;
  }
}
</style>