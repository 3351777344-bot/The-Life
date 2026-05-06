<template>
  <div class="conclusion-view">
    <div class="dna-particles-conclusion"></div>
    
    <div class="conclusion-header">
      <div class="header-icon">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" stroke="url(#headerGrad)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <polyline points="22 4 12 14.01 9 11.01" stroke="url(#headerGrad)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <defs>
            <linearGradient id="headerGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#ffd700"/>
              <stop offset="50%" stop-color="#d4a574"/>
              <stop offset="100%" stop-color="#cd7f32"/>
            </linearGradient>
          </defs>
        </svg>
      </div>
      <h1 class="title">归途</h1>
      <p class="subtitle">终局报告 · 回顾你的人生旅程</p>
    </div>

    <div class="conclusion-layout">
      <div class="conclusion-main">
        <div class="regret-index-card glass-card">
          <div class="card-header">
            <h3 class="card-title">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="10"/>
                <path d="M16 16s-1.5-2-4-2-4 2-4 2"/>
                <line x1="9" y1="9" x2="9.01" y2="9"/>
                <line x1="15" y1="9" x2="15.01" y2="9"/>
              </svg>
              后悔指数
            </h3>
          </div>
          <div class="regret-display">
            <div class="regret-number" :class="regretLevelClass">
              {{ regretLevel }}
              <span class="regret-max">/100</span>
            </div>
            <div class="regret-progress">
              <div class="progress-track">
                <div class="progress-fill" :style="{ width: regretLevel + '%', background: regretProgressColor }"></div>
              </div>
              <div class="progress-labels">
                <span>无憾</span>
                <span>微憾</span>
                <span>遗憾</span>
              </div>
            </div>
          </div>
          <p class="regret-text">{{ regretText }}</p>
        </div>

        <div class="ai-advice-card glass-card">
          <div class="card-header">
            <h3 class="card-title">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
              </svg>
              AI 人生建议
            </h3>
          </div>
          <div class="advice-content">
            <p>{{ aiAdvice }}</p>
          </div>
        </div>

        <div class="analysis-card glass-card">
          <div class="card-header">
            <h3 class="card-title">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
              </svg>
              分析摘要
            </h3>
          </div>
          <pre class="analysis-box">{{ regretAnalysis }}</pre>
        </div>
      </div>

      <aside class="conclusion-sidebar">
        <div class="saved-paths-card glass-card">
          <div class="card-header">
            <h3 class="card-title">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/>
              </svg>
              已保存路径
            </h3>
          </div>
          <div class="paths-list">
            <div 
              class="path-item" 
              v-for="(path, index) in displayPaths" 
              :key="path.id || index"
              :style="{ animationDelay: (index * 0.1) + 's' }"
            >
              <span class="path-number">{{ index + 1 }}</span>
              <div class="path-info">
                <span class="path-title">{{ path.title || path.id }}</span>
                <span class="path-date" v-if="path.date">{{ path.date }}</span>
              </div>
            </div>
            <div class="no-paths" v-if="!displayPaths || displayPaths.length === 0">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1">
                <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/>
                <polyline points="13 2 13 9 20 9"/>
              </svg>
              <p>暂无已保存路径</p>
            </div>
          </div>
        </div>

        <div class="stats-card glass-card">
          <div class="card-header">
            <h3 class="card-title">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="18" y1="20" x2="18" y2="10"/>
                <line x1="12" y1="20" x2="12" y2="4"/>
                <line x1="6" y1="20" x2="6" y2="14"/>
              </svg>
              旅程统计
            </h3>
          </div>
          <div class="stats-grid">
            <div class="stat-item">
              <div class="stat-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <polyline points="9 11 12 14 22 4"/>
                  <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>
                </svg>
              </div>
              <div class="stat-value">{{ totalSelections }}</div>
              <div class="stat-label">总选择数</div>
            </div>
            <div class="stat-item">
              <div class="stat-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <circle cx="12" cy="12" r="10"/>
                  <polyline points="12 6 12 12 16 14"/>
                </svg>
              </div>
              <div class="stat-value">{{ explorationTime }}</div>
              <div class="stat-label">探索时长</div>
            </div>
            <div class="stat-item">
              <div class="stat-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                </svg>
              </div>
              <div class="stat-value">{{ achievementsUnlocked }}</div>
              <div class="stat-label">成就解锁</div>
            </div>
            <div class="stat-item">
              <div class="stat-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <polyline points="1 4 1 10 7 10"/>
                  <path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"/>
                </svg>
              </div>
              <div class="stat-value">{{ restartCount }}</div>
              <div class="stat-label">重新开始</div>
            </div>
          </div>
        </div>
      </aside>
    </div>

    <div class="conclusion-footer">
      <button class="btn btn-secondary" @click="$emit('go-to-mentorship')">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
        </svg>
        继续论道
      </button>
      <div class="footer-actions">
        <button class="btn btn-outline" @click="$emit('restart')">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="1 4 1 10 7 10"/>
            <path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"/>
          </svg>
          重新开始
        </button>
        <button class="btn btn-primary" @click="downloadReport">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
            <polyline points="7 10 12 15 17 10"/>
            <line x1="12" y1="15" x2="12" y2="3"/>
          </svg>
          导出报告
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  savedPaths: { type: Array, default: () => [] },
  regretLevel: { type: Number, default: 0 },
  regretText: { type: String, default: '' },
  regretAnalysis: { type: String, default: '' },
  aiAdvice: { type: String, default: '' },
  totalSelections: { type: Number, default: 0 },
  explorationTime: { type: String, default: '0分钟' },
  achievementsUnlocked: { type: Number, default: 0 },
  restartCount: { type: Number, default: 0 }
})

defineEmits(['restart', 'go-to-mentorship'])

const displayPaths = computed(() => {
  if (!props.savedPaths || props.savedPaths.length === 0) return []
  return props.savedPaths.slice(0, 10)
})

const regretLevelClass = computed(() => {
  if (props.regretLevel < 30) return 'level-low'
  if (props.regretLevel < 60) return 'level-medium'
  return 'level-high'
})

const regretProgressColor = computed(() => {
  if (props.regretLevel < 30) return 'linear-gradient(90deg, #00d084, #00a854)'
  if (props.regretLevel < 60) return 'linear-gradient(90deg, #ffbf00, #ff9500)'
  return 'linear-gradient(90deg, #ff6b6b, #ff4444)'
})

const downloadReport = () => {
  const payload = {
    regretLevel: props.regretLevel,
    regretText: props.regretText,
    regretAnalysis: props.regretAnalysis,
    aiAdvice: props.aiAdvice,
    savedPaths: props.savedPaths,
    stats: {
      totalSelections: props.totalSelections,
      explorationTime: props.explorationTime,
      achievementsUnlocked: props.achievementsUnlocked,
      restartCount: props.restartCount
    }
  }
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = 'life_journey_report.json'
  a.click()
  URL.revokeObjectURL(url)
}
</script>

<style scoped>
.conclusion-view {
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 24px;
  background: 
    radial-gradient(ellipse at 20% 20%, rgba(255, 230, 150, 0.1) 0%, transparent 50%),
    radial-gradient(ellipse at 80% 80%, rgba(255, 215, 100, 0.08) 0%, transparent 50%),
    linear-gradient(135deg, #0f0e0d 0%, #1a1510 100%);
}

.dna-particles-conclusion {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 0;
  background: 
    radial-gradient(circle at 10% 30%, rgba(255, 230, 150, 0.06) 0%, transparent 40%),
    radial-gradient(circle at 90% 70%, rgba(255, 215, 100, 0.05) 0%, transparent 40%);
}

.conclusion-header {
  text-align: center;
  padding: 20px 0 30px;
  position: relative;
  z-index: 1;
}

.header-icon {
  width: 60px;
  height: 60px;
  margin: 0 auto 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, rgba(255, 230, 150, 0.25) 0%, rgba(255, 215, 100, 0.15) 100%);
  border: 1px solid rgba(255, 215, 140, 0.5);
  border-radius: 16px;
  box-shadow: 0 0 40px rgba(255, 215, 100, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.15);
}

.conclusion-header .title {
  font-size: 2rem;
  margin: 0 0 8px;
  background: linear-gradient(90deg, #ffe066, #ffd700, #ffe066);
  background-size: 200% 100%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: shimmer 3s ease-in-out infinite;
  font-weight: 800;
  text-shadow: 0 0 30px rgba(255, 230, 150, 0.5);
}

@keyframes shimmer {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}

.subtitle {
  color: var(--color-text-muted);
  font-size: 0.95rem;
  margin: 0;
}

.conclusion-layout {
  display: flex;
  gap: 24px;
  flex: 1;
  position: relative;
  z-index: 1;
}

.conclusion-main {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.glass-card {
  background: linear-gradient(135deg, rgba(255, 248, 235, 0.08) 0%, rgba(255, 230, 150, 0.05) 50%, rgba(255, 215, 100, 0.06) 100%);
  border: 1px solid rgba(255, 215, 140, 0.4);
  border-radius: 16px;
  padding: 24px;
  backdrop-filter: blur(25px);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3), 0 0 40px rgba(255, 215, 100, 0.1);
}

.card-header {
  margin-bottom: 20px;
}

.card-title {
  font-size: 1.1rem;
  color: #ffe066;
  margin: 0;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 10px;
  text-shadow: 0 0 20px rgba(255, 230, 150, 0.5);
}

.card-title svg {
  color: #ffd700;
}

.regret-index-card {
  text-align: center;
}

.regret-display {
  margin: 20px 0;
}

.regret-number {
  font-size: 5rem;
  font-weight: 800;
  line-height: 1;
  margin-bottom: 20px;
  text-shadow: 0 0 40px currentColor;
}

.regret-number.level-low {
  color: #00d084;
  text-shadow: 0 0 50px rgba(0, 208, 132, 0.6);
}

.regret-number.level-medium {
  color: #ffc940;
  text-shadow: 0 0 50px rgba(255, 201, 64, 0.6);
}

.regret-number.level-high {
  color: #ff6b6b;
  text-shadow: 0 0 50px rgba(255, 107, 107, 0.6);
}

.regret-max {
  font-size: 2rem;
  color: var(--color-text-muted);
  font-weight: 400;
}

.regret-progress {
  max-width: 400px;
  margin: 0 auto;
}

.progress-track {
  height: 12px;
  background: rgba(255, 248, 235, 0.1);
  border-radius: 6px;
  overflow: hidden;
  border: 1px solid rgba(255, 215, 140, 0.3);
}

.progress-fill {
  height: 100%;
  border-radius: 6px;
  transition: width 1s ease-out, background 0.5s ease;
  box-shadow: 0 0 20px currentColor;
}

.progress-labels {
  display: flex;
  justify-content: space-between;
  margin-top: 8px;
  font-size: 0.75rem;
  color: var(--color-text-muted);
}

.regret-text {
  color: var(--color-text-secondary);
  font-size: 1rem;
  line-height: 1.6;
  margin: 20px 0 0;
}

.advice-content {
  background: rgba(255, 215, 0, 0.05);
  border: 1px solid rgba(255, 215, 0, 0.1);
  border-radius: 12px;
  padding: 20px;
}

.advice-content p {
  color: var(--color-text-primary);
  font-size: 0.95rem;
  line-height: 1.7;
  margin: 0;
}

.analysis-box {
  background: rgba(15, 14, 13, 0.6);
  border: 1px solid rgba(212, 165, 116, 0.1);
  padding: 20px;
  border-radius: 12px;
  white-space: pre-wrap;
  word-break: break-word;
  color: var(--color-text-secondary);
  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
  font-size: 0.85rem;
  line-height: 1.6;
  max-height: 250px;
  overflow-y: auto;
  margin: 0;
}

.analysis-box::-webkit-scrollbar {
  width: 6px;
}

.analysis-box::-webkit-scrollbar-track {
  background: rgba(53, 42, 32, 0.3);
  border-radius: 3px;
}

.analysis-box::-webkit-scrollbar-thumb {
  background: rgba(212, 165, 116, 0.3);
  border-radius: 3px;
}

.conclusion-sidebar {
  width: 340px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.saved-paths-card {
  flex: 1;
}

.paths-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-height: 300px;
  overflow-y: auto;
}

.paths-list::-webkit-scrollbar {
  width: 6px;
}

.paths-list::-webkit-scrollbar-track {
  background: rgba(53, 42, 32, 0.3);
  border-radius: 3px;
}

.paths-list::-webkit-scrollbar-thumb {
  background: rgba(212, 165, 116, 0.3);
  border-radius: 3px;
}

.path-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px;
  background: rgba(212, 165, 116, 0.05);
  border: 1px solid rgba(212, 165, 116, 0.1);
  border-radius: 10px;
  animation: slide-in 0.4s ease-out backwards;
}

@keyframes slide-in {
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.path-number {
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, rgba(255, 215, 0, 0.2) 0%, rgba(212, 165, 116, 0.1) 100%);
  border-radius: 8px;
  font-size: 0.8rem;
  font-weight: 700;
  color: #ffd700;
}

.path-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.path-title {
  font-size: 0.9rem;
  color: var(--color-text-primary);
  font-weight: 500;
}

.path-date {
  font-size: 0.75rem;
  color: var(--color-text-muted);
}

.no-paths {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px 20px;
  color: var(--color-text-muted);
  text-align: center;
}

.no-paths svg {
  margin-bottom: 12px;
  opacity: 0.5;
}

.no-paths p {
  margin: 0;
  font-size: 0.9rem;
}

.stats-card {
  background: linear-gradient(135deg, rgba(255, 248, 235, 0.08) 0%, rgba(255, 230, 150, 0.05) 50%, rgba(255, 215, 100, 0.06) 100%);
}

.stats-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}

.stat-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px 12px;
  background: rgba(255, 230, 150, 0.08);
  border: 1px solid rgba(255, 215, 140, 0.25);
  border-radius: 12px;
  text-align: center;
  transition: all 0.3s ease;
}

.stat-item:hover {
  background: rgba(255, 230, 150, 0.12);
  border-color: rgba(255, 215, 140, 0.4);
  transform: translateY(-2px);
  box-shadow: 0 0 20px rgba(255, 215, 100, 0.15);
}

.stat-icon {
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, rgba(255, 230, 150, 0.25) 0%, rgba(255, 215, 100, 0.12) 100%);
  border-radius: 12px;
  color: #ffd700;
  margin-bottom: 10px;
  box-shadow: 0 0 15px rgba(255, 215, 100, 0.2);
}

.stat-value {
  font-size: 1.8rem;
  font-weight: 800;
  color: #ffe066;
  text-shadow: 0 0 25px rgba(255, 230, 150, 0.5);
  line-height: 1;
  margin-bottom: 4px;
}

.stat-label {
  font-size: 0.75rem;
  color: var(--color-text-muted);
}

.conclusion-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  margin-top: 20px;
  border-top: 1px solid rgba(212, 165, 116, 0.1);
  position: relative;
  z-index: 1;
}

.conclusion-footer .btn {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 24px;
  font-weight: 600;
}

.footer-actions {
  display: flex;
  gap: 12px;
}

.btn-outline {
  background: transparent;
  border: 1px solid rgba(212, 165, 116, 0.3);
  color: var(--color-text-primary);
}

.btn-outline:hover {
  background: rgba(212, 165, 116, 0.1);
  border-color: rgba(212, 165, 116, 0.5);
}
</style>
