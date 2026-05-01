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
.conclusion-root { padding: 1rem }
.summary p { margin: 0.3rem 0 }
.analysis-box { background:#f7f7f7; padding:0.5rem; border-radius:6px; white-space:pre-wrap }
.controls { margin-top:1rem }
.btn { margin-right:0.5rem }
</style>
