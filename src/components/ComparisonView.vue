<template>
  <div class="comparison-view">
    <div class="comparison-container glass-container">
      <!-- 顶部标题 -->
      <div class="header-section">
        <h1 class="main-title">人生分岔路</h1>
        <p class="subtitle">AIGC人生规划与决策辅助互动产品</p>
      </div>

      <!-- 主体内容区 -->
      <div class="comparison-main">
        <!-- 左侧：属性系统 -->
        <aside class="left-sidebar">
          <AttributesSidebar 
            :attributes="attributes"
            :showTrendPreview="true"
          />
        </aside>

        <!-- 中间：双窗对比区 -->
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

          <!-- 路线选择区 -->
          <div v-if="routes.length > 2" class="route-selector glass-card">
            <h4>🔄 切换对比路线</h4>
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

          <!-- 并排对比模式 -->
          <div v-if="comparisonMode === 'side-by-side'" class="comparison-content side-by-side">
            <div class="route-window" v-for="(route, idx) in selectedRoutes" :key="idx">
              <div class="route-card glass-card">
                <div class="route-type" :class="route.type">{{ route.type }}</div>
                <h3 class="route-title">{{ route.title }}</h3>
                <p class="route-description">{{ route.description }}</p>
                
                <div class="metrics">
                  <div class="metric-item">
                    <span class="metric-label">可行性</span>
                    <div class="metric-bar">
                      <div class="metric-fill" :style="{ width: route.feasibility + '%' }"></div>
                    </div>
                    <span class="metric-value">{{ route.feasibility }}%</span>
                  </div>
                  <div class="metric-item">
                    <span class="metric-label">难度</span>
                    <span class="metric-badge" :class="getDifficultyClass(route.difficulty)">
                      {{ route.difficulty }}
                    </span>
                  </div>
                  <div class="metric-item">
                    <span class="metric-label">预期收益</span>
                    <span class="metric-badge benefit">{{ route.benefit }}</span>
                  </div>
                </div>

                <div class="attribute-impact">
                  <h4>属性影响</h4>
                  <div class="impact-list">
                    <div 
                      v-for="(impact, attr) in getRouteImpacts(route)" 
                      :key="attr"
                      class="impact-tag"
                      :class="{ positive: impact >= 0, negative: impact < 0 }"
                    >
                      {{ attributeLabels[attr] }} {{ impact > 0 ? '+' : '' }}{{ impact }}
                    </div>
                  </div>
                </div>

                <button class="btn btn-primary full-width" @click="selectRoute(route)">
                  选择此路线
                </button>
              </div>
            </div>
          </div>

          <!-- 滑块对比模式 -->
          <div v-else-if="comparisonMode === 'slider'" class="comparison-content slider-mode">
            <div class="slider-container">
              <div class="slider-content">
                <div class="slider-left" :style="{ width: sliderPosition + '%' }">
                  <div class="route-card glass-card" v-if="selectedRoutes[0]">
                    <div class="route-type" :class="selectedRoutes[0].type">{{ selectedRoutes[0].type }}</div>
                    <h3 class="route-title">{{ selectedRoutes[0].title }}</h3>
                    <p class="route-description">{{ selectedRoutes[0].description }}</p>
                  </div>
                </div>
                <div class="slider-right" :style="{ width: (100 - sliderPosition) + '%' }">
                  <div class="route-card glass-card" v-if="selectedRoutes[1]">
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

          <!-- 融合对比模式 -->
          <div v-else-if="comparisonMode === 'blend'" class="comparison-content blend-mode">
            <div class="blend-container">
              <div v-for="(route, idx) in selectedRoutes" :key="idx" class="blend-layer" :style="{ opacity: 0.5 }">
                <div class="route-card glass-card">
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

          <!-- 对比分析 -->
          <div class="comparison-analysis glass-card" v-if="selectedRoutes.length === 2">
            <h4>对比分析</h4>
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

        <!-- 右侧：社会联动与政策 -->
        <aside class="right-sidebar">
          <div class="social-dynamics glass-card">
            <h3 class="panel-title">社会现实联动</h3>
            <div class="social-item" v-for="item in socialData" :key="item.id">
              <span class="social-tag" :class="item.category">{{ item.category }}</span>
              <p class="social-text">{{ item.text }}</p>
            </div>
          </div>

          <div class="policy-info glass-card">
            <h3 class="panel-title">教育/共聚政策</h3>
            <div class="policy-item" v-for="policy in policyData" :key="policy.id">
              <h4 class="policy-title">{{ policy.title }}</h4>
              <p class="policy-text">{{ policy.description }}</p>
              <span class="policy-date">{{ policy.date }}</span>
            </div>
          </div>
        </aside>
      </div>

      <!-- 底部控制区 -->
      <div class="comparison-footer">
        <button class="btn btn-secondary" @click="$emit('go-back')">← 返回</button>
        <button class="btn btn-primary" @click="$emit('confirm-selection')">确认选择</button>
      </div>
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

const emit = defineEmits(['go-back', 'confirm-selection'])

// 状态管理
const comparisonMode = ref('side-by-side')
const selectedRoutes = ref([])
const sliderPosition = ref(50)
let isDraggingSlider = false

// 监听props.routes变化，自动选择前两条路线
watch(() => props.routes, (newRoutes) => {
  if (newRoutes && newRoutes.length >= 2) {
    selectedRoutes.value = [newRoutes[0], newRoutes[1]]
  } else if (newRoutes && newRoutes.length === 1) {
    selectedRoutes.value = [newRoutes[0]]
  }
}, { immediate: true, deep: true })

const attributeLabels = {
  职业发展: '职业发展',
  财务状况: '财务状况',
  人际关系: '人际关系',
  健康状态: '健康状态',
  个人成长: '个人成长'
}

// 获取标签颜色
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

// 获取路线的影响数据
const getRouteImpacts = (route) => {
  if (route.impacts) return route.impacts
  // 如果路线没有impacts，生成默认值
  return {
    职业发展: route.feasibility || 0,
    财务状况: (route.feasibility * 0.8) || 0,
    人际关系: 50,
    健康状态: 60,
    个人成长: (route.feasibility * 0.9) || 0
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

// 交换路线对比
const swapRoutes = () => {
  if (selectedRoutes.value.length >= 2) {
    const temp = selectedRoutes.value[0]
    selectedRoutes.value[0] = selectedRoutes.value[1]
    selectedRoutes.value[1] = temp
  }
}

// 替换路线位置（slot = 0 or 1）
const replaceRoute = (slot, route) => {
  selectedRoutes.value[slot] = route
}

// 添加路线到对比（切换第二个位置）
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
  padding: 20px;
  background: transparent;
}

.comparison-container {
  max-width: 1600px;
  margin: 0 auto;
}

.header-section {
  text-align: center;
  margin-bottom: 40px;
  animation: fadeInDown 0.8s ease-out;
}

.main-title {
  font-size: 3.5rem;
  font-weight: 700;
  background: linear-gradient(135deg, #ffd700, #d4a574, #ffbf00);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 8px;
  text-shadow: 0 0 40px rgba(212, 165, 116, 0.3);
}

.subtitle {
  font-size: 1.1rem;
  color: var(--color-text-secondary);
  letter-spacing: 0.1em;
}

.comparison-main {
  display: grid;
  grid-template-columns: 280px 1fr 280px;
  gap: 24px;
  margin-bottom: 40px;
}

/* 左侧边栏 */
.left-sidebar {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.attributes-panel {
  padding: 24px;
  border-radius: 16px;
}

.panel-title {
  font-size: 1.3rem;
  margin-bottom: 20px;
  color: var(--color-accent-gold);
  font-weight: 600;
}

.attribute-item {
  margin-bottom: 16px;
}

.attribute-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
  font-size: 0.95rem;
}

.attribute-name {
  color: var(--color-text-secondary);
}

.attribute-value {
  color: var(--color-accent-gold);
  font-weight: 600;
}

.attribute-bar {
  height: 8px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 4px;
  overflow: hidden;
}

.attribute-fill {
  height: 100%;
  transition: width 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  background: linear-gradient(90deg, #d4a574, #ffd700);
}

.attribute-fill.high {
  background: linear-gradient(90deg, #00d084, #00ff88);
}

.attribute-fill.medium {
  background: linear-gradient(90deg, #ffd700, #ffbf00);
}

.attribute-fill.low {
  background: linear-gradient(90deg, #ff6b6b, #ff8c8c);
}

.ai-mentor {
  padding: 20px;
  text-align: center;
  border-radius: 16px;
}

.mentor-avatar {
  font-size: 2.5rem;
  margin-bottom: 12px;
}

.ai-mentor h4 {
  margin-bottom: 12px;
  color: var(--color-accent-gold);
}

.mentor-tip {
  font-size: 0.9rem;
  color: var(--color-text-secondary);
  line-height: 1.5;
}

/* 中间对比区 */
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
  font-size: 1.8rem;
  color: var(--color-accent-gold);
}

.comparison-controls {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.btn.btn-small {
  padding: 8px 16px;
  font-size: 0.85rem;
  background: rgba(212, 165, 116, 0.1);
  border: 1px solid rgba(212, 165, 116, 0.3);
  color: var(--color-text-secondary);
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn.btn-small:hover,
.btn.btn-small.active {
  background: rgba(212, 165, 116, 0.3);
  border-color: var(--color-accent-gold);
  color: var(--color-accent-gold);
}

/* 路线选择器 */
.route-selector {
  padding: 20px;
  margin-bottom: 24px;
  border-radius: 12px;
  background: rgba(53, 42, 32, 0.5);
  border: 1px solid rgba(212, 165, 116, 0.2);
}

.route-selector h4 {
  margin-bottom: 16px;
  color: var(--color-accent-gold);
  font-size: 1rem;
}

.selector-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  gap: 12px;
}

.route-option {
  width: 100%;
}

.route-btn {
  width: 100%;
  padding: 12px;
  background: rgba(212, 165, 116, 0.05);
  border: 2px solid rgba(212, 165, 116, 0.2);
  border-radius: 8px;
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
}

.route-btn.selected {
  background: rgba(212, 165, 116, 0.3);
  border-color: var(--color-accent-gold);
  color: var(--color-accent-gold);
  box-shadow: 0 0 15px rgba(212, 165, 116, 0.3);
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

/* 并排模式 */
.side-by-side {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
}

.route-window {
  animation: slideInUp 0.6s ease-out;
}

.route-card {
  padding: 24px;
  border-radius: 16px;
  background: linear-gradient(135deg, rgba(53, 42, 32, 0.7), rgba(53, 42, 32, 0.5));
  border: 1px solid rgba(212, 165, 116, 0.3);
  transition: all 0.3s ease;
}

.route-card:hover {
  border-color: rgba(212, 165, 116, 0.7);
  transform: translateY(-4px);
  box-shadow: var(--glass-shadow-glow);
}

.route-type {
  display: inline-block;
  padding: 6px 12px;
  border-radius: 6px;
  font-size: 0.75rem;
  font-weight: 600;
  margin-bottom: 12px;
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
  background: rgba(0, 0, 0, 0.3);
  padding: 16px;
  border-radius: 12px;
  margin-bottom: 20px;
}

.metric-item {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 12px;
}

.metric-item:last-child {
  margin-bottom: 0;
}

.metric-label {
  min-width: 70px;
  color: var(--color-text-secondary);
  font-size: 0.9rem;
}

.metric-bar {
  flex: 1;
  height: 6px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 3px;
  overflow: hidden;
}

.metric-fill {
  height: 100%;
  background: linear-gradient(90deg, #d4a574, #ffd700);
  transition: width 0.6s ease;
}

.metric-value {
  min-width: 45px;
  text-align: right;
  color: var(--color-accent-gold);
  font-weight: 600;
  font-size: 0.9rem;
}

.metric-badge {
  padding: 4px 12px;
  border-radius: 6px;
  font-size: 0.85rem;
  background: rgba(212, 165, 116, 0.2);
  color: var(--color-accent-gold);
}

.metric-badge.easy {
  background: rgba(0, 208, 132, 0.2);
  color: #00d084;
}

.metric-badge.hard {
  background: rgba(255, 107, 107, 0.2);
  color: #ff6b6b;
}

.metric-badge.benefit {
  background: rgba(255, 215, 0, 0.2);
  color: #ffd700;
}

.attribute-impact {
  background: rgba(0, 0, 0, 0.2);
  padding: 16px;
  border-radius: 12px;
  margin-bottom: 20px;
}

.attribute-impact h4 {
  color: var(--color-text-secondary);
  font-size: 0.95rem;
  margin-bottom: 12px;
}

.impact-list {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.impact-tag {
  padding: 6px 10px;
  border-radius: 6px;
  font-size: 0.8rem;
  background: rgba(212, 165, 116, 0.15);
  color: var(--color-accent-gold);
}

.impact-tag.positive {
  background: rgba(0, 208, 132, 0.2);
  color: #00d084;
}

.impact-tag.negative {
  background: rgba(255, 107, 107, 0.2);
  color: #ff6b6b;
}

.btn.btn-primary {
  width: 100%;
  padding: 12px;
  background: linear-gradient(135deg, #d4a574, #ffd700);
  color: #1a1510;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: var(--glow-gold);
}

.btn.full-width {
  width: 100%;
}

/* 滑块模式 */
.slider-mode {
  position: relative;
  height: 400px;
}

.slider-container {
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 16px;
  overflow: hidden;
  background: rgba(0, 0, 0, 0.3);
}

.slider-content {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
}

.slider-left,
.slider-right {
  position: relative;
  overflow: hidden;
}

.slider-left .route-card,
.slider-right .route-card {
  margin: 20px;
  height: calc(100% - 40px);
}

.slider-handle {
  position: absolute;
  top: 0;
  width: 8px;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(212, 165, 116, 0.8), transparent);
  cursor: col-resize;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
}

.slider-arrow {
  font-size: 1.5rem;
  color: var(--color-accent-gold);
  opacity: 0;
  animation: slideArrow 1s ease-in-out infinite;
}

@keyframes slideArrow {
  0%, 100% { opacity: 0.3; }
  50% { opacity: 1; }
}

.slider-input {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 4px;
  opacity: 0;
  cursor: pointer;
}

/* 融合模式 */
.blend-mode {
  position: relative;
  height: 400px;
  perspective: 1000px;
}

.blend-container {
  position: relative;
  width: 100%;
  height: 100%;
}

.blend-layer {
  position: absolute;
  width: 100%;
  height: 100%;
  transition: opacity 0.3s ease;
}

.blend-layer .route-card {
  margin: 20px;
  height: calc(100% - 40px);
}

/* 对比分析 */
.comparison-analysis {
  padding: 20px;
  border-radius: 12px;
  background: rgba(53, 42, 32, 0.6);
  border: 1px solid rgba(212, 165, 116, 0.3);
}

.comparison-analysis h4 {
  margin-bottom: 16px;
  color: var(--color-accent-gold);
}

.analysis-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 16px;
}

.analysis-item {
  display: flex;
  justify-content: space-between;
  padding: 12px;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 8px;
}

.analysis-label {
  color: var(--color-text-secondary);
}

.analysis-value {
  font-weight: 600;
  color: var(--color-accent-gold);
}

.analysis-value.positive {
  color: #00d084;
}

.analysis-value.negative {
  color: #ff6b6b;
}

/* 右侧边栏 */
.right-sidebar {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.social-dynamics,
.policy-info {
  padding: 20px;
  border-radius: 16px;
  max-height: 500px;
  overflow-y: auto;
}

.social-item,
.policy-item {
  margin-bottom: 16px;
}

.social-tag {
  display: inline-block;
  padding: 4px 10px;
  border-radius: 4px;
  font-size: 0.75rem;
  background: rgba(212, 165, 116, 0.2);
  color: var(--color-accent-gold);
  margin-bottom: 8px;
}

.social-text,
.policy-text {
  font-size: 0.9rem;
  color: var(--color-text-secondary);
  line-height: 1.5;
}

.policy-title {
  color: var(--color-accent-gold-light);
  font-size: 0.95rem;
  margin-bottom: 8px;
}

.policy-date {
  display: block;
  font-size: 0.8rem;
  color: var(--color-text-muted);
  margin-top: 8px;
}

/* 底部控制区 */
.comparison-footer {
  display: flex;
  justify-content: space-between;
  gap: 16px;
  padding-top: 24px;
  border-top: 1px solid rgba(212, 165, 116, 0.2);
}

@media (max-width: 1200px) {
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
}

@media (max-width: 768px) {
  .side-by-side {
    grid-template-columns: 1fr;
  }
  
  .comparison-footer {
    flex-direction: column;
  }
}
</style>
