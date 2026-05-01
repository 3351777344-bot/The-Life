<template>
  <div class="destiny-view">
    <div class="tree-layout">
      <div class="tree-container">
        <div class="tree-header">
          <h1 class="title">命轨</h1>
          <p>你的人生轨迹</p>
          <div class="tree-actions">
            <button class="btn btn-secondary small" @click="$emit('add-node')">添加节点</button>
            <button class="btn btn-secondary small" @click="$emit('zoom-in')">放大</button>
            <button class="btn btn-secondary small" @click="$emit('zoom-out')">缩小</button>
            <button class="btn btn-secondary small" @click="$emit('reset-view')">重置视图</button>
            <button class="btn btn-secondary small" @click="$emit('export-tree')">导出图谱</button>
            <button class="btn btn-secondary small" @click="$emit('reset-tree')">重置树状图</button>
          </div>
        </div>

        <div class="tree-canvas">
          <div class="tree-viewport" ref="treeViewport"
            :class="{ dragging: isPanning }"
            @wheel="$emit('wheel', $event)"
            @mousedown="$emit('start-pan', $event)"
            @mousemove="$emit('pan-move', $event)"
            @mouseup="$emit('end-pan')"
            @mouseleave="$emit('end-pan')"
            @touchstart.prevent="$emit('touch-start', $event)"
            @touchmove.prevent="$emit('touch-move', $event)"
            @touchend="$emit('end-pan')"
          >
            <div class="tree-transform" :style="treeTransformStyle">
              <div class="tree-org">
                <div class="tree-org-node-group">
                  <div class="node main-node" :class="{ active: selectedNode === 'current' }" @click.stop="$emit('select-node','current')">
                    <div class="node-content">
                      <h3>{{ treeNodes.find(n => n.id === 'current')?.title }}</h3>
                      <p>{{ treeNodes.find(n => n.id === 'current')?.description }}</p>
                      <div class="node-actions">
                        <button class="btn btn-secondary small" @click.stop="$emit('edit-node','current')">编辑</button>
                        <button class="btn btn-secondary small" @click.stop="$emit('delete-node','current')">删除</button>
                        <button class="btn btn-secondary small" @click.stop="$emit('extend-branch','current')">延伸分支</button>
                      </div>
                    </div>
                  </div>

                  <div class="tree-org-children" v-if="treeNodes.find(n => n.id === 'current')?.children && treeNodes.find(n => n.id === 'current')?.children.length > 0">
                    <div v-for="childId in treeNodes.find(n => n.id === 'current')?.children" :key="childId" class="tree-org-node-group">
                      <div class="node branch-node" :class="{ active: selectedNode === childId }" @click.stop="$emit('select-node', childId)">
                        <div class="node-content">
                          <h3>{{ treeNodes.find(n => n.id === childId)?.title }}</h3>
                          <p>{{ treeNodes.find(n => n.id === childId)?.description }}</p>
                          <div class="node-actions">
                            <button class="btn btn-secondary small" @click.stop="$emit('edit-node', childId)">编辑</button>
                            <button class="btn btn-secondary small" @click.stop="$emit('delete-node', childId)">删除</button>
                            <button class="btn btn-secondary small" @click.stop="$emit('extend-branch', childId)">延伸分支</button>
                          </div>
                        </div>
                      </div>

                      <div class="tree-org-children" v-if="treeNodes.find(n => n.id === childId)?.children && treeNodes.find(n => n.id === childId)?.children.length > 0">
                        <div v-for="grandchildId in treeNodes.find(n => n.id === childId)?.children" :key="grandchildId" class="tree-org-node-group">
                          <div class="node branch-node small-node" :class="{ active: selectedNode === grandchildId }" @click.stop="$emit('select-node', grandchildId)">
                            <div class="node-content">
                              <h3>{{ treeNodes.find(n => n.id === grandchildId)?.title }}</h3>
                              <p>{{ treeNodes.find(n => n.id === grandchildId)?.description }}</p>
                              <div class="node-actions">
                                <button class="btn btn-secondary small" @click.stop="$emit('edit-node', grandchildId)">编辑</button>
                                <button class="btn btn-secondary small" @click.stop="$emit('delete-node', grandchildId)">删除</button>
                                <button class="btn btn-secondary small" @click.stop="$emit('extend-branch', grandchildId)">延伸分支</button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="tree-scroll-hint">可横向/纵向拖动查看全局</div>
        </div>

        <div class="tree-controls">
          <button class="btn btn-secondary" @click="$emit('go-to-genesis')">返回</button>
          <button class="btn btn-primary" @click="$emit('go-to-divergence')">衍生路线</button>
        </div>
      </div>

      <aside class="tree-aside glass-container">
        <div class="tree-aside-header">
          <h2>节点面板</h2>
          <span class="badge">已选</span>
        </div>
        <div class="node-preview">
          <strong>{{ selectedNodeData?.title || '未选择节点' }}</strong>
          <p>{{ selectedNodeData?.description || '请在树上选择节点，查看详情与操作' }}</p>
        </div>
        <div class="node-stats">
          <div class="stat-card">
            <span>节点总数</span>
            <strong>{{ nodeCount }}</strong>
          </div>
          <div class="stat-card">
            <span>叶子节点</span>
            <strong>{{ leafCount }}</strong>
          </div>
          <div class="stat-card">
            <span>当前层级</span>
            <strong>{{ selectedDepth }}</strong>
          </div>
        </div>
        <div class="node-quick">
          <button class="btn btn-secondary small" @click="$emit('add-node')">快速添加</button>
          <button class="btn btn-secondary small" @click="$emit('extend-branch', selectedNode)">快速延伸</button>
        </div>
        <div class="tree-hints">
          <h4>查看提示</h4>
          <p>拖动滚动条可完整查看分支，点击节点后可用编辑按钮修改信息。</p>
          <p>建议从主节点向外扩散，逐层细化关键选择。</p>
        </div>
      </aside>
    </div>
  </div>
</template>

<script setup>
defineProps({
  treeNodes: { type: Array, required: true },
  selectedNode: { type: [String, Number], required: true },
  selectedNodeData: { type: Object, required: false },
  nodeCount: { type: Number, required: true },
  leafCount: { type: Number, required: true },
  selectedDepth: { type: Number, required: true },
  treeTransformStyle: { type: Object, required: true },
  isPanning: { type: Boolean, required: true }
})

const emit = defineEmits([])
</script>

<style scoped>
/* 保持与 App.vue 中样式一致，局部调整 */
.tree-layout { display:flex; gap:20px; }
.tree-container { flex:1; }
.tree-aside { width:320px; }
</style>
