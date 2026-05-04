<template>
  <div class="view-nav glass-container">
    <div class="nav-track">
      <div
        v-for="(step, index) in steps"
        :key="step.id"
        class="view-step"
        :class="{ active: currentView === step.id, completed: isCompleted(step.id) }"
        @click="$emit('navigate', step.id)"
      >
        <div class="step-connector" v-if="index > 0"></div>
        <div class="step-orb">
          <span class="step-index">{{ String(index + 1).padStart(2, '0') }}</span>
          <div class="step-glow"></div>
        </div>
        <div class="step-content">
          <strong>{{ step.title }}</strong>
          <small>{{ step.subtitle }}</small>
        </div>
        <div class="step-particles">
          <span class="particle" v-for="n in 3" :key="n"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  currentView: {
    type: String,
    required: true
  }
})
defineEmits(['navigate'])

const steps = [
  { id: 'genesis', title: '入局', subtitle: '基础建模' },
  { id: 'destiny', title: '命轨', subtitle: '树状分支' },
  { id: 'divergence', title: '衍化', subtitle: '路线生成' },
  { id: 'comparison', title: '对比', subtitle: '双窗分析' },
  { id: 'reflection', title: '观心', subtitle: '属性画像' },
  { id: 'mentorship', title: '论道', subtitle: '顾问互动' },
  { id: 'conclusion', title: '归途', subtitle: '终局报告' }
]

const viewOrder = ['genesis', 'destiny', 'divergence', 'comparison', 'reflection', 'mentorship', 'conclusion']

const isCompleted = (stepId) => {
  const currentIndex = viewOrder.indexOf(props.currentView)
  const stepIndex = viewOrder.indexOf(stepId)
  return stepIndex < currentIndex
}
</script>

<style scoped>
.view-nav {
  padding: 1.5rem 2rem;
  margin-bottom: 3rem;
  overflow-x: auto;
}

.nav-track {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  min-width: max-content;
}

.view-step {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 1.5rem;
  border-radius: 20px;
  color: var(--color-text-muted);
  transition: var(--transition-smooth);
  cursor: pointer;
  position: relative;
  min-width: 140px;
}

.view-step:hover {
  color: var(--color-text-secondary);
  background: var(--glass-bg);
}

.view-step.active {
  color: var(--color-text-primary);
  background: linear-gradient(135deg, rgba(212, 165, 116, 0.25), rgba(205, 127, 50, 0.15), rgba(184, 134, 11, 0.1));
  box-shadow: 0 0 50px rgba(212, 165, 116, 0.4), 0 8px 24px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 215, 140, 0.2);
  transform: translateY(-2px);
}

.view-step.active .step-orb {
  background: linear-gradient(135deg, var(--color-accent-gold), var(--color-accent-gold-light), var(--color-accent-copper));
  background-size: 200% 200%;
  box-shadow: 0 0 40px rgba(212, 165, 116, 0.8), 0 0 80px rgba(212, 165, 116, 0.4);
  animation: gradient-shift 3s ease infinite;
}

.view-step.active .step-index {
  color: #1a1510;
  font-weight: 900;
  text-shadow: 0 0 10px rgba(255, 215, 140, 0.8);
}

.view-step.active .step-glow {
  opacity: 1;
  animation: pulse-glow 1.8s ease-in-out infinite;
}

.view-step.completed .step-orb {
  background: linear-gradient(135deg, var(--color-accent-copper), var(--color-accent-gold), var(--color-accent-gold-light));
  box-shadow: 0 0 25px rgba(205, 127, 50, 0.5);
}

.view-step.completed .step-index {
  color: #1a1510;
  text-shadow: 0 0 5px rgba(255, 215, 140, 0.6);
}

.step-connector {
  position: absolute;
  left: -0.5rem;
  width: 1rem;
  height: 3px;
  background: linear-gradient(90deg, transparent, rgba(212, 165, 116, 0.5), transparent);
  z-index: 0;
  box-shadow: 0 0 10px rgba(212, 165, 116, 0.3);
}

.step-orb {
  width: 52px;
  height: 52px;
  border-radius: 18px;
  background: linear-gradient(135deg, rgba(212, 165, 116, 0.15), rgba(53, 42, 32, 0.6));
  border: 2px solid var(--glass-border);
  display: grid;
  place-items: center;
  position: relative;
  transition: var(--transition-bounce);
  flex-shrink: 0;
  backdrop-filter: blur(10px);
}

.step-orb:hover {
  transform: scale(1.15) rotate(8deg);
  box-shadow: 0 0 25px rgba(212, 165, 116, 0.4);
}

.step-index {
  font-size: 15px;
  font-weight: 800;
  color: var(--color-text-secondary);
  z-index: 1;
  transition: var(--transition-smooth);
}

.step-glow {
  position: absolute;
  inset: -6px;
  border-radius: 24px;
  background: linear-gradient(135deg, var(--color-accent-gold), var(--color-accent-gold-light), transparent);
  opacity: 0;
  z-index: -1;
  filter: blur(10px);
}

@keyframes pulse-glow {
  0%, 100% { opacity: 0.5; transform: scale(1); }
  50% { opacity: 0.8; transform: scale(1.1); }
}

@keyframes gradient-shift {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}

.step-content {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.step-content strong {
  font-family: var(--font-display);
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: 1px;
}

.step-content small {
  font-size: 0.75rem;
  opacity: 0.7;
}

.step-particles {
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  gap: 4px;
}

.step-particles .particle {
  width: 3px;
  height: 3px;
  border-radius: 50%;
  background: var(--color-accent-cyan);
  opacity: 0;
  animation: none;
}

.view-step.active .step-particles .particle {
  opacity: 0.6;
  animation: particle-twinkle 2s ease-in-out infinite;
}

.view-step.active .step-particles .particle:nth-child(2) {
  animation-delay: 0.3s;
}

.view-step.active .step-particles .particle:nth-child(3) {
  animation-delay: 0.6s;
}

@keyframes particle-twinkle {
  0%, 100% { opacity: 0.3; transform: scale(1); }
  50% { opacity: 0.8; transform: scale(1.5); }
}

@media (max-width: 768px) {
  .view-nav {
    padding: 1rem;
  }

  .view-step {
    padding: 0.75rem 1rem;
    min-width: 100px;
  }

  .step-orb {
    width: 40px;
    height: 40px;
    border-radius: 12px;
  }

  .step-content strong {
    font-size: 0.9rem;
  }
}
</style>
