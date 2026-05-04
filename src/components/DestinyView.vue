<template>
  <div class="destiny-view">
    <div class="tree-layout">
      <div class="tree-container">
        <div class="tree-header">
          <h1 class="title">命轨</h1>
          <p>以图谱方式展开你的命轨分支</p>
          <div class="tree-actions">
            <button class="btn btn-secondary small" @click="$emit('add-node')">添加节点</button>
            <button class="btn btn-secondary small" @click="$emit('zoom-in')">放大</button>
            <button class="btn btn-secondary small" @click="$emit('zoom-out')">缩小</button>
            <button class="btn btn-secondary small" @click="$emit('reset-view')">重置视图</button>
            <button class="btn btn-secondary small" @click="$emit('export-tree')">导出图谱</button>
            <button class="btn btn-secondary small" @click="$emit('reset-tree')">重置图谱</button>
          </div>
        </div>

        <div class="tree-canvas">
          <div class="tree-viewport"
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
              <div class="tree-graph" :style="graphCanvasStyle">
                <svg class="graph-links" :viewBox="`0 0 ${graphLayout.width} ${graphLayout.height}`" preserveAspectRatio="none">
                  <path
                    v-for="edge in graphLayout.edges"
                    :key="`${edge.from}-${edge.to}`"
                    :d="edge.path"
                    class="graph-edge"
                    :class="`depth-${Math.min(edge.depth, 6)}`"
                  />
                  <circle
                    v-for="edge in graphLayout.edges"
                    :key="`${edge.from}-${edge.to}-dot`"
                    :cx="edge.targetX"
                    :cy="edge.targetY"
                    r="3.5"
                    class="graph-edge-dot"
                  />
                </svg>

                <div
                  v-for="node in graphLayout.nodes"
                  :key="node.id"
                  class="graph-node"
                  :class="[{ active: selectedNode === node.id, root: !node.parentId }, `depth-${Math.min(node.depth, 6)}`]"
                  :style="{ left: `${node.x}px`, top: `${node.y}px` }"
                  @click.stop="$emit('select-node', node.id)"
                >
                  <div class="graph-node-glow"></div>
                  <button 
                    class="node-delete-btn"
                    @click.stop="$emit('delete-node', node.id)"
                    :title="`删除 ${node.title}`"
                  >×</button>
                  <div class="graph-node-frame">
                    <h3>{{ node.title }}</h3>
                    <span v-if="node.childrenCount > 0" class="node-branch-count">{{ node.childrenCount }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="tree-scroll-hint">拖动画布浏览完整图谱，缩放后可查看更远层级</div>
        </div>

        <div class="tree-controls">
          <button class="btn btn-secondary" @click="$emit('go-to-genesis')">返回</button>
          <button class="btn btn-primary" @click="$emit('go-to-divergence')">衍生路线</button>
        </div>
      </div>

      <aside class="tree-aside">
        <div class="tree-aside-header">
          <h2>节点面板</h2>
          <span class="badge">已选</span>
        </div>
        <div class="node-preview">
          <strong>{{ selectedNodeData?.title || '未选择节点' }}</strong>
          <p>{{ selectedNodeData?.description || '请在图谱上选择节点，查看详情与操作' }}</p>
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
          <button 
            class="btn btn-secondary small btn-danger" 
            @click="$emit('delete-node', selectedNode)"
            :disabled="!selectedNode || selectedNode === 'root'"
          >删除</button>
        </div>
        <div class="tree-hints">
          <h4>查看提示</h4>
          <p>图谱会根据父子关系自动展开，节点越深，位置越向右推进。</p>
          <p>建议从主节点向外扩散，逐层细化关键选择。</p>
        </div>
      </aside>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  treeNodes: { type: Array, required: true },
  selectedNode: { type: [String, Number], required: true },
  selectedNodeData: { type: Object, required: false },
  nodeCount: { type: Number, required: true },
  leafCount: { type: Number, required: true },
  selectedDepth: { type: Number, required: true },
  treeTransformStyle: { type: Object, required: true },
  isPanning: { type: Boolean, required: true }
})

defineEmits([
  'add-node',
  'zoom-in',
  'zoom-out',
  'reset-view',
  'export-tree',
  'reset-tree',
  'wheel',
  'start-pan',
  'pan-move',
  'end-pan',
  'touch-start',
  'touch-move',
  'select-node',
  'edit-node',
  'delete-node',
  'extend-branch',
  'go-to-genesis',
  'go-to-divergence'
])

const NODE_WIDTH = 110
const NODE_HEIGHT = 60
const H_GAP = 130
const V_GAP = 100
const START_X = 80
const START_Y = 50

const formatNodeDate = (value) => {
  if (!value) return '暂无时间'
  const date = new Date(value)
  if (Number.isNaN(date.getTime())) return '暂无时间'
  return date.toLocaleDateString()
}

const graphLayout = computed(() => {
  const nodes = Array.isArray(props.treeNodes) ? props.treeNodes : []
  if (!nodes.length) return { nodes: [], edges: [], width: 1200, height: 720 }

  const nodeMap = new Map(nodes.map((node) => [node.id, node]))
  const childrenMap = new Map()

  // 建立节点关系映射
  nodes.forEach((node) => {
    const children = Array.isArray(node.children)
      ? node.children.map((childId) => nodeMap.get(childId)).filter(Boolean)
      : []
    childrenMap.set(node.id, children)
  })

  const positions = new Map() // nodeId -> {x, y, depth}
  const edges = []
  let maxDepth = 0
  let leafYStart = START_Y
  let currentLeafY = START_Y

  // 第一步：按DFS顺序遍历，给所有叶子节点分配Y坐标
  const assignLeafYs = (node) => {
    const children = childrenMap.get(node.id) || []
    if (!children.length) {
      // 叶子节点
      positions.set(node.id, { y: currentLeafY, isLeaf: true })
      currentLeafY += V_GAP
    } else {
      // 中间节点，递归处理子节点
      children.forEach((child) => assignLeafYs(child))
    }
  }

  // 第二步：递归计算所有节点的位置并生成边
  const calculatePositions = (node, depth) => {
    const children = childrenMap.get(node.id) || []
    const x = START_X + depth * H_GAP

    maxDepth = Math.max(maxDepth, depth)

    if (!children.length) {
      // 叶子节点已在第一步分配Y
      const pos = positions.get(node.id)
      positions.set(node.id, { ...pos, x, depth })
    } else {
      // 中间节点：计算所有叶子的平均Y
      const leafYs = []
      const collectLeafYs = (n) => {
        const nChildren = childrenMap.get(n.id) || []
        if (!nChildren.length) {
          const np = positions.get(n.id)
          if (np && np.isLeaf) leafYs.push(np.y)
        } else {
          nChildren.forEach((c) => collectLeafYs(c))
        }
      }
      collectLeafYs(node)

      const nodeY = leafYs.length ? leafYs.reduce((a, b) => a + b, 0) / leafYs.length : START_Y
      positions.set(node.id, { x, y: nodeY, depth })

      // 递归处理子节点
      children.forEach((child) => calculatePositions(child, depth + 1))

      // 添加到子节点的边
      children.forEach((child) => {
        const childPos = positions.get(child.id)
        if (!childPos) return

        const startX = x + NODE_WIDTH / 2
        const startY = nodeY
        const endX = childPos.x - NODE_WIDTH / 2
        const endY = childPos.y
        const controlOffset = Math.max(60, (endX - startX) * 0.35)

        edges.push({
          from: node.id,
          to: child.id,
          depth: depth + 1,
          targetX: endX,
          targetY: endY,
          path: `M ${startX} ${startY} C ${startX + controlOffset} ${startY}, ${endX - controlOffset} ${endY}, ${endX} ${endY}`
        })
      })
    }
  }

  const roots = nodes.filter((node) => !node.parentId)

  // 执行两步计算
  roots.forEach((root) => assignLeafYs(root))
  roots.forEach((root) => calculatePositions(root, 0))

  // 构建最终的节点列表
  const positionedNodes = nodes
    .map((node) => {
      const position = positions.get(node.id)
      if (!position) return null
      const parent = node.parentId ? nodeMap.get(node.parentId) : null
      return {
        ...node,
        x: position.x,
        y: position.y,
        depth: position.depth + 1,
        parentTitle: parent?.title || '',
        childrenCount: (childrenMap.get(node.id) || []).length
      }
    })
    .filter(Boolean)

  // 计算画布尺寸
  const maxX = START_X + maxDepth * H_GAP + NODE_WIDTH + 100
  const allYs = positionedNodes.map((node) => node.y)
  const minY = Math.min(...allYs, START_Y)
  const maxY = Math.max(...allYs, START_Y) + 80
  const totalHeight = maxY - minY

  return {
    nodes: positionedNodes,
    edges,
    width: Math.max(800, maxX),
    height: Math.max(600, totalHeight + 140)
  }
})

const graphCanvasStyle = computed(() => ({
  width: `${graphLayout.value.width}px`,
  height: `${graphLayout.value.height}px`
}))
</script>

<style scoped>
/* 保持与 App.vue 中样式一致，局部调整 */
.destiny-view {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
}

.tree-layout {
  display: flex;
  gap: 16px;
  align-items: stretch;
  height: 100vh;
}

.tree-container {
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
}

.tree-header {
  margin-bottom: 8px;
  padding: 8px 0 12px 0;
  border-bottom: 1px solid var(--glass-border);
  flex: 0 0 auto;
}

.tree-header .title {
  font-size: 1.2rem;
  margin: 0 0 4px 0;
  color: var(--color-accent-gold);
  font-weight: 700;
}

.tree-header p {
  margin-top: 6px;
  color: var(--color-text-muted);
}

.tree-actions {
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
  margin-top: 6px;
}

.tree-canvas {
  position: relative;
  overflow: hidden;
  flex: 1;
  background: transparent;
  border: none;
  border-radius: 0;
}

.tree-viewport {
  min-height: auto;
  flex: 1;
  padding: 8px 4px 12px 4px;
  cursor: grab;
  overflow: hidden;
}

.tree-viewport.dragging {
  cursor: grabbing;
}

.tree-transform {
  min-width: max-content;
}

.tree-graph {
  position: relative;
  min-width: 100%;
  min-height: 100%;
  border-radius: 0;
  background: transparent;
}

.graph-links {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.graph-edge {
  fill: none;
  stroke: rgba(98, 79, 61, 0.18);
  stroke-width: 1.5;
  vector-effect: non-scaling-stroke;
}

.graph-edge.depth-2 {
  stroke: rgba(98, 79, 61, 0.24);
}

.graph-edge.depth-3,
.graph-edge.depth-4,
.graph-edge.depth-5,
.graph-edge.depth-6 {
  stroke: rgba(98, 79, 61, 0.16);
}

.graph-edge-dot {
  fill: var(--color-accent-gold);
  filter: drop-shadow(0 0 10px rgba(212, 165, 116, 0.5));
}

.graph-node {
  position: absolute;
  width: 100px;
  transform: translate(-50%, -50%);
  cursor: pointer;
}

.graph-node-glow {
  position: absolute;
  inset: 10px 18px 18px 18px;
  border-radius: 28px;
  background: radial-gradient(circle at top, rgba(255, 255, 255, 0.48), transparent 70%);
  filter: blur(10px);
  opacity: 0;
  transition: opacity 0.28s ease;
  pointer-events: none;
}

.node-delete-btn {
  position: absolute;
  top: -8px;
  right: -8px;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: var(--color-status-danger);
  border: 2px solid rgba(53, 42, 32, 0.8);
  color: white;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  opacity: 0;
  transform: scale(0.8);
  transition: opacity 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease;
  z-index: 5;
  line-height: 1;
  box-shadow: 0 2px 8px rgba(255, 107, 107, 0.3);
}

.graph-node:hover .node-delete-btn {
  opacity: 1;
  transform: scale(1);
  box-shadow: 0 4px 12px rgba(255, 107, 107, 0.5);
}

.node-delete-btn:hover {
  background: #ff4444;
  box-shadow: 0 6px 16px rgba(255, 107, 107, 0.7);
}

.graph-node-frame {
  position: relative;
  padding: 6px 8px;
  border-radius: 8px;
  background: linear-gradient(135deg, rgba(212, 165, 116, 0.15) 0%, rgba(53, 42, 32, 0.6) 100%);
  border: 1px solid var(--glass-border);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 215, 140, 0.1);
  backdrop-filter: blur(20px);
  transition: transform 0.24s ease, box-shadow 0.24s ease, border-color 0.24s ease;
  min-height: 32px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.graph-node:hover .graph-node-frame {
  transform: translateY(-4px) scale(1.08);
  border-color: var(--glass-border-hover);
  box-shadow: 0 10px 28px rgba(212, 165, 116, 0.3), var(--glow-gold), inset 0 1px 0 rgba(255, 215, 140, 0.2);
}

.graph-node:hover .graph-node-glow,
.graph-node.active .graph-node-glow {
  opacity: 1;
}

.graph-node.active .graph-node-frame {
  border-color: var(--color-accent-gold-bright);
  background: linear-gradient(135deg, rgba(212, 165, 116, 0.3) 0%, rgba(53, 42, 32, 0.8) 100%);
  box-shadow: 0 16px 40px rgba(212, 165, 116, 0.5), 0 0 30px rgba(212, 165, 116, 0.3), inset 0 1px 0 rgba(255, 215, 140, 0.2);
  transform: translateY(-8px) scale(1.08);
}

.graph-node.root .graph-node-frame {
  background: linear-gradient(135deg, rgba(255, 215, 0, 0.15) 0%, rgba(53, 42, 32, 0.7) 100%);
  border-width: 2px;
  border-color: var(--color-accent-gold);
}

.graph-node.depth-2 .graph-node-frame,
.graph-node.depth-3 .graph-node-frame,
.graph-node.depth-4 .graph-node-frame,
.graph-node.depth-5 .graph-node-frame,
.graph-node.depth-6 .graph-node-frame {
  background: linear-gradient(135deg, rgba(212, 165, 116, 0.12) 0%, rgba(53, 42, 32, 0.55) 100%);
}

.graph-node-topline {
  display: none;
}

.node-badge {
  display: none;
}

.node-date {
  display: none;
}

.graph-node h3 {
  font-size: 0.7rem;
  margin: 0;
  color: var(--color-accent-gold-bright);
  font-weight: 700;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.6);
  line-height: 1;
  text-align: center;
  word-break: break-word;
}

.node-branch-count {
  display: block;
  font-size: 9px;
  color: var(--color-accent-gold);
  margin-top: 1px;
  font-weight: 600;
}

.graph-node p {
  display: none;
}

.graph-node-meta {
  display: none;
}

.graph-node-actions {
  display: none;
}

.graph-node-actions {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  margin-top: 14px;
}

.tree-scroll-hint {
  margin: 0 4px 8px 4px;
  padding: 8px;
  color: var(--color-text-muted);
  font-size: 11px;
  border-top: 1px solid var(--glass-border);
  text-align: center;
}

.tree-controls {
  display: flex;
  gap: 8px;
  padding: 8px 4px;
  border-top: 1px solid var(--glass-border);
  flex: 0 0 auto;
  justify-content: flex-end;
}

.tree-controls .btn {
  flex: 0 1 auto;
}

.tree-aside-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0;
  padding: 12px 16px;
  border-bottom: 1px solid var(--glass-border);
  position: sticky;
  top: 0;
  background: rgba(53, 42, 32, 0.95);
  backdrop-filter: blur(10px);
  z-index: 10;
}

.tree-aside-header h2 {
  font-size: 1rem;
  margin: 0;
  color: var(--color-accent-gold);
}

.badge {
  background: var(--color-status-info);
  color: #000;
  padding: 2px 6px;
  border-radius: 3px;
  font-size: 11px;
  font-weight: 600;
}

.node-preview {
  margin: 16px 16px 16px 16px;
  padding: 10px;
  border-radius: 8px;
  background: rgba(53, 42, 32, 0.4);
  border: 1px solid var(--glass-border);
}

.node-preview strong {
  display: block;
  color: var(--color-accent-gold-bright);
  font-size: 0.95rem;
  margin-bottom: 6px;
  font-weight: 700;
}

.node-preview p {
  color: var(--color-text-secondary);
  font-size: 0.85rem;
  margin: 0;
  line-height: 1.4;
  word-break: break-word;
}

.node-stats {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 8px;
  margin: 0 16px 14px 16px;
}

.stat-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8px;
  border-radius: 6px;
  background: rgba(212, 165, 116, 0.08);
  border: 1px solid var(--glass-border);
}

.stat-card span {
  font-size: 0.75rem;
  color: var(--color-text-muted);
  margin-bottom: 3px;
}

.stat-card strong {
  font-size: 1rem;
  color: var(--color-accent-gold-bright);
  font-weight: 700;
}

.node-quick {
  display: flex;
  gap: 6px;
  margin: 0 16px 12px 16px;
}

.node-quick .btn {
  flex: 1;
  font-size: 0.8rem;
  padding: 5px 6px;
}

.node-quick .btn-danger {
  background: linear-gradient(135deg, rgba(255, 107, 107, 0.3) 0%, rgba(220, 53, 69, 0.2) 100%);
  border-color: rgba(255, 107, 107, 0.5);
  color: var(--color-status-danger);
}

.node-quick .btn-danger:hover:not(:disabled) {
  background: linear-gradient(135deg, rgba(255, 107, 107, 0.5) 0%, rgba(220, 53, 69, 0.4) 100%);
  border-color: var(--color-status-danger);
  box-shadow: 0 0 12px rgba(255, 107, 107, 0.4);
}

.node-quick .btn-danger:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.tree-hints {
  margin: 0 16px 16px 16px;
  padding: 10px;
  border-radius: 8px;
  background: rgba(53, 42, 32, 0.4);
  border: 1px solid var(--glass-border);
}

.tree-hints h4 {
  font-size: 0.85rem;
  color: var(--color-accent-gold);
  margin: 0 0 6px 0;
  font-weight: 600;
}

.tree-hints p {
  font-size: 0.8rem;
  color: var(--color-text-muted);
  margin: 3px 0;
  line-height: 1.3;
}

.tree-aside {
  width: 320px;
  height: 100%;
  overflow-y: auto;
  padding: 0;
  flex: 0 0 320px;
  background: transparent;
  border: none;
  border-radius: 0;
  margin-top: 0;
}

@media (max-width: 1024px) {
  .tree-layout {
    flex-direction: column;
  }

  .tree-aside {
    width: 100%;
    flex: 1 1 auto;
    height: 400px;
  }

  .graph-node {
    width: 90px;
  }
}

@media (max-width: 768px) {
  .tree-viewport {
    min-height: 600px;
  }

  .graph-node {
    width: 80px;
  }

  .graph-node-actions {
    gap: 4px;
  }
}
</style>
