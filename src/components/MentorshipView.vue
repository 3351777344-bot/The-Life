<template>
  <div class="mentorship-container glass-container">
    <h1 class="title">论道</h1>

    <div class="ai-avatar">
      <div class="avatar-placeholder">
        <div class="avatar-glow"></div>
      </div>
      <h3>{{ currentAIDisplay }}</h3>
      <p>{{ currentAIDescription }}</p>
    </div>

    <div class="chat-container">
      <div class="chat-message ai-message">
        <div class="message-content">
          <p>你好！我是你的专属AI顾问，有什么可以帮助你的吗？</p>
        </div>
      </div>
      <div class="chat-message user-message" v-for="(message, index) in chatMessages" :key="index">
        <div class="message-content">
          <p>{{ message }}</p>
        </div>
      </div>
      <div class="chat-message ai-message" v-if="isGeneratingAIResponse">
        <div class="message-content">
          <div class="loading"></div>
          <p>正在思考...</p>
        </div>
      </div>
    </div>

    <div class="chat-input">
      <input type="text" v-model="localInput" class="input" placeholder="输入你的问题...">
      <button class="btn btn-primary" @click="onSend" :disabled="isGeneratingAIResponse">发送</button>
      <button class="btn btn-secondary" @click="$emit('toggle-voice')">{{ isListening ? '停止语音' : '语音输入' }}</button>
    </div>

    <div class="ai-role-selector">
      <h3>选择AI角色</h3>
      <div class="role-options">
        <button class="btn btn-secondary small" @click="$emit('select-ai-role', '职场导师')">职场导师</button>
        <button class="btn btn-secondary small" @click="$emit('select-ai-role', '情感顾问')">情感顾问</button>
        <button class="btn btn-secondary small" @click="$emit('select-ai-role', '创业前辈')">创业前辈</button>
        <button class="btn btn-secondary small" @click="$emit('select-ai-role', '人生规划师')">人生规划师</button>
      </div>
    </div>

    <div class="mentorship-controls">
      <button class="btn btn-secondary" @click="$emit('go-to-reflection')">返回</button>
      <button class="btn btn-primary" @click="$emit('go-to-conclusion')">终局报告</button>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, computed } from 'vue'

const props = defineProps([
  'chatMessages',
  'isGeneratingAIResponse',
  'chatInput',
  'currentAI角色',
  'currentAIDescription',
  'isListening'
])

const emit = defineEmits(['send-message','select-ai-role','toggle-voice','go-to-reflection','go-to-conclusion'])

const localInput = ref(props.chatInput || '')

watch(() => props.chatInput, (v) => {
  localInput.value = v || ''
})

const onSend = () => {
  const text = String(localInput.value || '').trim()
  if (!text) return
  emit('send-message', text)
  localInput.value = ''
}

const currentAIDisplay = computed(() => props['currentAI角色'] || 'AI顾问')
</script>

<style scoped>
.mentorship-container { padding: 3rem; margin: 0 auto; max-width: 800px; }
.ai-avatar { display:flex; flex-direction:column; align-items:center; margin:2rem 0 }
.avatar-placeholder { width:120px; height:120px; border-radius:50%; background:linear-gradient(135deg,#E2A35A,#F4D08F); position:relative; margin-bottom:1rem }
.avatar-glow { width:100%; height:100%; border-radius:50%; background:rgba(226,163,90,0.3); animation: pulse 2s infinite }
.chat-container { margin:2rem 0; max-height:360px; overflow-y:auto; padding:1rem; background:rgba(230,220,205,0.05); border-radius:12px; display:flex; flex-direction:column }
.chat-message { margin-bottom:1rem; max-width:80% }
.ai-message { align-self:flex-start }
.user-message { align-self:flex-end }
.message-content { padding:1rem; border-radius:12px }
.ai-message .message-content { background:var(--glass-bg); border:1px solid var(--glass-border) }
.user-message .message-content { background:linear-gradient(135deg,#E2A35A,#F4D08F); color:#2C241B }
.chat-input { display:flex; gap:1rem; margin:1.5rem 0 }
.chat-input input { flex:1 }
.role-options { display:flex; gap:1rem; flex-wrap:wrap }
.mentorship-controls { display:flex; justify-content:space-between; margin-top:2rem }
</style>
