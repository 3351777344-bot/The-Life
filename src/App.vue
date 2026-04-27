<template>
  <div class="app">
    <!-- 星空背景 -->
    <div ref="starfield" class="starfield"></div>
    
    <!-- 主内容区域 -->
    <div class="main-content">
      <!-- 入局：人生基础建模界面 -->
      <div v-if="currentView === 'genesis'" class="genesis-view">
        <div class="scroll-form glass-container fade-in">
          <h1 class="title">人生基础建模</h1>
          
          <!-- 基础信息采集 -->
          <div class="form-section">
            <h2>基础信息</h2>
            <div class="form-row">
              <div class="form-group">
                <label>年龄</label>
                <input type="number" v-model="userInfo.age" class="input" placeholder="请输入年龄">
              </div>
              <div class="form-group">
                <label>学历</label>
                <select v-model="userInfo.education" class="input">
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
                <input type="text" v-model="userInfo.occupation" class="input" placeholder="请输入职业">
              </div>
              <div class="form-group">
                <label>城市</label>
                <input type="text" v-model="userInfo.city" class="input" placeholder="请输入城市">
              </div>
            </div>
            <div class="form-row">
              <div class="form-group">
                <label>月收入</label>
                <input type="number" v-model="userInfo.income" class="input" placeholder="请输入月收入">
              </div>
              <div class="form-group">
                <label>家庭状况</label>
                <select v-model="userInfo.family" class="input">
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
                <input type="text" v-model="userInfo.skills" class="input" placeholder="请输入核心技能">
              </div>
              <div class="form-group">
                <label>可投入成本</label>
                <input type="number" v-model="userInfo.investment" class="input" placeholder="请输入可投入成本">
              </div>
            </div>
          </div>
          
          <!-- 人格与偏好建模 -->
          <div class="form-section">
            <h2>人格与偏好建模</h2>
            <div class="form-row">
              <div class="form-group">
                <label>风险偏好</label>
                <select v-model="userInfo.riskPreference" class="input">
                  <option value="">请选择</option>
                  <option value="risk-averse">风险规避</option>
                  <option value="moderate">平衡型</option>
                  <option value="risk-seeking">风险偏好</option>
                </select>
              </div>
              <div class="form-group">
                <label>延迟满足能力</label>
                <select v-model="userInfo.delayGratification" class="input">
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
                <select v-model="userInfo.stressResistance" class="input">
                  <option value="">请选择</option>
                  <option value="low">低</option>
                  <option value="medium">中</option>
                  <option value="high">高</option>
                </select>
              </div>
              <div class="form-group">
                <label>决策风格</label>
                <select v-model="userInfo.decisionStyle" class="input">
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
                <textarea v-model="userInfo.lifeGoals" class="input" rows="3" placeholder="请输入短期和长期人生目标"></textarea>
              </div>
            </div>
          </div>
          
          <!-- 情境化测评 -->
          <div class="form-section">
            <h2>情境化测评</h2>
            <div class="card-flip" @click="flipCard">
              <div class="card-front glass-container">
                <h3>{{ currentScenario.scenario }}</h3>
                <p>点击卡片查看选项</p>
              </div>
              <div class="card-back glass-container" v-if="isCardFlipped">
                <div class="option" v-for="(option, index) in currentScenario.options" :key="index" @click="selectOption(option.style)">
                  <span>{{ option.text }}</span>
                  <small>{{ option.style }}</small>
                </div>
              </div>
            </div>
            <button class="btn btn-secondary" @click="fetchScenario">生成新场景</button>
            <button class="btn btn-secondary" @click="skipScenario">跳过使用默认模型</button>
          </div>
          
          <!-- 数据安全 -->
          <div class="privacy-section">
            <div class="seal">
              <span>数据安全承诺</span>
              <p>我们将对您的个人信息进行脱敏加密处理，严格遵守《个人信息保护法》</p>
              <div class="privacy-actions">
                <button class="btn btn-secondary small">修改信息</button>
                <button class="btn btn-secondary small">删除数据</button>
                <button class="btn btn-secondary small">本地备份</button>
              </div>
            </div>
          </div>
          
          <button class="btn btn-primary" @click="goToDestinyTree">开始探索</button>
        </div>
      </div>
      
      <!-- 命轨：动态树状节点主界面 -->
      <div v-else-if="currentView === 'destiny'" class="destiny-view">
        <div class="tree-container">
          <div class="tree-header">
            <h1 class="title">命轨</h1>
            <p>你的人生轨迹</p>
            <div class="tree-actions">
              <button class="btn btn-secondary small" @click="addNode">添加节点</button>
              <button class="btn btn-secondary small" @click="exportTree">导出图谱</button>
              <button class="btn btn-secondary small" @click="resetTree">重置树状图</button>
            </div>
          </div>
          
          <div class="tree-canvas" ref="treeCanvas">
            <!-- 3D树状结构将在这里渲染 -->
            <div class="tree-nodes">
              <!-- 主节点 -->
              <div class="node main-node" :class="{ active: selectedNode === 'current' }" @click="selectNode('current')">
                <div class="node-content">
                  <h3>{{ treeNodes.find(n => n.id === 'current')?.title }}</h3>
                  <p>{{ treeNodes.find(n => n.id === 'current')?.description }}</p>
                  <div class="node-actions">
                    <button class="btn btn-secondary small" @click="editNode('current')">编辑</button>
                    <button class="btn btn-secondary small" @click="deleteNode('current')">删除</button>
                    <button class="btn btn-secondary small" @click="extendBranch('current')">延伸分支</button>
                  </div>
                </div>
              </div>
              
              <!-- 一级子节点 - 水平布局 -->
              <div class="first-level-children">
                <div v-for="childId in treeNodes.find(n => n.id === 'current')?.children" :key="childId" class="node branch-node" :class="{ active: selectedNode === childId }" @click="selectNode(childId)">
                  <div class="node-content">
                    <h3>{{ treeNodes.find(n => n.id === childId)?.title }}</h3>
                    <p>{{ treeNodes.find(n => n.id === childId)?.description }}</p>
                    <div class="node-actions">
                      <button class="btn btn-secondary small" @click="editNode(childId)">编辑</button>
                      <button class="btn btn-secondary small" @click="deleteNode(childId)">删除</button>
                      <button class="btn btn-secondary small" @click="extendBranch(childId)">延伸分支</button>
                    </div>
                  </div>
                  
                  <!-- 二级子节点 -->
                  <div v-if="treeNodes.find(n => n.id === childId)?.children && treeNodes.find(n => n.id === childId)?.children.length > 0" class="second-level-children">
                    <div v-for="grandchildId in treeNodes.find(n => n.id === childId)?.children" :key="grandchildId" class="node branch-node small-node" :class="{ active: selectedNode === grandchildId }" @click="selectNode(grandchildId)">
                      <div class="node-content">
                        <h3>{{ treeNodes.find(n => n.id === grandchildId)?.title }}</h3>
                        <p>{{ treeNodes.find(n => n.id === grandchildId)?.description }}</p>
                        <div class="node-actions">
                          <button class="btn btn-secondary small" @click="editNode(grandchildId)">编辑</button>
                          <button class="btn btn-secondary small" @click="deleteNode(grandchildId)">删除</button>
                          <button class="btn btn-secondary small" @click="extendBranch(grandchildId)">延伸分支</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div class="tree-controls">
            <button class="btn btn-secondary" @click="goToGenesis">返回</button>
            <button class="btn btn-primary" @click="goToDivergence">衍生路线</button>
          </div>
        </div>
      </div>
      
      <!-- 衍化：双模式分支生成与多模态展现 -->
      <div v-else-if="currentView === 'divergence'" class="divergence-view">
        <div class="divergence-container glass-container">
          <h1 class="title">衍化</h1>
          
          <div class="mode-switch">
            <span>AI智能生成</span>
            <div class="toggle" :class="{ active: mode === 'ai' }" @click="toggleMode">
              <div class="toggle-thumb"></div>
            </div>
            <span>玩家自定义</span>
          </div>
          
          <div class="routes-container" v-if="mode === 'ai'">
            <div class="route-card glass-container" v-for="(route, index) in aiRoutes" :key="index">
              <div class="route-header">
                <h3>{{ route.title }}</h3>
                <div class="route-tag" :class="route.tagColor">
                  {{ route.tag }}
                </div>
              </div>
              <p class="route-description">{{ route.description }}</p>
              <div class="route-meta">
                <span>可行性: {{ route.feasibility }}%</span>
                <span>难度: {{ route.difficulty }}</span>
                <span>预期收益: {{ route.benefit }}</span>
              </div>
              <div class="route-actions">
                <button class="btn btn-secondary small" @click="refineRoute(index)">细化路线</button>
                <button class="btn btn-secondary small" @click="replaceRoute(index)">替换路线</button>
                <button class="btn btn-primary small" @click="selectRoute(route)">选择路线</button>
              </div>
            </div>
            <button class="btn btn-primary" @click="generateAIRoutes" :disabled="isGenerating">
              {{ isGenerating ? '生成中...' : '重新生成路线' }}
            </button>
          </div>
          
          <div class="custom-route" v-else>
            <h3>自定义路线</h3>
            <div class="form-row">
              <div class="form-group">
                <label>路线名称</label>
                <input type="text" v-model="customRoute.title" class="input" placeholder="路线名称">
              </div>
              <div class="form-group">
                <label>可行性</label>
                <input type="number" v-model="customRoute.feasibility" class="input" placeholder="0-100%">
              </div>
            </div>
            <div class="form-row">
              <div class="form-group">
                <label>难度</label>
                <select v-model="customRoute.difficulty" class="input">
                  <option value="">请选择</option>
                  <option value="低">低</option>
                  <option value="中等">中等</option>
                  <option value="高">高</option>
                </select>
              </div>
              <div class="form-group">
                <label>预期收益</label>
                <select v-model="customRoute.benefit" class="input">
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
              <textarea v-model="customRoute.description" class="input" rows="3" placeholder="路线描述"></textarea>
            </div>
            <div class="form-group full-width">
              <label>上传规划文档</label>
              <input type="file" class="input" @change="handleFileUpload">
            </div>
            <button class="btn btn-primary" @click="addCustomRoute">添加路线</button>
          </div>
          
          <!-- 多模态素材生成 -->
          <div class="multimedia-section" v-if="selectedRoute">
            <h3>多模态素材</h3>
            <div class="multimedia-options">
              <button class="btn btn-secondary" @click="generateComic">生成漫画</button>
              <button class="btn btn-secondary" @click="generateVideo">生成短视频</button>
              <button class="btn btn-secondary" @click="generatePoster">生成海报</button>
            </div>
            <div class="style-selector">
              <label>风格选择</label>
              <select v-model="contentStyle" class="input">
                <option value="治愈">治愈</option>
                <option value="写实">写实</option>
                <option value="科幻">科幻</option>
              </select>
            </div>
          </div>
          
          <div class="divergence-controls">
            <button class="btn btn-secondary" @click="goToDestinyTree">返回</button>
            <button class="btn btn-primary" @click="goToReflection">查看属性</button>
          </div>
        </div>
      </div>
      
      <!-- 观心：动态属性数值与社会联动面板 -->
      <div v-else-if="currentView === 'reflection'" class="reflection-view">
        <div class="reflection-container">
          <h1 class="title">观心</h1>
          
          <div class="compass glass-container">
            <div class="compass-center">
              <h2>属性罗盘</h2>
              <p>基于你的选择和经历生成</p>
            </div>
            <div class="compass-directions">
              <div class="direction">
                <div class="direction-icon career"></div>
                <h3>职业发展</h3>
                <div class="attribute-level" :class="getLevelClass(attributes.career)">
                  {{ getLevelText(attributes.career) }}
                </div>
                <div class="attribute-bar">
                  <div class="attribute-fill" :style="{ width: attributes.career + '%' }"></div>
                </div>
                <p class="attribute-narrative">{{ getAttributeNarrative('career', attributes.career) }}</p>
              </div>
              <div class="direction">
                <div class="direction-icon finance"></div>
                <h3>财务状况</h3>
                <div class="attribute-level" :class="getLevelClass(attributes.finance)">
                  {{ getLevelText(attributes.finance) }}
                </div>
                <div class="attribute-bar">
                  <div class="attribute-fill" :style="{ width: attributes.finance + '%' }"></div>
                </div>
                <p class="attribute-narrative">{{ getAttributeNarrative('finance', attributes.finance) }}</p>
              </div>
              <div class="direction">
                <div class="direction-icon relationship"></div>
                <h3>人际关系</h3>
                <div class="attribute-level" :class="getLevelClass(attributes.relationship)">
                  {{ getLevelText(attributes.relationship) }}
                </div>
                <div class="attribute-bar">
                  <div class="attribute-fill" :style="{ width: attributes.relationship + '%' }"></div>
                </div>
                <p class="attribute-narrative">{{ getAttributeNarrative('relationship', attributes.relationship) }}</p>
              </div>
              <div class="direction">
                <div class="direction-icon health"></div>
                <h3>健康状态</h3>
                <div class="attribute-level" :class="getLevelClass(attributes.health)">
                  {{ getLevelText(attributes.health) }}
                </div>
                <div class="attribute-bar">
                  <div class="attribute-fill" :style="{ width: attributes.health + '%' }"></div>
                </div>
                <p class="attribute-narrative">{{ getAttributeNarrative('health', attributes.health) }}</p>
              </div>
              <div class="direction">
                <div class="direction-icon growth"></div>
                <h3>个人成长</h3>
                <div class="attribute-level" :class="getLevelClass(attributes.growth)">
                  {{ getLevelText(attributes.growth) }}
                </div>
                <div class="attribute-bar">
                  <div class="attribute-fill" :style="{ width: attributes.growth + '%' }"></div>
                </div>
                <p class="attribute-narrative">{{ getAttributeNarrative('growth', attributes.growth) }}</p>
              </div>
            </div>
          </div>
          
          <!-- 可视化展示 -->
          <div class="visualization-section glass-container">
            <h3>属性趋势</h3>
            <div class="visualization-options">
              <button class="btn btn-secondary small" @click="showRadarChart">雷达图</button>
              <button class="btn btn-secondary small" @click="showTrendChart">趋势曲线</button>
              <button class="btn btn-secondary small" @click="showImpactTrace">影响溯源</button>
            </div>
            <div class="chart-container">
              <!-- 图表将在这里渲染 -->
              <div v-if="currentChart === 'radar'" class="radar-chart">
                <p>雷达图可视化</p>
              </div>
              <div v-else-if="currentChart === 'trend'" class="trend-chart">
                <p>趋势曲线可视化</p>
              </div>
              <div v-else-if="currentChart === 'impact'" class="impact-chart">
                <p>影响溯源可视化</p>
              </div>
            </div>
          </div>
          
          <div class="social-sidebar glass-container">
            <h3>天下志</h3>
            <div class="social-item">
              <span class="source">国家统计局</span>
              <p>2026年第一季度GDP增长4.5%</p>
              <span class="update-time">2026-04-27</span>
            </div>
            <div class="social-item">
              <span class="source">教育部</span>
              <p>2026年研究生招生计划公布</p>
              <span class="update-time">2026-04-25</span>
            </div>
            <div class="social-item">
              <span class="source">人社部</span>
              <p>2026年平均工资水平上涨5.2%</p>
              <span class="update-time">2026-04-20</span>
            </div>
            <div class="social-item">
              <span class="source">住建部</span>
              <p>2026年全国房价走势分析</p>
              <span class="update-time">2026-04-18</span>
            </div>
            <button class="btn btn-secondary small" @click="refreshSocialData">刷新数据</button>
          </div>
          
          <div class="reflection-controls">
            <button class="btn btn-secondary" @click="goToDivergence">返回</button>
            <button class="btn btn-primary" @click="goToMentorship">AI顾问</button>
          </div>
        </div>
      </div>
      
      <!-- 论道：AI形象互动问答 -->
      <div v-else-if="currentView === 'mentorship'" class="mentorship-view">
        <div class="mentorship-container glass-container">
          <h1 class="title">论道</h1>
          
          <div class="ai-avatar">
            <div class="avatar-placeholder">
              <div class="avatar-glow"></div>
            </div>
            <h3>{{ currentAI角色 }}</h3>
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
            <input type="text" v-model="chatInput" class="input" placeholder="输入你的问题...">
            <button class="btn btn-primary" @click="sendMessage" :disabled="isGeneratingAIResponse">发送</button>
            <button class="btn btn-secondary" @click="toggleVoiceInput">语音输入</button>
          </div>
          
          <div class="ai-role-selector">
            <h3>选择AI角色</h3>
            <div class="role-options">
              <button class="btn btn-secondary small" @click="selectAIRole('职场导师')">职场导师</button>
              <button class="btn btn-secondary small" @click="selectAIRole('情感顾问')">情感顾问</button>
              <button class="btn btn-secondary small" @click="selectAIRole('创业前辈')">创业前辈</button>
              <button class="btn btn-secondary small" @click="selectAIRole('人生规划师')">人生规划师</button>
            </div>
          </div>
          
          <div class="mentorship-controls">
            <button class="btn btn-secondary" @click="goToReflection">返回</button>
            <button class="btn btn-primary" @click="goToConclusion">终局报告</button>
          </div>
        </div>
      </div>
      
      <!-- 归途：终局报告与人生存档 -->
      <div v-else-if="currentView === 'conclusion'" class="conclusion-view">
        <div class="scroll-report glass-container">
          <h1 class="title">归途</h1>
          
          <div class="regret-meter">
            <h2>后悔值评级</h2>
            <div class="regret-bar">
              <div class="regret-fill" :style="{ width: regretLevel + '%' }"></div>
            </div>
            <p class="regret-text">{{ regretText }}</p>
            <p class="regret-analysis">{{ regretAnalysis }}</p>
          </div>
          
          <div class="report-content">
            <h3>终局报告</h3>
            <div class="attribute-comparison">
              <div class="attribute-item">
                <span>职业发展</span>
                <div class="attribute-bar">
                  <div class="attribute-fill" :style="{ width: attributes.career + '%' }"></div>
                </div>
                <span class="attribute-level">{{ getLevelText(attributes.career) }}</span>
              </div>
              <div class="attribute-item">
                <span>财务状况</span>
                <div class="attribute-bar">
                  <div class="attribute-fill" :style="{ width: attributes.finance + '%' }"></div>
                </div>
                <span class="attribute-level">{{ getLevelText(attributes.finance) }}</span>
              </div>
              <div class="attribute-item">
                <span>人际关系</span>
                <div class="attribute-bar">
                  <div class="attribute-fill" :style="{ width: attributes.relationship + '%' }"></div>
                </div>
                <span class="attribute-level">{{ getLevelText(attributes.relationship) }}</span>
              </div>
              <div class="attribute-item">
                <span>健康状态</span>
                <div class="attribute-bar">
                  <div class="attribute-fill" :style="{ width: attributes.health + '%' }"></div>
                </div>
                <span class="attribute-level">{{ getLevelText(attributes.health) }}</span>
              </div>
              <div class="attribute-item">
                <span>个人成长</span>
                <div class="attribute-bar">
                  <div class="attribute-fill" :style="{ width: attributes.growth + '%' }"></div>
                </div>
                <span class="attribute-level">{{ getLevelText(attributes.growth) }}</span>
              </div>
            </div>
            
            <div class="ai-advice">
              <h4>AI定制人生建议</h4>
              <p>{{ aiAdvice }}</p>
            </div>
            
            <div class="future-letter">
              <h4>来自未来时空的信件</h4>
              <p>亲爱的自己：</p>
              <p>当你看到这封信时，你已经走过了一段不平凡的人生旅程。无论你现在处于何种状态，请记住，每一个选择都塑造了今天的你。不要后悔过去的决定，因为它们都是你成长的一部分。</p>
              <p>未来的路还很长，保持初心，勇敢前行。</p>
              <p>未来的你</p>
            </div>
          </div>
          
          <!-- 名人模拟 -->
          <div class="celebrity-simulation">
            <h3>名人模拟</h3>
            <p>代入名人关键人生节点，生成平行人生并与真实轨迹对比</p>
            <div class="celebrity-options">
              <button class="btn btn-secondary small" @click="simulateCelebrity('马云')">马云</button>
              <button class="btn btn-secondary small" @click="simulateCelebrity('任正非')">任正非</button>
              <button class="btn btn-secondary small" @click="simulateCelebrity('比尔·盖茨')">比尔·盖茨</button>
              <button class="btn btn-secondary small" @click="simulateCelebrity('乔布斯')">乔布斯</button>
            </div>
          </div>
          
          <div class="save-section">
            <h3>人生存档</h3>
            <div class="save-actions">
              <button class="btn btn-primary" @click="saveCurrentPath">保存当前轨迹</button>
              <button class="btn btn-secondary" @click="loadSavedPath">加载存档</button>
              <button class="btn btn-secondary" @click="exportReport">导出报告</button>
            </div>
            <div class="saved-paths">
              <h4>已保存的轨迹</h4>
              <div class="saved-path-item" v-for="(path, index) in savedPaths" :key="index">
                <span>{{ path.name }}</span>
                <span>{{ path.date }}</span>
                <button class="btn btn-secondary small" @click="loadPath(index)">加载</button>
              </div>
            </div>
          </div>
          
          <div class="conclusion-controls">
            <button class="btn btn-secondary" @click="goToMentorship">返回</button>
            <button class="btn btn-primary" @click="goToGenesis">重新开始</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import * as THREE from 'three'
import { generateRoute, getAIAdvice, generateScenario, calculateRegret } from './services/ollamaService'

// 状态管理
const currentView = ref('genesis')
const userInfo = ref({
  age: '',
  education: '',
  occupation: '',
  city: '',
  income: '',
  family: '',
  skills: '',
  investment: '',
  riskPreference: '',
  delayGratification: '',
  stressResistance: '',
  decisionStyle: '',
  lifeGoals: ''
})
const isCardFlipped = ref(false)
const selectedNode = ref('current')
const mode = ref('ai')
const customRoute = ref({ 
  title: '', 
  description: '',
  feasibility: '',
  difficulty: '',
  benefit: ''
})
const attributes = ref({
  career: 75,
  finance: 65,
  relationship: 80,
  health: 70,
  growth: 85
})
const chatInput = ref('')
const chatMessages = ref([])
const regretLevel = ref(30)
const regretText = ref('略有遗憾')
const regretAnalysis = ref('你的人生路径整体较为平衡，虽然有些小的遗憾，但总体方向正确。')
const aiAdvice = ref('基于你的人生轨迹分析，建议你在未来的发展中注重平衡职业与健康，同时保持持续学习的态度。在做出重要决策时，多考虑长期影响而非短期利益。')

// 新增状态
const currentScenario = ref({
  scenario: '你突然获得了10万元的意外收入，你会如何处理？',
  options: [
    {
      text: '存入银行，作为紧急储备金',
      style: '风险规避型'
    },
    {
      text: '投资基金，追求稳健增长',
      style: '平衡型'
    },
    {
      text: '投资股票，追求高回报',
      style: '风险偏好型'
    },
    {
      text: '用于学习或提升技能',
      style: '成长型'
    }
  ]
})

const aiRoutes = ref([
  {
    title: '技术专家路线',
    description: '专注于技术领域，通过持续学习和项目经验积累，成为行业专家。',
    tag: '高可行性',
    tagColor: 'success',
    feasibility: 85,
    difficulty: '中等',
    benefit: '高'
  },
  {
    title: '管理路线',
    description: '转向管理岗位，培养领导力和团队协作能力。',
    tag: '中等风险',
    tagColor: 'important',
    feasibility: 70,
    difficulty: '中等',
    benefit: '中高'
  },
  {
    title: '创业路线',
    description: '自主创业，追求个人理想和财务自由。',
    tag: '高风险',
    tagColor: 'warning',
    feasibility: 45,
    difficulty: '高',
    benefit: '极高'
  }
])

const isGenerating = ref(false)
const selectedRoute = ref(null)
const contentStyle = ref('治愈')
const currentChart = ref('radar')
const currentAI角色 = ref('职场导师')
const currentAIDescription = ref('拥有丰富的职场经验，能够为你提供职业发展建议')
const isGeneratingAIResponse = ref(false)
const savedPaths = ref([
  {
    name: '职业发展路线',
    date: '2026-04-20'
  },
  {
    name: '创业路线',
    date: '2026-04-15'
  }
])

// 视图切换
const goToDestinyTree = () => {
  // 更新当前状态节点的描述
  const currentNode = treeNodes.value.find(node => node.id === 'current')
  if (currentNode) {
    if (userInfo.value.age && userInfo.value.occupation) {
      currentNode.description = `${userInfo.value.age}岁，${userInfo.value.occupation}`
    } else if (userInfo.value.age) {
      currentNode.description = `${userInfo.value.age}岁`
    } else if (userInfo.value.occupation) {
      currentNode.description = userInfo.value.occupation
    } else {
      currentNode.description = '请填写基础信息'
    }
  }
  currentView.value = 'destiny'
}

const goToDivergence = () => {
  currentView.value = 'divergence'
}

const goToReflection = () => {
  currentView.value = 'reflection'
}

const goToMentorship = () => {
  currentView.value = 'mentorship'
}

const goToConclusion = async () => {
  // 计算后悔值
  const result = await calculateRegret({
    userInfo: userInfo.value,
    attributes: attributes.value,
    routes: aiRoutes.value
  })
  regretLevel.value = result.regretLevel || 30
  regretText.value = result.regretText || '略有遗憾'
  regretAnalysis.value = result.analysis || '你的人生路径整体较为平衡，虽然有些小的遗憾，但总体方向正确。'
  aiAdvice.value = result.advice || '基于你的人生轨迹分析，建议你在未来的发展中注重平衡职业与健康，同时保持持续学习的态度。'
  currentView.value = 'conclusion'
}

const goToGenesis = () => {
  currentView.value = 'genesis'
}

// 交互方法
const flipCard = () => {
  isCardFlipped.value = !isCardFlipped.value
}

const selectOption = (option) => {
  console.log('Selected option:', option)
  userInfo.value.decisionStyle = option
  isCardFlipped.value = false
}

const selectNode = (node) => {
  selectedNode.value = node
}

const toggleMode = () => {
  mode.value = mode.value === 'ai' ? 'custom' : 'ai'
}

const sendMessage = async () => {
  if (chatInput.value.trim()) {
    chatMessages.value.push(chatInput.value)
    const message = chatInput.value
    chatInput.value = ''
    isGeneratingAIResponse.value = true
    
    try {
      const response = await getAIAdvice(message, {
        userInfo: userInfo.value,
        currentRole: currentAI角色.value
      })
      chatMessages.value.push(response)
    } catch (error) {
      chatMessages.value.push('感谢你的问题，我会认真思考并给你最适合的建议。')
    } finally {
      isGeneratingAIResponse.value = false
    }
  }
}

// 新增方法
const fetchScenario = async () => {
  try {
    const result = await generateScenario(userInfo.value)
    currentScenario.value = result
  } catch (error) {
    console.error('Error generating scenario:', error)
  }
}

const skipScenario = () => {
  // 使用默认模型
  console.log('Using default model')
}

// 树状节点数据
const treeNodes = ref([
  {
    id: 'current',
    title: '当前状态',
    description: '请填写基础信息',
    children: ['career', 'education', 'relationship']
  },
  {
    id: 'career',
    title: '职业发展',
    description: '晋升机会',
    parent: 'current',
    children: []
  },
  {
    id: 'education',
    title: '继续教育',
    description: '深造学习',
    parent: 'current',
    children: []
  },
  {
    id: 'relationship',
    title: '人际关系',
    description: '社交拓展',
    parent: 'current',
    children: []
  }
])

const addNode = () => {
  const newNode = {
    id: `node_${Date.now()}`,
    title: '新节点',
    description: '请编辑节点内容',
    parent: selectedNode.value,
    children: []
  }
  treeNodes.value.push(newNode)
  const parentNode = treeNodes.value.find(node => node.id === selectedNode.value)
  if (parentNode) {
    parentNode.children.push(newNode.id)
  }
  selectedNode.value = newNode.id
  console.log('Added new node:', newNode)
}

const exportTree = () => {
  const treeData = JSON.stringify(treeNodes.value, null, 2)
  const blob = new Blob([treeData], { type: 'application/json' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = 'life_tree.json'
  a.click()
  URL.revokeObjectURL(url)
  console.log('Exported tree data')
}

const resetTree = () => {
  treeNodes.value = [
    {
      id: 'current',
      title: '当前状态',
      description: `${userInfo.value.age}岁，${userInfo.value.occupation}`,
      children: ['career', 'education', 'relationship']
    },
    {
      id: 'career',
      title: '职业发展',
      description: '晋升机会',
      parent: 'current',
      children: []
    },
    {
      id: 'education',
      title: '继续教育',
      description: '深造学习',
      parent: 'current',
      children: []
    },
    {
      id: 'relationship',
      title: '人际关系',
      description: '社交拓展',
      parent: 'current',
      children: []
    }
  ]
  selectedNode.value = 'current'
  console.log('Reset tree to initial state')
}

const editNode = (nodeId) => {
  const newTitle = prompt('请输入节点标题:', treeNodes.value.find(n => n.id === nodeId)?.title)
  const newDescription = prompt('请输入节点描述:', treeNodes.value.find(n => n.id === nodeId)?.description)
  if (newTitle) {
    const node = treeNodes.value.find(n => n.id === nodeId)
    if (node) {
      node.title = newTitle
      if (newDescription) {
        node.description = newDescription
      }
      console.log('Edited node:', nodeId)
    }
  }
}

const deleteNode = (nodeId) => {
  if (nodeId === 'current') {
    alert('不能删除当前状态节点')
    return
  }
  
  // 移除子节点
  const removeChildren = (id) => {
    const node = treeNodes.value.find(n => n.id === id)
    if (node?.children) {
      node.children.forEach(childId => {
        removeChildren(childId)
      })
    }
    const index = treeNodes.value.findIndex(n => n.id === id)
    if (index > -1) {
      treeNodes.value.splice(index, 1)
    }
  }
  
  // 从父节点中移除
  const node = treeNodes.value.find(n => n.id === nodeId)
  if (node?.parent) {
    const parentNode = treeNodes.value.find(n => n.id === node.parent)
    if (parentNode) {
      parentNode.children = parentNode.children.filter(id => id !== nodeId)
    }
  }
  
  removeChildren(nodeId)
  selectedNode.value = 'current'
  console.log('Deleted node:', nodeId)
}

const extendBranch = (nodeId) => {
  // 生成2-5个分支选项
  const branchCount = Math.floor(Math.random() * 4) + 2
  for (let i = 0; i < branchCount; i++) {
    const newNode = {
      id: `branch_${Date.now()}_${i}`,
      title: `分支 ${i + 1}`,
      description: `分支描述 ${i + 1}`,
      parent: nodeId,
      children: []
    }
    treeNodes.value.push(newNode)
    const parentNode = treeNodes.value.find(node => node.id === nodeId)
    if (parentNode) {
      parentNode.children.push(newNode.id)
    }
  }
  console.log('Extended branch:', nodeId)
}

const generateAIRoutes = async () => {
  isGenerating.value = true
  try {
    const result = await generateRoute(userInfo.value, '人生分岔路选择')
    if (result.routes) {
      aiRoutes.value = result.routes.map(route => ({
        ...route,
        tag: route.feasibility > 70 ? '高可行性' : route.feasibility > 40 ? '中等可行性' : '低可行性',
        tagColor: route.feasibility > 70 ? 'success' : route.feasibility > 40 ? 'important' : 'warning'
      }))
    }
  } catch (error) {
    console.error('Error generating routes:', error)
  } finally {
    isGenerating.value = false
  }
}

const refineRoute = (index) => {
  console.log('Refining route:', index)
  // 实现细化路线逻辑
}

const replaceRoute = (index) => {
  console.log('Replacing route:', index)
  // 实现替换路线逻辑
}

const selectRoute = (route) => {
  selectedRoute.value = route
  // 模拟路径选择后的属性变化
  const attributeChanges = {
    career: Math.floor(Math.random() * 20) - 5,
    finance: Math.floor(Math.random() * 20) - 5,
    relationship: Math.floor(Math.random() * 20) - 5,
    health: Math.floor(Math.random() * 20) - 5,
    growth: Math.floor(Math.random() * 20) - 5
  }
  
  // 更新属性
  Object.keys(attributeChanges).forEach(key => {
    attributes.value[key] = Math.max(0, Math.min(100, attributes.value[key] + attributeChanges[key]))
  })
  
  console.log('Selected route:', route)
  console.log('Attribute changes:', attributeChanges)
  console.log('Updated attributes:', attributes.value)
}

const addCustomRoute = () => {
  console.log('Adding custom route:', customRoute.value)
  // 实现添加自定义路线逻辑
}

const handleFileUpload = (event) => {
  const file = event.target.files[0]
  console.log('Uploaded file:', file)
  // 实现文件上传处理逻辑
}

const generateComic = () => {
  console.log('Generating comic with style:', contentStyle.value)
  // 实现生成漫画逻辑
}

const generateVideo = () => {
  console.log('Generating video with style:', contentStyle.value)
  // 实现生成短视频逻辑
}

const generatePoster = () => {
  console.log('Generating poster with style:', contentStyle.value)
  // 实现生成海报逻辑
}

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

const showRadarChart = () => {
  currentChart.value = 'radar'
}

const showTrendChart = () => {
  currentChart.value = 'trend'
}

const showImpactTrace = () => {
  currentChart.value = 'impact'
}

const refreshSocialData = () => {
  console.log('Refreshing social data')
  // 实现刷新社会数据逻辑
}

const toggleVoiceInput = () => {
  console.log('Toggling voice input')
  // 实现语音输入逻辑
}

const selectAIRole = (role) => {
  currentAI角色.value = role
  const descriptions = {
    '职场导师': '拥有丰富的职场经验，能够为你提供职业发展建议',
    '情感顾问': '擅长人际关系和情感问题分析，给予心理支持',
    '创业前辈': '有成功创业经验，能够分享创业心得和建议',
    '人生规划师': '专注于人生规划和目标设定，帮助你找到人生方向'
  }
  currentAIDescription.value = descriptions[role]
}

const saveCurrentPath = () => {
  const newPath = {
    name: `人生轨迹_${new Date().toISOString().split('T')[0]}`,
    date: new Date().toISOString().split('T')[0]
  }
  savedPaths.value.push(newPath)
  console.log('Saved current path:', newPath)
}

const loadSavedPath = () => {
  console.log('Loading saved path')
  // 实现加载存档逻辑
}

const loadPath = (index) => {
  console.log('Loading path:', index)
  // 实现加载指定存档逻辑
}

const exportReport = () => {
  console.log('Exporting report')
  // 实现导出报告逻辑
}

const simulateCelebrity = (celebrity) => {
  console.log('Simulating celebrity:', celebrity)
  // 实现名人模拟逻辑
}

// 星空背景
const starfield = ref(null)
let scene, camera, renderer, stars

const initStarfield = () => {
  scene = new THREE.Scene()
  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
  renderer = new THREE.WebGLRenderer({ alpha: true })
  renderer.setSize(window.innerWidth, window.innerHeight)
  starfield.value.appendChild(renderer.domElement)
  
  // 创建星星
  stars = new THREE.Group()
  scene.add(stars)
  
  for (let i = 0; i < 1000; i++) {
    const geometry = new THREE.SphereGeometry(0.05, 8, 8)
    const material = new THREE.MeshBasicMaterial({ color: 0xffffff })
    const star = new THREE.Mesh(geometry, material)
    
    star.position.x = (Math.random() - 0.5) * 100
    star.position.y = (Math.random() - 0.5) * 100
    star.position.z = (Math.random() - 0.5) * 100
    
    stars.add(star)
  }
  
  camera.position.z = 30
  
  animate()
}

const animate = () => {
  requestAnimationFrame(animate)
  
  stars.rotation.x += 0.0005
  stars.rotation.y += 0.0005
  
  renderer.render(scene, camera)
}

const handleResize = () => {
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()
  renderer.setSize(window.innerWidth, window.innerHeight)
}

onMounted(() => {
  initStarfield()
  window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
  renderer.dispose()
})
</script>

<style scoped>
.app {
  min-height: 100vh;
  position: relative;
}

.main-content {
  position: relative;
  z-index: 1;
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

/* 入局界面 */
.genesis-view {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
}

.scroll-form {
  width: 100%;
  max-width: 800px;
  padding: 2rem;
  position: relative;
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%"><defs><pattern id="scroll-pattern" patternUnits="userSpaceOnUse" width="40" height="40"><path d="M0 20 L40 20" stroke="rgba(255,255,255,0.1)" stroke-width="1"/></pattern></defs><rect width="100%" height="100%" fill="url(%23scroll-pattern)"/></svg>');
}

.form-section {
  margin-bottom: 2rem;
}

.form-section h2 {
  margin-bottom: 1rem;
  color: var(--color-important);
}

.form-row {
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
}

.form-group {
  flex: 1;
  margin-bottom: 1rem;
}

.form-group.full-width {
  flex: 1 1 100%;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  font-size: 14px;
  color: rgba(244, 246, 249, 0.8);
}

.card-flip {
  perspective: 1000px;
  margin: 1rem 0;
}

.card-front, .card-back {
  padding: 1.5rem;
  border-radius: 12px;
  transition: transform 0.6s;
  backface-visibility: hidden;
  min-height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.card-back {
  transform: rotateY(180deg);
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%"><defs><pattern id="mountain-pattern" patternUnits="userSpaceOnUse" width="200" height="200"><path d="M0 200 L50 150 L100 180 L150 120 L200 160 L200 200 Z" fill="rgba(81, 154, 115, 0.1)"/></pattern></defs><rect width="100%" height="100%" fill="url(%23mountain-pattern)"/></svg>');
}

.card-flip:hover .card-front {
  transform: rotateY(180deg);
}

.card-flip:hover .card-back {
  transform: rotateY(0deg);
}

.option {
  padding: 0.8rem;
  margin: 0.5rem 0;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.05);
  cursor: pointer;
  transition: var(--transition-smooth);
  width: 100%;
}

.option:hover {
  background: rgba(255, 255, 255, 0.1);
  transform: translateX(10px);
}

.option small {
  display: block;
  font-size: 12px;
  color: rgba(244, 246, 249, 0.6);
  margin-top: 0.3rem;
}

.privacy-section {
  margin-top: 2rem;
  padding-top: 1rem;
  border-top: 1px solid var(--glass-border);
}

.seal {
  text-align: center;
  padding: 1rem;
  background: rgba(81, 154, 115, 0.1);
  border-radius: 8px;
}

.seal span {
  display: block;
  font-weight: 600;
  color: var(--color-success);
  margin-bottom: 0.5rem;
}

.seal p {
  font-size: 12px;
  color: rgba(244, 246, 249, 0.6);
  margin-bottom: 1rem;
}

.privacy-actions {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  flex-wrap: wrap;
}

/* 命轨界面 */
.destiny-view {
  min-height: 80vh;
}

.tree-header {
  text-align: center;
  margin-bottom: 3rem;
}

.tree-actions {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 1rem;
  flex-wrap: wrap;
}

.tree-canvas {
  position: relative;
  min-height: 500px;
  margin-bottom: 2rem;
}

.tree-nodes {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
}

.node {
  width: 200px;
  padding: 1rem;
  border-radius: 12px;
  margin: 0.5rem 0;
  cursor: pointer;
  transition: var(--transition-smooth);
  position: relative;
}

.node::before {
  content: '';
  position: absolute;
  top: -10px;
  left: 50%;
  width: 2px;
  height: 10px;
  background: var(--glass-border);
  transform: translateX(-50%);
}

.node:first-child::before {
  display: none;
}

.node-content {
  text-align: center;
}

.node-content h3 {
  margin-bottom: 0.5rem;
  color: var(--color-important);
}

.node-content p {
  font-size: 14px;
  color: rgba(244, 246, 249, 0.8);
  margin-bottom: 1rem;
}

.node-actions {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.main-node {
  background: linear-gradient(135deg, var(--color-important), #F2C94C);
  color: #1A1C20;
  box-shadow: 0 4px 12px rgba(226, 163, 90, 0.3);
}

.main-node .node-content h3 {
  color: #1A1C20;
}

.branch-node {
  background: var(--glass-bg);
  border: 1px solid var(--glass-border);
  color: var(--color-text-primary);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
}

.branch-node .node-content h3 {
  color: var(--color-important);
}

.node.active {
  transform: scale(1.05);
  box-shadow: 0 0 20px rgba(226, 163, 90, 0.3);
}

.first-level-children {
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 2rem;
  flex-wrap: wrap;
}

.second-level-children {
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
  flex-wrap: wrap;
  justify-content: center;
}

.small-node {
  width: 150px;
  padding: 0.8rem;
}

.small-node .node-content h3 {
  font-size: 14px;
}

.small-node .node-content p {
  font-size: 12px;
}

.tree-controls {
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
}

/* 衍化界面 */
.divergence-container {
  padding: 2rem;
  margin: 0 auto;
  max-width: 1000px;
}

.mode-switch {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2rem 0;
  gap: 1rem;
}

.toggle {
  width: 60px;
  height: 30px;
  background: var(--glass-border);
  border-radius: 15px;
  position: relative;
  cursor: pointer;
  transition: var(--transition-smooth);
}

.toggle.active {
  background: var(--color-important);
}

.toggle-thumb {
  width: 24px;
  height: 24px;
  background: white;
  border-radius: 50%;
  position: absolute;
  top: 3px;
  left: 3px;
  transition: var(--transition-smooth);
}

.toggle.active .toggle-thumb {
  left: 33px;
}

.routes-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
  margin: 2rem 0;
}

.route-card {
  padding: 1.5rem;
  border-radius: 12px;
  position: relative;
  overflow: hidden;
}

.route-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, var(--color-important), var(--color-success));
}

.route-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.route-tag {
  padding: 0.3rem 0.8rem;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 600;
}

.route-tag.success {
  background: rgba(81, 154, 115, 0.2);
  color: var(--color-success);
}

.route-tag.important {
  background: rgba(226, 163, 90, 0.2);
  color: var(--color-important);
}

.route-tag.warning {
  background: rgba(255, 78, 62, 0.2);
  color: var(--color-warning);
}

.route-description {
  margin-bottom: 1rem;
  font-size: 14px;
  color: rgba(244, 246, 249, 0.8);
}

.route-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  font-size: 12px;
  color: rgba(244, 246, 249, 0.6);
  margin-bottom: 1rem;
}

.route-actions {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.custom-route {
  margin: 2rem 0;
}

.custom-route h3 {
  margin-bottom: 1rem;
  color: var(--color-important);
}

.custom-route input,
.custom-route textarea,
.custom-route select {
  width: 100%;
  margin-bottom: 1rem;
}

.multimedia-section {
  margin: 2rem 0;
  padding: 1.5rem;
  background: rgba(226, 163, 90, 0.1);
  border-radius: 12px;
}

.multimedia-section h3 {
  margin-bottom: 1rem;
  color: var(--color-important);
}

.multimedia-options {
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
  flex-wrap: wrap;
}

.style-selector {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.style-selector label {
  font-size: 14px;
  color: rgba(244, 246, 249, 0.8);
}

.divergence-controls {
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
}

/* 观心界面 */
.reflection-container {
  display: grid;
  grid-template-columns: 1fr 300px;
  gap: 2rem;
  min-height: 80vh;
}

.compass {
  padding: 2rem;
  border-radius: 12px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.compass-center {
  text-align: center;
  margin-bottom: 3rem;
}

.compass-center p {
  color: rgba(244, 246, 249, 0.6);
  font-size: 14px;
}

.compass-directions {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  width: 100%;
}

.direction {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.direction-icon {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
}

.direction-icon.career {
  background: rgba(226, 163, 90, 0.2);
  color: var(--color-important);
}

.direction-icon.finance {
  background: rgba(81, 154, 115, 0.2);
  color: var(--color-success);
}

.direction-icon.relationship {
  background: rgba(255, 78, 62, 0.2);
  color: var(--color-warning);
}

.direction-icon.health {
  background: rgba(81, 154, 115, 0.2);
  color: var(--color-success);
}

.direction-icon.growth {
  background: rgba(226, 163, 90, 0.2);
  color: var(--color-important);
}

.direction h3 {
  margin-bottom: 0.5rem;
  font-size: 16px;
}

.attribute-level {
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.attribute-level.level-high {
  color: var(--color-success);
}

.attribute-level.level-medium {
  color: var(--color-important);
}

.attribute-level.level-low {
  color: var(--color-warning);
}

.attribute-bar {
  width: 100%;
  height: 8px;
  background: var(--glass-border);
  border-radius: 4px;
  overflow: hidden;
  margin-bottom: 0.5rem;
}

.attribute-fill {
  height: 100%;
  background: linear-gradient(90deg, var(--color-important), var(--color-success));
  transition: width 1s ease-out;
}

.attribute-narrative {
  font-size: 12px;
  color: rgba(244, 246, 249, 0.6);
  text-align: center;
}

.visualization-section {
  padding: 2rem;
  border-radius: 12px;
  margin: 2rem 0;
}

.visualization-section h3 {
  margin-bottom: 1rem;
  color: var(--color-important);
}

.visualization-options {
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
  flex-wrap: wrap;
}

.chart-container {
  height: 300px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.social-sidebar {
  padding: 2rem;
  border-radius: 12px;
}

.social-sidebar h3 {
  margin-bottom: 1rem;
  color: var(--color-important);
}

.social-item {
  padding: 1rem;
  margin-bottom: 1rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 8px;
  position: relative;
}

.social-item .source {
  display: block;
  font-size: 12px;
  color: var(--color-important);
  margin-bottom: 0.5rem;
}

.social-item p {
  font-size: 14px;
  color: rgba(244, 246, 249, 0.8);
  margin-bottom: 0.5rem;
}

.update-time {
  font-size: 10px;
  color: rgba(244, 246, 249, 0.4);
  position: absolute;
  top: 10px;
  right: 10px;
}

.reflection-controls {
  grid-column: 1 / -1;
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
}

/* 论道界面 */
.mentorship-container {
  padding: 2rem;
  margin: 0 auto;
  max-width: 800px;
}

.ai-avatar {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2rem 0;
}

.avatar-placeholder {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--color-important), #F2C94C);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin-bottom: 1rem;
}

.avatar-glow {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: rgba(226, 163, 90, 0.3);
  animation: pulse 2s infinite;
  position: absolute;
}

.ai-avatar p {
  color: rgba(244, 246, 249, 0.6);
  font-size: 14px;
  margin-top: 0.5rem;
}

.chat-container {
  margin: 2rem 0;
  max-height: 400px;
  overflow-y: auto;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  display: flex;
  flex-direction: column;
}

.chat-message {
  margin-bottom: 1rem;
  max-width: 80%;
}

.ai-message {
  align-self: flex-start;
}

.user-message {
  align-self: flex-end;
  margin-left: auto;
}

.message-content {
  padding: 1rem;
  border-radius: 12px;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.ai-message .message-content {
  background: var(--glass-bg);
  border: 1px solid var(--glass-border);
}

.user-message .message-content {
  background: linear-gradient(135deg, var(--color-important), #F2C94C);
  color: #1A1C20;
}

.chat-input {
  display: flex;
  gap: 1rem;
  margin: 2rem 0;
}

.chat-input input {
  flex: 1;
}

.ai-role-selector {
  margin: 2rem 0;
  padding: 1.5rem;
  background: rgba(226, 163, 90, 0.1);
  border-radius: 12px;
}

.ai-role-selector h3 {
  margin-bottom: 1rem;
  color: var(--color-important);
}

.role-options {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.mentorship-controls {
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
}

/* 归途界面 */
.conclusion-view {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
}

.scroll-report {
  width: 100%;
  max-width: 800px;
  padding: 2rem;
  position: relative;
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%"><defs><pattern id="scroll-pattern" patternUnits="userSpaceOnUse" width="40" height="40"><path d="M0 20 L40 20" stroke="rgba(255,255,255,0.1)" stroke-width="1"/></pattern></defs><rect width="100%" height="100%" fill="url(%23scroll-pattern)"/></svg>');
  animation: fadeIn 1s ease-out;
}

.regret-meter {
  margin: 2rem 0;
  text-align: center;
}

.regret-bar {
  width: 100%;
  height: 20px;
  background: var(--glass-border);
  border-radius: 10px;
  overflow: hidden;
  margin: 1rem 0;
}

.regret-fill {
  height: 100%;
  background: linear-gradient(90deg, var(--color-success), var(--color-warning));
  transition: width 1s ease-out;
}

.regret-text {
  font-size: 18px;
  color: var(--color-important);
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.regret-analysis {
  font-size: 14px;
  color: rgba(244, 246, 249, 0.8);
  max-width: 600px;
  margin: 0 auto;
}

.report-content {
  margin: 2rem 0;
}

.attribute-comparison {
  margin: 2rem 0;
}

.attribute-item {
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 1rem;
}

.attribute-item span:first-child {
  width: 100px;
  font-size: 14px;
}

.attribute-item .attribute-level {
  width: 60px;
  font-size: 12px;
  text-align: right;
}

.attribute-bar {
  flex: 1;
  height: 8px;
  background: var(--glass-border);
  border-radius: 4px;
  overflow: hidden;
}

.attribute-fill {
  height: 100%;
  background: linear-gradient(90deg, var(--color-important), var(--color-success));
  transition: width 1s ease-out;
}

.ai-advice {
  margin: 2rem 0;
  padding: 1.5rem;
  background: rgba(226, 163, 90, 0.1);
  border-radius: 12px;
}

.ai-advice h4 {
  margin-bottom: 1rem;
  color: var(--color-important);
}

.future-letter {
  margin: 2rem 0;
  padding: 1.5rem;
  background: rgba(81, 154, 115, 0.1);
  border-radius: 12px;
  position: relative;
}

.future-letter h4 {
  margin-bottom: 1rem;
  color: var(--color-success);
}

.future-letter p {
  margin-bottom: 0.5rem;
  line-height: 1.6;
}

.celebrity-simulation {
  margin: 2rem 0;
  padding: 1.5rem;
  background: rgba(255, 78, 62, 0.1);
  border-radius: 12px;
}

.celebrity-simulation h3 {
  margin-bottom: 0.5rem;
  color: var(--color-important);
}

.celebrity-simulation p {
  margin-bottom: 1rem;
  font-size: 14px;
  color: rgba(244, 246, 249, 0.8);
}

.celebrity-options {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.save-section {
  margin: 2rem 0;
}

.save-section h3 {
  margin-bottom: 1rem;
  color: var(--color-important);
  text-align: center;
}

.save-actions {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
}

.saved-paths {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 8px;
  padding: 1rem;
}

.saved-paths h4 {
  margin-bottom: 1rem;
  color: var(--color-important);
  font-size: 14px;
}

.saved-path-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  margin-bottom: 0.5rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 4px;
}

.saved-path-item span:first-child {
  flex: 1;
  font-size: 14px;
}

.saved-path-item span:nth-child(2) {
  font-size: 12px;
  color: rgba(244, 246, 249, 0.6);
  margin: 0 1rem;
}

.conclusion-controls {
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
}

/* 通用样式 */
.title {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  text-align: center;
  color: var(--color-important);
  text-shadow: 0 0 20px rgba(226, 163, 90, 0.3);
}

.btn.small {
  padding: 5px 10px;
  font-size: 12px;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .main-content {
    padding: 1rem;
  }
  
  .reflection-container {
    grid-template-columns: 1fr;
  }
  
  .routes-container {
    grid-template-columns: 1fr;
  }
  
  .compass-directions {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .form-row {
    flex-direction: column;
    gap: 0;
  }
  
  .tree-controls,
  .divergence-controls,
  .reflection-controls,
  .mentorship-controls,
  .conclusion-controls {
    flex-direction: column;
    gap: 1rem;
  }
  
  .card-flip:hover .card-front,
  .card-flip:hover .card-back {
    transform: none;
  }
  
  .card-back {
    position: static;
    transform: none;
    margin-top: 1rem;
  }
  
  .chat-input {
    flex-direction: column;
  }
  
  .role-options,
  .celebrity-options {
    justify-content: center;
  }
}
</style>