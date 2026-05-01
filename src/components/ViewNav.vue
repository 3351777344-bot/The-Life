<template>
  <div class="view-nav glass-container">
    <div class="view-step" :class="{ active: currentView === 'genesis' }" @click="$emit('navigate','genesis')">
      <span class="step-index">01</span>
      <div>
        <strong>入局</strong>
        <small>基础建模</small>
      </div>
    </div>
    <div class="view-step" :class="{ active: currentView === 'destiny' }" @click="$emit('navigate','destiny')">
      <span class="step-index">02</span>
      <div>
        <strong>命轨</strong>
        <small>树状分支</small>
      </div>
    </div>
    <div class="view-step" :class="{ active: currentView === 'divergence' }" @click="$emit('navigate','divergence')">
      <span class="step-index">03</span>
      <div>
        <strong>衍化</strong>
        <small>路线生成</small>
      </div>
    </div>
    <div class="view-step" :class="{ active: currentView === 'reflection' }" @click="$emit('navigate','reflection')">
      <span class="step-index">04</span>
      <div>
        <strong>观心</strong>
        <small>属性画像</small>
      </div>
    </div>
    <div class="view-step" :class="{ active: currentView === 'mentorship' }" @click="$emit('navigate','mentorship')">
      <span class="step-index">05</span>
      <div>
        <strong>论道</strong>
        <small>顾问互动</small>
      </div>
    </div>
    <div class="view-step" :class="{ active: currentView === 'conclusion' }" @click="$emit('navigate','conclusion')">
      <span class="step-index">06</span>
      <div>
        <strong>归途</strong>
        <small>终局报告</small>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  currentView: {
    type: String,
    required: true
  }
})
defineEmits(['navigate'])
</script>

<style scoped>
/* 组件内可复用的样式保持与 App.vue 视图一致 */
.view-nav { display: grid; grid-template-columns: repeat(auto-fit, minmax(140px, 1fr)); gap: 1rem; padding: 1rem 1.5rem; margin-bottom: 2rem; border-radius: 18px; background: rgba(255,255,255,0.6); }
.view-step { display:flex; align-items:center; gap:0.8rem; padding:0.8rem 1rem; border-radius:14px; color: rgba(44,36,27,0.65); transition: var(--transition-smooth); cursor: pointer; }
.view-step.active { background: rgba(226,163,90,0.2); color:#2C241B; box-shadow:0 6px 16px rgba(226,163,90,0.25); }
.step-index { width:32px; height:32px; border-radius:12px; background: rgba(44,36,27,0.1); display:grid; place-items:center; font-size:12px; font-weight:600; }
</style>
