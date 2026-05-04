<template>
  <div class="conclusion-root">
    <h1>归途 · 终局报告</h1>
    <div class="summary">
      <p><strong>后悔指数：</strong> {{ regretLevel }} / 100</p>
      <p><strong>简评：</strong> {{ regretText }}</p>
      <p><strong>AI 建议：</strong> {{ aiAdvice }}</p>
    </div>

    <div class="analysis">
      <h3>分析摘要</h3>
      <pre class="analysis-box">{{ regretAnalysis }}</pre>
    </div>

    <div class="saved-paths">
      <h3>已保存路径</h3>
      <ul>
        <li v-for="p in savedPaths" :key="p.id">{{ p.title || p.id }}</li>
        <li v-if="!savedPaths || savedPaths.length===0">暂无已保存路径</li>
      </ul>
    </div>

    <div class="controls">
      <button class="btn" @click="$emit('restart')">重新开始</button>
      <button class="btn" @click="downloadReport">导出报告</button>
    </div>
  </div>
</template>

<script setup>
import { toRefs } from 'vue'
const props = defineProps({
  savedPaths: { type: Array, default: () => [] },
  regretLevel: { type: Number, default: 0 },
  regretText: { type: String, default: '' },
  regretAnalysis: { type: String, default: '' },
  aiAdvice: { type: String, default: '' }
})

const { savedPaths: _saved } = toRefs(props)

const downloadReport = () => {
  const payload = {
    regretLevel: props.regretLevel,
    regretText: props.regretText,
    regretAnalysis: props.regretAnalysis,
    aiAdvice: props.aiAdvice,
    savedPaths: props.savedPaths
  }
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = 'conclusion_report.json'
  a.click()
  URL.revokeObjectURL(url)
}
</script>

<style scoped>
.conclusion-root {
  padding: 24px;
  background: linear-gradient(135deg, rgba(15, 14, 13, 0.98) 0%, rgba(20, 18, 15, 0.96) 100%);
  min-height: 100vh;
  border-radius: 16px;
}

.conclusion-root h1 {
  font-size: 2rem;
  margin: 0 0 24px 0;
  background: linear-gradient(135deg, var(--color-accent-gold) 0%, var(--color-accent-gold-bright) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-shadow: none;
  font-weight: 800;
}

.summary {
  background: rgba(212, 165, 116, 0.08);
  border: 1px solid var(--glass-border);
  border-radius: 12px;
  padding: 16px;
  margin-bottom: 24px;
  backdrop-filter: blur(10px);
}

.summary p {
  margin: 8px 0;
  color: var(--color-text-primary);
  font-size: 0.95rem;
  line-height: 1.5;
}

.summary strong {
  color: var(--color-accent-gold-bright);
  font-weight: 700;
}

.analysis {
  background: rgba(53, 42, 32, 0.4);
  border: 1px solid var(--glass-border);
  border-radius: 12px;
  padding: 16px;
  margin-bottom: 24px;
  backdrop-filter: blur(10px);
}

.analysis h3 {
  margin: 0 0 12px 0;
  color: var(--color-accent-gold);
  font-size: 1.1rem;
  font-weight: 700;
}

.analysis-box {
  background: rgba(15, 14, 13, 0.6);
  border: 1px solid var(--glass-border);
  padding: 14px;
  border-radius: 8px;
  white-space: pre-wrap;
  word-break: break-word;
  color: var(--color-text-secondary);
  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
  font-size: 0.85rem;
  line-height: 1.5;
  max-height: 400px;
  overflow-y: auto;
}

.saved-paths {
  background: rgba(212, 165, 116, 0.08);
  border: 1px solid var(--glass-border);
  border-radius: 12px;
  padding: 16px;
  margin-bottom: 24px;
  backdrop-filter: blur(10px);
}

.saved-paths h3 {
  margin: 0 0 12px 0;
  color: var(--color-accent-gold);
  font-size: 1.1rem;
  font-weight: 700;
}

.saved-paths ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.saved-paths li {
  padding: 8px 12px;
  margin: 6px 0;
  background: rgba(53, 42, 32, 0.3);
  border-left: 3px solid var(--color-accent-gold);
  border-radius: 4px;
  color: var(--color-text-secondary);
  font-size: 0.9rem;
}

.controls {
  display: flex;
  gap: 12px;
  margin-top: 24px;
  padding-top: 12px;
  border-top: 1px solid var(--glass-border);
}

.controls .btn {
  flex: 1;
  padding: 10px 16px;
  font-size: 0.95rem;
  font-weight: 600;
}
</style>
