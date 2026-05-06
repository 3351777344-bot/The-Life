<template>
  <div class="divergence-view">
    <div class="light-beam beam-1"></div>
    <div class="light-beam beam-2"></div>
    <div class="light-beam beam-3"></div>

    <div class="divergence-container glass-container">
      <div class="beam-accent top-left"></div>
      <div class="beam-accent top-right"></div>

      <div class="divergence-header">
        <div class="header-icon">
          <svg width="36" height="36" viewBox="0 0 24 24" fill="none">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="url(#divGrad)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <defs>
              <linearGradient id="divGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#ffd700"/>
                <stop offset="50%" stop-color="#d4a574"/>
                <stop offset="100%" stop-color="#cd7f32"/>
              </linearGradient>
            </defs>
          </svg>
        </div>
        <h1 class="title">衍化</h1>
        <p class="subtitle">探索命运的无限可能</p>
      </div>

      <div class="mode-switch">
        <span class="mode-label" :class="{ active: mode === 'ai' }">AI智能生成</span>
        <div class="toggle" :class="{ active: mode === 'ai' }" @click="$emit('toggle-mode')">
          <div class="toggle-thumb"></div>
        </div>
        <span class="mode-label" :class="{ active: mode !== 'ai' }">玩家自定义</span>
      </div>

      <div class="routes-container" v-if="mode === 'ai'">
        <div class="route-card glass-card fade-in-up" v-for="(route, index) in aiRoutes" :key="index" :style="{ animationDelay: (index * 0.1) + 's' }">
          <div class="route-glow"></div>
          <div class="route-header">
            <h3>{{ route.title }}</h3>
            <div class="route-tag" :class="route.tagColor">{{ route.tag }}</div>
          </div>
          <p class="route-description">{{ route.description }}</p>
          <div class="route-meta">
            <div class="meta-item">
              <span class="meta-label">可行性</span>
              <div class="meta-bar">
                <div class="meta-fill" :style="{ width: route.feasibility + '%' }"></div>
              </div>
              <span class="meta-value">{{ route.feasibility }}%</span>
            </div>
            <div class="meta-tags">
              <span class="meta-tag difficulty">{{ route.difficulty }}</span>
              <span class="meta-tag benefit">{{ route.benefit }}</span>
            </div>
          </div>
          <div class="route-actions">
            <button class="btn btn-secondary small" @click="$emit('refine-route', index)">细化路线</button>
            <button class="btn btn-secondary small" @click="$emit('replace-route', index)">替换路线</button>
            <button class="btn btn-secondary small" :class="{ selected: compareRoutes.includes(route) }" @click="$emit('toggle-compare', route)">{{ compareRoutes.includes(route) ? '取消对比' : '加入对比' }}</button>
            <button class="btn btn-primary small" @click="$emit('select-route', route)">选择路线</button>
          </div>
        </div>
        <button class="btn btn-primary generate-btn" @click="$emit('generate-ai-routes')" :disabled="isGenerating">
          <span class="btn-glow"></span>
          {{ isGenerating ? '生成中...' : '重新生成路线' }}
        </button>
      </div>

      <div class="custom-route" v-else>
        <div class="custom-route-header">
          <h3>自定义路线</h3>
        </div>
        <div class="form-row">
          <div class="form-group">
            <label>路线名称</label>
            <input type="text" v-model="localCustom.title" class="input" placeholder="路线名称">
          </div>
          <div class="form-group">
            <label>可行性</label>
            <input type="number" v-model="localCustom.feasibility" class="input" placeholder="0-100%">
          </div>
        </div>
        <div class="form-row">
          <div class="form-group">
            <label>难度</label>
            <select v-model="localCustom.difficulty" class="input">
              <option value="">请选择</option>
              <option value="低">低</option>
              <option value="中等">中等</option>
              <option value="高">高</option>
            </select>
          </div>
          <div class="form-group">
            <label>预期收益</label>
            <select v-model="localCustom.benefit" class="input">
              <option value="">请选择</option>
              <option value="低">低</option>
              <option value="中等">中等</option>
              <option value="高">高</option>
              <option value="极高">极高</option>
            </select>
          </div>
        </div>
        <div class="form-group full-width">
          <label>路线描述</label>
          <textarea v-model="localCustom.description" class="input" rows="3" placeholder="路线描述"></textarea>
        </div>
        <div class="form-group full-width">
          <label>上传规划文档</label>
          <input type="file" class="input" @change="$emit('file-upload', $event)">
        </div>
        <button class="btn btn-primary" @click="$emit('add-custom-route', localCustom)">添加路线</button>
        <div class="custom-route-list" v-if="customRoutes.length">
          <h4>我的路线</h4>
          <div class="custom-route-card glass-card" v-for="(route, index) in customRoutes" :key="route.id">
            <div class="custom-route-main">
              <div>
                <strong>{{ route.title }}</strong>
                <p>{{ route.description }}</p>
              </div>
              <div class="custom-route-meta">
                <span>可行性 {{ route.feasibility }}%</span>
                <span>难度 {{ route.difficulty }}</span>
                <span>收益 {{ route.benefit }}</span>
              </div>
            </div>
            <div class="custom-route-actions">
              <button class="btn btn-secondary small" @click="$emit('select-route', route)">选择</button>
              <button class="btn btn-secondary small" @click="$emit('remove-custom-route', index)">删除</button>
            </div>
          </div>
        </div>
      </div>

      <div class="multimedia-section glass-card" v-if="selectedRoute">
        <div class="multimedia-header">
          <h3>多模态素材</h3>
        </div>
        <div class="multimedia-options">
          <button class="btn btn-secondary" @click="$emit('generate-comic')">生成漫画</button>
          <button class="btn btn-secondary" @click="$emit('generate-video')">生成短视频</button>
          <button class="btn btn-secondary" @click="$emit('generate-poster')">生成海报</button>
        </div>
        <div class="style-selector">
          <label>风格选择</label>
          <select v-model="localStyle" class="input">
            <option value="治愈">治愈</option>
            <option value="写实">写实</option>
            <option value="科幻">科幻</option>
          </select>
        </div>
        <div class="media-gallery" v-if="generatedMedia.length">
          <div class="media-card glass-card" v-for="media in generatedMedia" :key="media.id">
            <div class="media-thumb" :class="media.type"></div>
            <div class="media-info">
              <strong>{{ media.title }}</strong>
              <p>{{ media.description }}</p>
              <span>{{ media.time }}</span>
            </div>
          </div>
        </div>
      </div>

      <div class="divergence-controls">
        <button class="btn btn-secondary" @click="$emit('go-to-destiny')">返回</button>
        <button v-if="compareRoutes.length >= 2" class="btn btn-primary" @click="$emit('go-to-comparison')">
          <span class="btn-icon">🔄</span>开启双窗对比
        </button>
        <button class="btn btn-primary" @click="$emit('go-to-reflection')">
          <span class="btn-icon">📊</span>查看属性
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, toRefs, watch } from 'vue'
defineProps({
  aiRoutes: { type: Array, required: true },
  isGenerating: { type: Boolean, required: true },
  compareRoutes: { type: Array, required: true },
  customRoutes: { type: Array, required: true },
  selectedRoute: { type: Object, required: false },
  generatedMedia: { type: Array, required: true },
  mode: { type: String, required: true }
})

const emit = defineEmits(['generate-ai-routes','refine-route','replace-route','toggle-compare','select-route','add-custom-route','remove-custom-route','file-upload','generate-comic','generate-video','generate-poster','go-to-destiny','go-to-comparison','go-to-reflection','toggle-mode'])

const localCustom = reactive({ title: '', description: '', feasibility: '', difficulty: '', benefit: '' })
const localStyle = reactive('治愈')

watch(() => localCustom, (v) => {}, { deep: true })
</script>

<style scoped>
.divergence-view {
  min-height: 100vh;
  padding: 24px;
  position: relative;
  overflow: hidden;
}

.divergence-container {
  max-width: 1200px;
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
  background: linear-gradient(270deg, transparent, rgba(212, 165, 116, 0.15), rgba(255, 215, 100, 0.25), rgba(212, 165, 116, 0.15), transparent);
  animation: beam-flow 10s linear infinite;
  opacity: 0.5;
}

.beam-1 { animation-delay: 0s; top: 10%; }
.beam-2 { animation-delay: -3.3s; top: 40%; opacity: 0.3; }
.beam-3 { animation-delay: -6.6s; top: 70%; opacity: 0.2; }

@keyframes beam-flow {
  0% { transform: translateX(-50%) skewX(-15deg); opacity: 0; }
  10% { opacity: 0.5; }
  90% { opacity: 0.5; }
  100% { transform: translateX(50%) skewX(-15deg); opacity: 0; }
}

.beam-accent {
  position: absolute;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  pointer-events: none;
  filter: blur(40px);
  opacity: 0.4;
}

.beam-accent.top-left {
  top: -20px;
  left: -20px;
  background: radial-gradient(circle, rgba(255, 215, 100, 0.6) 0%, transparent 70%);
}

.beam-accent.top-right {
  top: -20px;
  right: -20px;
  background: radial-gradient(circle, rgba(212, 165, 116, 0.6) 0%, transparent 70%);
}

.divergence-header {
  text-align: center;
  margin-bottom: 32px;
  position: relative;
}

.header-icon {
  margin-bottom: 16px;
  animation: float-gentle 4s ease-in-out infinite;
}

.divergence-header .title {
  font-size: 2.5rem;
  font-weight: 700;
  background: linear-gradient(135deg, #ffd700, #d4a574, #cd7f32);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 8px;
}

.divergence-header .subtitle {
  color: var(--color-text-secondary);
  font-size: 1rem;
  letter-spacing: 0.1em;
}

.mode-switch {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  margin-bottom: 32px;
  padding: 16px 24px;
  background: var(--glass-bg);
  border-radius: 50px;
  border: 1px solid var(--glass-border);
}

.mode-label {
  font-size: 0.9rem;
  color: var(--color-text-muted);
  transition: all 0.3s ease;
}

.mode-label.active {
  color: var(--color-accent-gold);
  font-weight: 600;
}

.toggle {
  width: 56px;
  height: 28px;
  background: rgba(212, 165, 116, 0.2);
  border-radius: 14px;
  cursor: pointer;
  position: relative;
  transition: all 0.3s ease;
  border: 1px solid var(--glass-border);
}

.toggle.active {
  background: rgba(212, 165, 116, 0.5);
}

.toggle-thumb {
  position: absolute;
  top: 3px;
  left: 3px;
  width: 20px;
  height: 20px;
  background: linear-gradient(135deg, #d4a574, #ffd700);
  border-radius: 50%;
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
}

.toggle.active .toggle-thumb {
  left: 31px;
}

.routes-container {
  display: flex;
  flex-direction: column;
  gap: 20px;
  position: relative;
  z-index: 1;
}

.route-card {
  padding: 24px;
  position: relative;
  overflow: hidden;
  border: 1px solid var(--glass-border);
  transition: all 0.4s ease;
}

.route-card:hover {
  border-color: var(--glass-border-hover);
  transform: translateY(-4px);
  box-shadow: var(--glass-shadow-glow);
}

.route-glow {
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle at center, rgba(212, 165, 116, 0.1) 0%, transparent 50%);
  opacity: 0;
  transition: opacity 0.4s ease;
  pointer-events: none;
}

.route-card:hover .route-glow {
  opacity: 1;
}

.route-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
}

.route-header h3 {
  font-size: 1.3rem;
  color: var(--color-accent-gold-light);
}

.route-tag {
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 600;
  background: rgba(212, 165, 116, 0.2);
  color: var(--color-accent-gold);
}

.route-description {
  color: var(--color-text-secondary);
  margin-bottom: 20px;
  line-height: 1.6;
}

.route-meta {
  background: rgba(0, 0, 0, 0.2);
  padding: 16px;
  border-radius: 12px;
  margin-bottom: 20px;
}

.meta-item {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 12px;
}

.meta-label {
  min-width: 56px;
  color: var(--color-text-secondary);
  font-size: 0.9rem;
}

.meta-bar {
  flex: 1;
  height: 6px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 3px;
  overflow: hidden;
}

.meta-fill {
  height: 100%;
  background: linear-gradient(90deg, #d4a574, #ffd700);
  transition: width 0.6s ease;
  border-radius: 3px;
}

.meta-value {
  min-width: 40px;
  text-align: right;
  color: var(--color-accent-gold);
  font-weight: 600;
  font-size: 0.9rem;
}

.meta-tags {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.meta-tag {
  padding: 4px 12px;
  border-radius: 6px;
  font-size: 0.8rem;
  background: rgba(212, 165, 116, 0.15);
  color: var(--color-text-secondary);
}

.meta-tag.difficulty {
  background: rgba(255, 191, 0, 0.15);
  color: #ffbf00;
}

.meta-tag.benefit {
  background: rgba(0, 208, 132, 0.15);
  color: #00d084;
}

.route-actions {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.route-actions .btn {
  flex: 1;
  min-width: 100px;
}

.route-actions .btn.selected {
  background: rgba(212, 165, 116, 0.3);
  border-color: var(--color-accent-gold);
}

.generate-btn {
  position: relative;
  overflow: hidden;
  margin-top: 16px;
}

.btn-glow {
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
  animation: shimmer 3s linear infinite;
}

.custom-route {
  margin-top: 24px;
  position: relative;
  z-index: 1;
}

.custom-route-header {
  margin-bottom: 20px;
}

.custom-route-header h3 {
  font-size: 1.4rem;
  color: var(--color-accent-gold);
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  margin-bottom: 16px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.form-group label {
  font-size: 0.9rem;
  color: var(--color-text-secondary);
}

.form-group.full-width {
  grid-column: 1 / -1;
}

.custom-route-list {
  margin-top: 24px;
}

.custom-route-list h4 {
  font-size: 1.1rem;
  color: var(--color-accent-gold);
  margin-bottom: 16px;
}

.custom-route-card {
  padding: 16px;
  margin-bottom: 12px;
}

.custom-route-main {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 12px;
}

.custom-route-main strong {
  display: block;
  color: var(--color-text-primary);
  margin-bottom: 4px;
}

.custom-route-main p {
  color: var(--color-text-secondary);
  font-size: 0.9rem;
}

.custom-route-meta {
  display: flex;
  gap: 12px;
  font-size: 0.8rem;
  color: var(--color-text-muted);
}

.custom-route-actions {
  display: flex;
  gap: 8px;
}

.multimedia-section {
  margin-top: 32px;
  padding: 24px;
  position: relative;
  z-index: 1;
}

.multimedia-header {
  margin-bottom: 20px;
}

.multimedia-header h3 {
  font-size: 1.3rem;
  color: var(--color-accent-gold);
}

.multimedia-options {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  margin-bottom: 20px;
}

.style-selector {
  margin-bottom: 20px;
}

.style-selector label {
  display: block;
  margin-bottom: 8px;
  color: var(--color-text-secondary);
}

.media-gallery {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 16px;
}

.media-card {
  padding: 12px;
}

.media-thumb {
  height: 100px;
  background: rgba(212, 165, 116, 0.1);
  border-radius: 8px;
  margin-bottom: 8px;
}

.media-thumb.comic { background: linear-gradient(135deg, rgba(255, 191, 0, 0.2), rgba(255, 107, 107, 0.2)); }
.media-thumb.video { background: linear-gradient(135deg, rgba(0, 208, 132, 0.2), rgba(74, 158, 255, 0.2)); }
.media-thumb.poster { background: linear-gradient(135deg, rgba(212, 165, 116, 0.2), rgba(205, 127, 50, 0.2)); }

.media-info strong {
  display: block;
  color: var(--color-text-primary);
  font-size: 0.95rem;
  margin-bottom: 4px;
}

.media-info p {
  color: var(--color-text-secondary);
  font-size: 0.8rem;
  margin-bottom: 4px;
}

.media-info span {
  color: var(--color-text-muted);
  font-size: 0.75rem;
}

.divergence-controls {
  display: flex;
  justify-content: center;
  gap: 16px;
  margin-top: 32px;
  padding-top: 24px;
  border-top: 1px solid var(--glass-border);
  position: relative;
  z-index: 1;
}

.divergence-controls .btn {
  min-width: 140px;
}

.btn-icon {
  margin-right: 6px;
}

@keyframes shimmer {
  0% { left: -100%; }
  100% { left: 100%; }
}

@keyframes float-gentle {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-8px); }
}

.fade-in-up {
  animation: fadeInUp 0.6s ease-out forwards;
  opacity: 0;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 768px) {
  .divergence-view {
    padding: 12px;
  }

  .divergence-container {
    padding: 20px;
  }

  .divergence-header .title {
    font-size: 1.8rem;
  }

  .form-row {
    grid-template-columns: 1fr;
  }

  .route-actions {
    flex-direction: column;
  }

  .route-actions .btn {
    width: 100%;
  }

  .divergence-controls {
    flex-direction: column;
  }

  .divergence-controls .btn {
    width: 100%;
  }
}
</style>
