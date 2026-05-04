<template>
  <div class="divergence-view">
    <div class="divergence-container glass-container">
      <h1 class="title">衍化</h1>
      <div class="mode-switch">
        <span>AI智能生成</span>
        <div class="toggle" :class="{ active: mode === 'ai' }" @click="$emit('toggle-mode')">
          <div class="toggle-thumb"></div>
        </div>
        <span>玩家自定义</span>
      </div>

      <div class="routes-container" v-if="mode === 'ai'">
        <div class="route-card glass-container" v-for="(route, index) in aiRoutes" :key="index">
          <div class="route-header">
            <h3>{{ route.title }}</h3>
            <div class="route-tag" :class="route.tagColor">{{ route.tag }}</div>
          </div>
          <p class="route-description">{{ route.description }}</p>
          <div class="route-meta">
            <span>可行性: {{ route.feasibility }}%</span>
            <span>难度: {{ route.difficulty }}</span>
            <span>预期收益: {{ route.benefit }}</span>
          </div>
          <div class="route-actions">
            <button class="btn btn-secondary small" @click="$emit('refine-route', index)">细化路线</button>
            <button class="btn btn-secondary small" @click="$emit('replace-route', index)">替换路线</button>
            <button class="btn btn-secondary small" @click="$emit('toggle-compare', route)">{{ compareRoutes.includes(route) ? '取消对比' : '加入对比' }}</button>
            <button class="btn btn-primary small" @click="$emit('select-route', route)">选择路线</button>
          </div>
        </div>
        <button class="btn btn-primary" @click="$emit('generate-ai-routes')" :disabled="isGenerating">{{ isGenerating ? '生成中...' : '重新生成路线' }}</button>
      </div>

      <div class="custom-route" v-else>
        <h3>自定义路线</h3>
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
          <div class="custom-route-card" v-for="(route, index) in customRoutes" :key="route.id">
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

      <div class="multimedia-section" v-if="selectedRoute">
        <h3>多模态素材</h3>
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
          <div class="media-card" v-for="media in generatedMedia" :key="media.id">
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
        <button v-if="compareRoutes.length >= 2" class="btn btn-primary" @click="$emit('go-to-comparison')">🔄 开启双窗对比</button>
        <button class="btn btn-primary" @click="$emit('go-to-reflection')">查看属性</button>
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
.divergence-container { padding: 20px; }
.routes-container { display:flex; flex-direction:column; gap:12px; }
.route-card { padding:12px; }
.custom-route { margin-top:12px; }
</style>
