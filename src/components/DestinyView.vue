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
                  <div class="graph-node-frame">
                    <div class="graph-node-topline">
                      <span class="node-badge">L{{ node.depth }}</span>
                      <span class="node-date">{{ formatNodeDate(node.timeline) }}</span>
                    </div>
                    <h3>{{ node.title }}</h3>
                    <p>{{ node.description }}</p>
                    <div class="graph-node-meta">
                      <span>{{ node.childrenCount }} 个后续分支</span>
                      <span v-if="node.parentTitle">来自 {{ node.parentTitle }}</span>
                    </div>
                    <div class="graph-node-actions">
                      <button class="btn btn-secondary small" @click.stop="$emit('edit-node', node.id)">编辑</button>
                      <button class="btn btn-secondary small" @click.stop="$emit('delete-node', node.id)">删除</button>
                      <button class="btn btn-secondary small" @click.stop="$emit('extend-branch', node.id)">延伸分支</button>
                    </div>
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

      <aside class="tree-aside glass-container">
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

defineEmits([])

const NODE_WIDTH = 250
const NODE_HEIGHT = 150
const H_GAP = 300
const V_GAP = 180
const START_X = 140
const START_Y = 110

const formatNodeDate = (value) => {
  if (!value) return '暂无时间'
  const date = new Date(value)
  if (Number.isNaN(date.getTime())) return '暂无时间'
  return date.toLocaleDateString()
}

const graphLayout = computed(() => {
  const nodes = Array.isArray(props.treeNodes) ? props.treeNodes : []
  const nodeMap = new Map(nodes.map((node) => [node.id, node]))
  const childrenMap = new Map()

  nodes.forEach((node) => {
    const children = Array.isArray(node.children)
      ? node.children.map((childId) => nodeMap.get(childId)).filter(Boolean)
      : []
    childrenMap.set(node.id, children)
  })

  const roots = nodes.filter((node) => !node.parentId)
  const positions = new Map()
  const edges = []
  let leafIndex = 0
  let maxDepth = 0

  const placeNode = (node, depth) => {
    const children = childrenMap.get(node.id) || []
    maxDepth = Math.max(maxDepth, depth)

    if (!children.length) {
      const y = START_Y + leafIndex * V_GAP
      const x = START_X + depth * H_GAP
      positions.set(node.id, { x, y, depth })
      leafIndex += 1
      return y
    }

    const childYs = children.map((child) => placeNode(child, depth + 1))
    const y = childYs.reduce((sum, value) => sum + value, 0) / childYs.length
    const x = START_X + depth * H_GAP
    positions.set(node.id, { x, y, depth })

    children.forEach((child) => {
      const childPosition = positions.get(child.id)
      if (!childPosition) return
      const startX = x + NODE_WIDTH / 2
      const startY = y
      const endX = childPosition.x - NODE_WIDTH / 2
      const endY = childPosition.y
      const controlOffset = Math.max(84, (endX - startX) * 0.35)
      edges.push({
        from: node.id,
        to: child.id,
        depth: depth + 1,
        targetX: endX,
        targetY: endY,
        path: `M ${startX} ${startY} C ${startX + controlOffset} ${startY}, ${endX - controlOffset} ${endY}, ${endX} ${endY}`
      })
    })

    return y
  }

  roots.forEach((root) => {
    placeNode(root, 0)
  })

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

  const maxX = START_X + maxDepth * H_GAP + NODE_WIDTH + 180
  const maxY = Math.max(...positionedNodes.map((node) => node.y), START_Y) + 120

  return {
    nodes: positionedNodes,
    edges,
    width: Math.max(1200, maxX),
    height: Math.max(720, maxY)
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
}

.tree-layout {
  display: flex;
  gap: 20px;
  align-items: flex-start;
}

.tree-container {
  flex: 1;
  min-width: 0;
}

.tree-header {
  margin-bottom: 16px;
}

.tree-header p {
  margin-top: 6px;
  color: rgba(44, 36, 27, 0.72);
}

.tree-actions {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin-top: 12px;
}

.tree-canvas {
  position: relative;
  overflow: hidden;
  border-radius: 24px;
  background:
    radial-gradient(circle at top left, rgba(226, 163, 90, 0.14), transparent 34%),
    radial-gradient(circle at 85% 20%, rgba(81, 154, 115, 0.1), transparent 26%),
    linear-gradient(180deg, rgba(250, 246, 239, 0.96), rgba(244, 236, 226, 0.92));
  border: 1px solid rgba(140, 115, 88, 0.12);
  box-shadow: 0 20px 50px rgba(108, 85, 62, 0.08);
}

.tree-viewport {
  min-height: 720px;
  padding: 20px 14px 28px;
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
  border-radius: 18px;
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
  stroke-width: 2.2;
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
  fill: rgba(226, 163, 90, 0.72);
  filter: drop-shadow(0 0 6px rgba(226, 163, 90, 0.26));
}

.graph-node {
  position: absolute;
  width: 250px;
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

.graph-node-frame {
  position: relative;
  padding: 18px 18px 16px;
  border-radius: 24px;
  background: linear-gradient(180deg, rgba(255, 253, 249, 0.96), rgba(243, 233, 220, 0.92));
  border: 1px solid rgba(116, 92, 70, 0.12);
  box-shadow:
    0 18px 40px rgba(92, 72, 52, 0.12),
    inset 0 1px 0 rgba(255, 255, 255, 0.72);
  backdrop-filter: blur(10px);
  transition: transform 0.24s ease, box-shadow 0.24s ease, border-color 0.24s ease;
}

.graph-node:hover .graph-node-frame {
  transform: translateY(-4px) scale(1.01);
  border-color: rgba(226, 163, 90, 0.24);
  box-shadow:
    0 22px 46px rgba(92, 72, 52, 0.18),
    0 0 0 1px rgba(226, 163, 90, 0.12),
    inset 0 1px 0 rgba(255, 255, 255, 0.84);
}

.graph-node:hover .graph-node-glow,
.graph-node.active .graph-node-glow {
  opacity: 1;
}

.graph-node.active .graph-node-frame {
  border-color: rgba(226, 163, 90, 0.42);
  box-shadow:
    0 24px 50px rgba(92, 72, 52, 0.2),
    0 0 0 2px rgba(226, 163, 90, 0.16),
    inset 0 1px 0 rgba(255, 255, 255, 0.86);
}

.graph-node.root .graph-node-frame {
  background: linear-gradient(180deg, rgba(255, 250, 242, 0.98), rgba(239, 225, 209, 0.94));
}

.graph-node.depth-2 .graph-node-frame {
  background: linear-gradient(180deg, rgba(251, 247, 241, 0.98), rgba(241, 229, 218, 0.92));
}

.graph-node.depth-3 .graph-node-frame,
.graph-node.depth-4 .graph-node-frame,
.graph-node.depth-5 .graph-node-frame,
.graph-node.depth-6 .graph-node-frame {
  background: linear-gradient(180deg, rgba(248, 244, 238, 0.98), rgba(239, 231, 223, 0.94));
}

.graph-node-topline {
  display: flex;
  justify-content: space-between;
  gap: 10px;
  margin-bottom: 12px;
  font-size: 12px;
  color: rgba(44, 36, 27, 0.6);
}

.node-badge {
  display: inline-flex;
  align-items: center;
  padding: 3px 8px;
  border-radius: 999px;
  background: rgba(226, 163, 90, 0.14);
  color: rgba(92, 72, 52, 0.9);
  font-weight: 600;
}

.node-date {
  white-space: nowrap;
}

.graph-node h3 {
  font-size: 1.1rem;
  margin-bottom: 8px;
}

.graph-node p {
  color: rgba(44, 36, 27, 0.78);
  font-size: 0.93rem;
  min-height: 2.7em;
}

.graph-node-meta {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin-top: 12px;
  font-size: 12px;
  color: rgba(44, 36, 27, 0.66);
}

.graph-node-actions {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  margin-top: 14px;
}

.tree-scroll-hint {
  margin-top: 10px;
  color: rgba(44, 36, 27, 0.68);
  font-size: 13px;
}

.tree-aside {
  width: 320px;
  flex: 0 0 320px;
}

@media (max-width: 1024px) {
  .tree-layout {
    flex-direction: column;
  }

  .tree-aside {
    width: 100%;
    flex: 1 1 auto;
  }

  .graph-node {
    width: 232px;
  }
}

@media (max-width: 768px) {
  .tree-viewport {
    min-height: 620px;
  }

  .graph-node {
    width: 220px;
  }

  .graph-node-actions {
    gap: 6px;
  }
}
</style>
