<template>
  <div class="reflection-view">
    <div class="reflection-container">
      <h1 class="title">观心</h1>

      <div class="compass glass-container">
        <div class="compass-center">
          <h2>属性罗盘</h2>
          <p>基于你的选择和经历生成</p>
        </div>
        <div class="compass-directions">
          <div class="direction" v-for="axis in radarAxes" :key="axis.key">
            <div class="direction-icon" :class="axis.key"></div>
            <h3>{{ axis.label }}</h3>
            <div class="attribute-level" :class="getLevelClass(attributes[axis.key])">
              {{ getLevelText(attributes[axis.key]) }}
            </div>
            <div class="attribute-bar">
              <div class="attribute-fill" :style="{ width: attributes[axis.key] + '%' }"></div>
            </div>
            <p class="attribute-narrative">{{ getAttributeNarrative(axis.key, attributes[axis.key]) }}</p>
          </div>
        </div>
      </div>

      <div class="visualization-section glass-container">
        <h3>属性趋势</h3>
        <div class="visualization-options">
          <button class="btn btn-secondary small" @click="$emit('show-radar')">雷达图</button>
          <button class="btn btn-secondary small" @click="$emit('show-trend')">趋势曲线</button>
          <button class="btn btn-secondary small" @click="$emit('show-impact')">影响溯源</button>
        </div>
        <div class="chart-container">
          <div v-if="currentChart === 'radar'" class="radar-chart">
            <svg class="radar-svg" viewBox="0 0 240 240" aria-hidden="true">
              <g class="radar-grid">
                <circle cx="120" cy="120" r="90"></circle>
                <circle cx="120" cy="120" r="60"></circle>
                <circle cx="120" cy="120" r="30"></circle>
              </g>
              <g class="radar-axes">
                <line v-for="(axis, index) in radarAxes" :key="axis.key" :x1="120" :y1="120" :x2="radarAxisPoints[index].x" :y2="radarAxisPoints[index].y"></line>
              </g>
              <polygon class="radar-shape" :points="radarPolygon"></polygon>
              <g class="radar-labels">
                <text v-for="(axis, index) in radarAxes" :key="axis.key" :x="radarAxisPoints[index].lx" :y="radarAxisPoints[index].ly">{{ axis.label }}</text>
              </g>
            </svg>
            <div class="radar-legend">
              <span v-for="axis in radarAxes" :key="axis.key">{{ axis.label }} {{ attributes[axis.key] }}%</span>
            </div>
          </div>
          <div v-else-if="currentChart === 'trend'" class="trend-chart">
            <svg class="trend-svg" viewBox="0 0 440 220" aria-hidden="true">
              <g class="trend-grid">
                <line x1="20" y1="20" x2="20" y2="200"></line>
                <line x1="20" y1="200" x2="420" y2="200"></line>
                <line x1="20" y1="80" x2="420" y2="80"></line>
                <line x1="20" y1="140" x2="420" y2="140"></line>
              </g>
              <path v-for="axis in radarAxes" :key="axis.key" :d="getTrendPath(axis.key)" :class="['trend-line', axis.key]" />
            </svg>
            <div class="trend-legend">
              <span v-for="axis in radarAxes" :key="axis.key" :class="['legend-item', axis.key]">{{ axis.label }}</span>
            </div>
          </div>
          <div v-else-if="currentChart === 'impact'" class="impact-chart">
            <div class="impact-list" v-if="impactHistory.length">
              <div class="impact-item" v-for="impact in impactHistory" :key="impact.id">
                <div class="impact-title">{{ impact.title }}</div>
                <div class="impact-meta">{{ impact.time }}</div>
                <div class="impact-tags">
                  <span v-for="(value, key) in impact.changes" :key="key" :class="['impact-tag', value >= 0 ? 'positive' : 'negative']">{{ axisLabelMap[key] }} {{ value > 0 ? '+' : '' }}{{ value }}</span>
                </div>
              </div>
            </div>
            <p v-else class="impact-empty">尚未生成溯源记录，先选择一条路线。</p>
          </div>
        </div>
      </div>

      <div class="social-sidebar glass-container">
        <h3>天下志</h3>
        <div class="social-item" v-for="item in socialFeed" :key="item.id">
          <span class="source">{{ item.source }}</span>
          <p>{{ item.text }}</p>
          <span class="update-time">{{ item.date }}</span>
        </div>
        <button class="btn btn-secondary small" @click="$emit('refresh-social')">刷新数据</button>
      </div>

      <div class="reflection-controls">
        <button class="btn btn-secondary" @click="$emit('go-to-divergence')">返回</button>
        <button class="btn btn-primary" @click="$emit('go-to-mentorship')">AI顾问</button>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  attributes: { type: Object, required: true },
  attributeHistory: { type: Array, required: true },
  impactHistory: { type: Array, required: true },
  currentChart: { type: String, required: true },
  radarAxes: { type: Array, required: true },
  radarAxisPoints: { type: Array, required: true },
  radarPolygon: { type: String, required: true },
  axisLabelMap: { type: Object, required: true },
  socialFeed: { type: Array, required: true }
})

const emit = defineEmits(['show-radar','show-trend','show-impact','refresh-social','go-to-divergence','go-to-mentorship'])

const getLevelClass = (value) => {
  if (value >= 80) return 'level-high'
  if (value >= 60) return 'level-medium'
  return 'level-low'
}

const getLevelText = (value) => {
  if (value >= 80) return '顶尖'
  if (value >= 60) return '良好'
  if (value >= 40) return '一般'
  return '初级'
}

const getAttributeNarrative = (attribute, value) => {
  const narratives = {
    career: {
      high: '你的职业发展前景广阔，有很大的晋升空间。',
      medium: '你的职业发展稳定，有一定的成长机会。',
      low: '你的职业发展面临挑战，需要更多努力。'
    },
    finance: {
      high: '你的财务状况良好，有足够的储蓄和投资。',
      medium: '你的财务状况稳定，能够满足基本需求。',
      low: '你的财务状况紧张，需要更合理的规划。'
    },
    relationship: {
      high: '你的人际关系和谐，社交网络广泛。',
      medium: '你的人际关系稳定，有几个知心朋友。',
      low: '你的人际关系需要改善，建议主动社交。'
    },
    health: {
      high: '你的健康状态良好，充满活力。',
      medium: '你的健康状态一般，需要注意保养。',
      low: '你的健康状态不佳，建议加强锻炼。'
    },
    growth: {
      high: '你保持持续学习，个人成长迅速。',
      medium: '你有一定的学习意识，能够不断进步。',
      low: '你需要更主动地学习和成长。'
    }
  }
  let level = 'low'
  if (value >= 80) level = 'high'
  else if (value >= 60) level = 'medium'
  return narratives[attribute][level]
}
</script>

<style scoped>
.reflection-container { display:flex; flex-direction:column; gap:16px; }
.compass { display:flex; padding:16px; gap:12px; }
.compass-directions { display:flex; gap:12px; }
.direction { width:160px; }
.visualization-section { padding:12px; }
.social-sidebar { padding:12px; }
</style>
