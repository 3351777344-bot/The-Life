<template>
  <div v-if="true" class="genesis-view">
    <div class="scroll-form glass-container fade-in">
      <h1 class="title">人生基础建模</h1>
      <div class="form-section">
        <h2>基础信息</h2>
        <div class="form-row">
          <div class="form-group">
            <label>年龄</label>
            <input type="number" v-model="local.age" class="input" placeholder="请输入年龄">
          </div>
          <div class="form-group">
            <label>学历</label>
            <select v-model="local.education" class="input">
              <option value="">请选择学历</option>
              <option value="high school">高中</option>
              <option value="college">大专</option>
              <option value="bachelor">本科</option>
              <option value="master">硕士</option>
              <option value="phd">博士</option>
            </select>
          </div>
        </div>
        <div class="form-row">
          <div class="form-group">
            <label>职业</label>
            <input type="text" v-model="local.occupation" class="input" placeholder="请输入职业">
          </div>
          <div class="form-group">
            <label>城市</label>
            <input type="text" v-model="local.city" class="input" placeholder="请输入城市">
          </div>
        </div>
        <div class="form-row">
          <div class="form-group">
            <label>月收入</label>
            <input type="number" v-model="local.income" class="input" placeholder="请输入月收入">
          </div>
          <div class="form-group">
            <label>家庭状况</label>
            <select v-model="local.family" class="input">
              <option value="">请选择</option>
              <option value="single">单身</option>
              <option value="married">已婚</option>
              <option value="married_with_children">已婚有子女</option>
            </select>
          </div>
        </div>
        <div class="form-row">
          <div class="form-group">
            <label>核心技能</label>
            <input type="text" v-model="local.skills" class="input" placeholder="请输入核心技能">
          </div>
          <div class="form-group">
            <label>可投入成本</label>
            <input type="number" v-model="local.investment" class="input" placeholder="请输入可投入成本">
          </div>
        </div>
      </div>

      <div class="form-section">
        <h2>人格与偏好建模</h2>
        <div class="form-row">
          <div class="form-group">
            <label>风险偏好</label>
            <select v-model="local.riskPreference" class="input">
              <option value="">请选择</option>
              <option value="risk-averse">风险规避</option>
              <option value="moderate">平衡型</option>
              <option value="risk-seeking">风险偏好</option>
            </select>
          </div>
          <div class="form-group">
            <label>延迟满足能力</label>
            <select v-model="local.delayGratification" class="input">
              <option value="">请选择</option>
              <option value="low">低</option>
              <option value="medium">中</option>
              <option value="high">高</option>
            </select>
          </div>
        </div>
        <div class="form-row">
          <div class="form-group">
            <label>抗压能力</label>
            <select v-model="local.stressResistance" class="input">
              <option value="">请选择</option>
              <option value="low">低</option>
              <option value="medium">中</option>
              <option value="high">高</option>
            </select>
          </div>
          <div class="form-group">
            <label>决策风格</label>
            <select v-model="local.decisionStyle" class="input">
              <option value="">请选择</option>
              <option value="analytical">分析型</option>
              <option value="intuitive">直觉型</option>
              <option value="collaborative">协作型</option>
            </select>
          </div>
        </div>
        <div class="form-row">
          <div class="form-group full-width">
            <label>人生目标</label>
            <textarea v-model="local.lifeGoals" class="input" rows="3" placeholder="请输入短期和长期人生目标"></textarea>
          </div>
        </div>
      </div>

      <div class="form-section">
        <h2>情境化测评</h2>
        <div class="card-flip" @click="$emit('flip-card')">
          <div class="card-front glass-container">
            <h3>{{ currentScenario.scenario }}</h3>
            <p>点击卡片查看选项</p>
          </div>
          <div class="card-back glass-container" v-if="isCardFlipped">
            <div class="option" v-for="(option, index) in currentScenario.options" :key="index" @click="$emit('select-option', option.style)">
              <span>{{ option.text }}</span>
              <small>{{ option.style }}</small>
            </div>
          </div>
        </div>
        <button class="btn btn-secondary" @click="$emit('fetch-scenario')">生成新场景</button>
        <button class="btn btn-secondary" @click="$emit('skip-scenario')">跳过使用默认模型</button>
      </div>

      <div class="privacy-section">
        <div class="seal">
          <span>数据安全承诺</span>
          <p>我们将对您的个人信息进行脱敏加密处理，严格遵守《个人信息保护法》</p>
          <div class="privacy-actions">
            <button class="btn btn-secondary small" @click="$emit('mark-edit')">修改信息</button>
            <button class="btn btn-secondary small" @click="$emit('clear')">删除数据</button>
            <button class="btn btn-secondary small" @click="$emit('backup')">本地备份</button>
          </div>
        </div>
      </div>

      <button class="btn btn-primary" @click="$emit('start-destiny')">开始探索</button>
    </div>
  </div>
</template>

<script setup>
import { reactive, watch } from 'vue'
const props = defineProps(['userInfo','isCardFlipped','currentScenario','statusMessage'])
const emit = defineEmits(['update:userInfo','fetch-scenario','flip-card','select-option','skip-scenario','mark-edit','backup','clear','start-destiny'])

const local = reactive({ ...props.userInfo })

watch(() => props.userInfo, (nv) => {
  Object.assign(local, nv || {})
}, { deep: true })

watch(local, (nv) => {
  emit('update:userInfo', { ...nv })
}, { deep: true })
</script>

<style scoped>
/* 组件可复用的样式依赖全局样式，局部微调 */
.genesis-view { display:flex; justify-content:center; }
.scroll-form { width: 100%; max-width: 920px; padding: 24px; }
.form-section { margin-bottom: 18px; }
.form-row { display:flex; gap:12px; margin-top:12px; }
.form-group { flex:1; }
.full-width { flex:1 1 100%; }
</style>
