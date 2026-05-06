<template>
  <div class="destiny-view">
    <canvas ref="dnaCanvas" class="dna-helix-bg"></canvas>
    <div class="dna-particles"></div>
    <div class="tree-layout">
      <div class="tree-container">
        <div class="tree-header">
          <div class="header-content">
            <div class="header-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="url(#headerGrad)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <defs>
                  <linearGradient id="headerGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stop-color="#ffd700"/>
                    <stop offset="50%" stop-color="#d4a574"/>
                    <stop offset="100%" stop-color="#cd7f32"/>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div class="header-text">
              <h1 class="title">命轨</h1>
              <p>以图谱方式展开你的命轨分支</p>
            </div>
          </div>
          <div class="tree-actions">
            <button class="btn btn-secondary small" @click="$emit('add-node')">
              <span class="btn-icon">+</span>添加节点</button>
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
                  <defs>
                    <linearGradient id="edgeGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stop-color="#d4a574"/>
                      <stop offset="100%" stop-color="#e8c49a"/>
                    </linearGradient>
                    <linearGradient id="edgeGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stop-color="#cd7f32"/>
                      <stop offset="100%" stop-color="#d4a574"/>
                    </linearGradient>
                    <filter id="glow">
                      <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                      <feMerge>
                        <feMergeNode in="coloredBlur"/>
                        <feMergeNode in="SourceGraphic"/>
                      </feMerge>
                    </filter>
                  </defs>
                  <path
                    v-for="edge in graphLayout.edges"
                    :key="`${edge.from}-${edge.to}`"
                    :d="edge.path"
                    class="graph-edge"
                    :class="`depth-${Math.min(edge.depth, 6)}`"
                    filter="url(#glow)"
                  />
                  <circle
                    v-for="edge in graphLayout.edges"
                    :key="`${edge.from}-${edge.to}-dot`"
                    :cx="edge.targetX"
                    :cy="edge.targetY"
                    r="4"
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
                  <div class="crystal-shard crystal-shard-1"></div>
                  <div class="crystal-shard crystal-shard-2"></div>
                  <div class="crystal-shard crystal-shard-3"></div>
                  <div class="graph-node-glow"></div>
                  <div class="node-hologram-ring"></div>
                  <button 
                    class="node-delete-btn"
                    @click.stop="$emit('delete-node', node.id)"
                    :title="`删除 ${node.title}`"
                  >×</button>
                  <div class="graph-node-frame">
                    <div class="crystal-inner"></div>
                    <h3>{{ node.title }}</h3>
                    <span v-if="node.childrenCount > 0" class="node-branch-count">{{ node.childrenCount }}</span>
                    <div class="node-scan-line"></div>
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
import { computed, ref, onMounted, onUnmounted } from 'vue'
import * as THREE from 'three'

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

const dnaCanvas = ref(null)
let dnaAnimationId = null
let scene, camera, renderer, helixGroup, particleSystem

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

const initDNAHelix = () => {
  if (!dnaCanvas.value) return
  
  try {
    const canvas = dnaCanvas.value
    const width = window.innerWidth
    const height = window.innerHeight
    
    canvas.width = width
    canvas.height = height
    
    scene = new THREE.Scene()
    camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000)
    camera.position.z = 50
    
    renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true })
    renderer.setSize(width, height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    
    helixGroup = new THREE.Group()
    scene.add(helixGroup)
    
    const strandMaterial1 = new THREE.MeshBasicMaterial({
      color: 0xffd700,
      transparent: true,
      opacity: 0.6
    })
    
    const strandMaterial2 = new THREE.MeshBasicMaterial({
      color: 0xd4a574,
      transparent: true,
      opacity: 0.6
    })
    
    const basePairMaterial = new THREE.MeshBasicMaterial({
      color: 0xcd7f32,
      transparent: true,
      opacity: 0.3
    })
    
    const helixHeight = 200
    const helixRadius = 15
    const turns = 4
    const pointsPerTurn = 20
    
    for (let i = 0; i < turns * pointsPerTurn; i++) {
      const t = i / (turns * pointsPerTurn)
      const angle = t * Math.PI * 2 * turns
      const y = (t - 0.5) * helixHeight
      
      const x1 = Math.cos(angle) * helixRadius
      const z1 = Math.sin(angle) * helixRadius
      const sphere1 = new THREE.Mesh(
        new THREE.SphereGeometry(1.5, 16, 16),
        strandMaterial1
      )
      sphere1.position.set(x1, y, z1)
      helixGroup.add(sphere1)
      
      const x2 = Math.cos(angle + Math.PI) * helixRadius
      const z2 = Math.sin(angle + Math.PI) * helixRadius
      const sphere2 = new THREE.Mesh(
        new THREE.SphereGeometry(1.5, 16, 16),
        strandMaterial2
      )
      sphere2.position.set(x2, y, z2)
      helixGroup.add(sphere2)
      
      if (i % 3 === 0) {
        const connectorGeometry = new THREE.CylinderGeometry(0.3, 0.3, helixRadius * 2, 8)
        const connector = new THREE.Mesh(connectorGeometry, basePairMaterial)
        connector.position.set(0, y, 0)
        connector.rotation.z = Math.PI / 2
        connector.rotation.y = -angle
        helixGroup.add(connector)
      }
    }
    
    const particleCount = 500
  const particleGeometry = new THREE.BufferGeometry()
  const positions = new Float32Array(particleCount * 3)
  const colors = new Float32Array(particleCount * 3)
  
  for (let i = 0; i < particleCount; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 200
    positions[i * 3 + 1] = (Math.random() - 0.5) * 200
    positions[i * 3 + 2] = (Math.random() - 0.5) * 200
    
    const colorChoice = Math.random()
    if (colorChoice < 0.33) {
      colors[i * 3] = 1.0
      colors[i * 3 + 1] = 0.84
      colors[i * 3 + 2] = 0.0
    } else if (colorChoice < 0.66) {
      colors[i * 3] = 0.83
      colors[i * 3 + 1] = 0.65
      colors[i * 3 + 2] = 0.45
    } else {
      colors[i * 3] = 0.8
      colors[i * 3 + 1] = 0.5
      colors[i * 3 + 2] = 0.2
    }
  }
  
  particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
  particleGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3))
  
  const particleMaterial = new THREE.PointsMaterial({
    size: 1.5,
    vertexColors: true,
    transparent: true,
    opacity: 0.6,
    blending: THREE.AdditiveBlending
  })
  
  particleSystem = new THREE.Points(particleGeometry, particleMaterial)
    scene.add(particleSystem)
    
    animateDNA()
  } catch (error) {
    console.warn('DNA helix initialization failed:', error)
    if (renderer) {
      renderer.dispose()
    }
  }
}

const animateDNA = () => {
  dnaAnimationId = requestAnimationFrame(animateDNA)
  
  if (helixGroup) {
    helixGroup.rotation.y += 0.002
    helixGroup.rotation.x = Math.sin(Date.now() * 0.0003) * 0.1
  }
  
  if (particleSystem) {
    particleSystem.rotation.y += 0.0005
    const positions = particleSystem.geometry.attributes.position.array
    for (let i = 0; i < positions.length; i += 3) {
      positions[i + 1] += Math.sin(Date.now() * 0.001 + i) * 0.02
    }
    particleSystem.geometry.attributes.position.needsUpdate = true
  }
  
  renderer.render(scene, camera)
}

const handleResize = () => {
  if (!dnaCanvas.value || !renderer || !camera) return
  
  const width = window.innerWidth
  const height = window.innerHeight
  
  camera.aspect = width / height
  camera.updateProjectionMatrix()
  renderer.setSize(width, height)
}

onMounted(() => {
  if (dnaCanvas.value) {
    initDNAHelix()
    window.addEventListener('resize', handleResize)
  }
})

onUnmounted(() => {
  if (dnaAnimationId) {
    cancelAnimationFrame(dnaAnimationId)
  }
  window.removeEventListener('resize', handleResize)
  if (renderer) {
    renderer.dispose()
  }
})

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
.dna-helix-bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 0;
  opacity: 0.5;
}

.dna-particles {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 0;
  background: 
    radial-gradient(ellipse at 20% 30%, rgba(255, 230, 150, 0.12) 0%, transparent 50%),
    radial-gradient(ellipse at 80% 70%, rgba(255, 215, 100, 0.1) 0%, transparent 50%);
}

.destiny-view {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
}

.tree-layout {
  display: flex;
  gap: 16px;
  align-items: stretch;
  height: 100vh;
  position: relative;
  z-index: 1;
}

.tree-container {
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
}

.tree-header {
  margin-bottom: 8px;
  padding: 12px 0 16px 0;
  border-bottom: 1px solid rgba(255, 215, 140, 0.4);
  flex: 0 0 auto;
  background: linear-gradient(90deg, rgba(255, 230, 150, 0.1) 0%, rgba(255, 248, 235, 0.05) 50%, rgba(255, 215, 100, 0.08) 100%);
  border-radius: 12px 12px 0 0;
  backdrop-filter: blur(10px);
}

.header-content {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 8px;
}

.header-icon {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, rgba(255, 230, 150, 0.25) 0%, rgba(255, 215, 100, 0.15) 100%);
  border: 1px solid rgba(255, 215, 140, 0.5);
  border-radius: 12px;
  box-shadow: 0 0 30px rgba(255, 215, 100, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.15);
}

.header-text .title {
  font-size: 1.4rem;
  margin: 0 0 4px 0;
  color: var(--color-accent-gold);
  font-weight: 700;
  text-shadow: 0 0 30px rgba(255, 230, 150, 0.7);
  background: linear-gradient(90deg, #ffe066, #ffd700, #ffe066);
  background-size: 200% 100%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: shimmer 3s ease-in-out infinite;
}

@keyframes shimmer {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}

.tree-header p {
  margin: 6px 0 0 60px;
  color: var(--color-text-muted);
  font-size: 0.85rem;
}

.tree-actions {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  margin-top: 10px;
}

.tree-actions .btn {
  position: relative;
  overflow: hidden;
}

.tree-actions .btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
  transition: left 0.5s ease;
}

.tree-actions .btn:hover::before {
  left: 100%;
}

.btn-icon {
  font-weight: 700;
  margin-right: 4px;
}

.tree-canvas {
  position: relative;
  overflow: hidden;
  flex: 1;
  background: 
    radial-gradient(ellipse at 50% 50%, rgba(212, 165, 116, 0.03) 0%, transparent 70%);
  border: 1px solid rgba(212, 165, 116, 0.1);
  border-radius: 8px;
  box-shadow: inset 0 0 60px rgba(0, 0, 0, 0.3);
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
  stroke: url(#edgeGrad1);
  stroke-width: 2;
  stroke-linecap: round;
  vector-effect: non-scaling-stroke;
  opacity: 0.7;
}

.graph-edge.depth-2 {
  stroke: url(#edgeGrad2);
  opacity: 0.6;
}

.graph-edge.depth-3,
.graph-edge.depth-4,
.graph-edge.depth-5,
.graph-edge.depth-6 {
  stroke: rgba(205, 127, 50, 0.5);
  opacity: 0.5;
}

.graph-edge-dot {
  fill: #ffd700;
  filter: drop-shadow(0 0 8px rgba(255, 215, 0, 0.8));
}

.graph-node {
  position: absolute;
  width: 100px;
  transform: translate(-50%, -50%);
  cursor: pointer;
}

.crystal-shard {
  position: absolute;
  pointer-events: none;
  opacity: 0.6;
}

.crystal-shard-1 {
  top: -5px;
  left: 10%;
  width: 30%;
  height: 8px;
  background: linear-gradient(90deg, transparent, rgba(255, 215, 0, 0.4), transparent);
  transform: rotate(-15deg);
  filter: blur(2px);
}

.crystal-shard-2 {
  bottom: -3px;
  right: 15%;
  width: 25%;
  height: 6px;
  background: linear-gradient(90deg, transparent, rgba(212, 165, 116, 0.5), transparent);
  transform: rotate(10deg);
  filter: blur(1px);
}

.crystal-shard-3 {
  top: 50%;
  left: -8px;
  width: 6px;
  height: 40%;
  background: linear-gradient(180deg, rgba(255, 215, 0, 0.3), transparent);
  transform: translateY(-50%);
  filter: blur(2px);
}

.graph-node-glow {
  position: absolute;
  inset: -15px;
  border-radius: 20px;
  background: radial-gradient(circle, rgba(255, 215, 0, 0.15) 0%, transparent 70%);
  filter: blur(15px);
  opacity: 0;
  transition: opacity 0.4s ease;
  pointer-events: none;
  animation: pulse-glow 3s ease-in-out infinite;
}

@keyframes pulse-glow {
  0%, 100% { opacity: 0.3; transform: scale(1); }
  50% { opacity: 0.6; transform: scale(1.05); }
}

.node-hologram-ring {
  position: absolute;
  inset: -20px;
  border-radius: 50%;
  border: 1px solid rgba(255, 215, 0, 0.2);
  opacity: 0;
  transition: opacity 0.3s ease, transform 0.3s ease;
  pointer-events: none;
}

.graph-node:hover .node-hologram-ring {
  opacity: 1;
  transform: scale(1.2);
  animation: ring-rotate 4s linear infinite;
}

@keyframes ring-rotate {
  from { transform: rotate(0deg) scale(1.2); }
  to { transform: rotate(360deg) scale(1.2); }
}

.node-delete-btn {
  position: absolute;
  top: -10px;
  right: -10px;
  width: 26px;
  height: 26px;
  border-radius: 50%;
  background: linear-gradient(135deg, #ff6b6b 0%, #ff4444 100%);
  border: 2px solid rgba(53, 42, 32, 0.8);
  color: white;
  font-size: 18px;
  font-weight: 700;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  opacity: 0;
  transform: scale(0.8);
  transition: all 0.25s cubic-bezier(0.68, -0.3, 0.265, 1.3);
  z-index: 5;
  line-height: 1;
  box-shadow: 0 4px 15px rgba(255, 107, 107, 0.5);
}

.graph-node:hover .node-delete-btn {
  opacity: 1;
  transform: scale(1);
  box-shadow: 0 6px 20px rgba(255, 107, 107, 0.7);
}

.node-delete-btn:hover {
  background: linear-gradient(135deg, #ff4444 0%, #cc0000 100%);
  transform: scale(1.1) !important;
}

.graph-node-frame {
  position: relative;
  padding: 10px 12px;
  border-radius: 12px;
  background: linear-gradient(135deg, 
    rgba(255, 215, 0, 0.12) 0%, 
    rgba(212, 165, 116, 0.08) 30%,
    rgba(205, 127, 50, 0.06) 70%,
    rgba(53, 42, 32, 0.5) 100%);
  border: 1px solid rgba(212, 165, 116, 0.4);
  box-shadow: 
    0 8px 32px rgba(0, 0, 0, 0.4),
    inset 0 1px 0 rgba(255, 215, 140, 0.15),
    inset 0 -1px 0 rgba(0, 0, 0, 0.2),
    0 0 20px rgba(255, 215, 0, 0.1);
  backdrop-filter: blur(20px);
  transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
  min-height: 36px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

.graph-node-frame::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(255, 215, 0, 0.6), transparent);
}

.graph-node-frame::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(205, 127, 50, 0.3), transparent);
}

.crystal-inner {
  position: absolute;
  inset: 2px;
  border-radius: 10px;
  background: linear-gradient(135deg, 
    rgba(255, 255, 255, 0.05) 0%, 
    transparent 50%);
  pointer-events: none;
}

.node-scan-line {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(90deg, transparent, rgba(255, 215, 0, 0.8), transparent);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.graph-node:hover .node-scan-line {
  opacity: 1;
  animation: scan 1.5s ease-in-out infinite;
}

@keyframes scan {
  0% { top: 0; opacity: 0; }
  10% { opacity: 1; }
  90% { opacity: 1; }
  100% { top: 100%; opacity: 0; }
}

.graph-node:hover .graph-node-frame {
  transform: translateY(-6px) scale(1.1);
  border-color: rgba(255, 215, 0, 0.6);
  box-shadow: 
    0 16px 40px rgba(255, 215, 0, 0.25),
    0 0 40px rgba(255, 215, 0, 0.2),
    inset 0 1px 0 rgba(255, 215, 140, 0.3);
}

.graph-node:hover .graph-node-glow,
.graph-node.active .graph-node-glow {
  opacity: 1;
}

.graph-node.active .graph-node-frame {
  border-color: #ffd700;
  background: linear-gradient(135deg, 
    rgba(255, 215, 0, 0.25) 0%, 
    rgba(212, 165, 116, 0.15) 50%,
    rgba(205, 127, 50, 0.1) 100%);
  box-shadow: 
    0 20px 50px rgba(255, 215, 0, 0.4),
    0 0 50px rgba(255, 215, 0, 0.3),
    inset 0 1px 0 rgba(255, 215, 140, 0.4);
  transform: translateY(-10px) scale(1.12);
}

.graph-node.active .node-hologram-ring {
  opacity: 1;
  border-color: rgba(255, 215, 0, 0.4);
}

.graph-node.root .graph-node-frame {
  background: linear-gradient(135deg, 
    rgba(255, 215, 0, 0.2) 0%, 
    rgba(212, 165, 116, 0.15) 50%,
    rgba(53, 42, 32, 0.6) 100%);
  border-width: 2px;
  border-color: #ffd700;
  box-shadow: 
    0 0 30px rgba(255, 215, 0, 0.5),
    0 8px 32px rgba(0, 0, 0, 0.4),
    inset 0 1px 0 rgba(255, 215, 140, 0.3);
}

.graph-node.depth-2 .graph-node-frame,
.graph-node.depth-3 .graph-node-frame,
.graph-node.depth-4 .graph-node-frame,
.graph-node.depth-5 .graph-node-frame,
.graph-node.depth-6 .graph-node-frame {
  background: linear-gradient(135deg, 
    rgba(212, 165, 116, 0.1) 0%, 
    rgba(205, 127, 50, 0.06) 50%,
    rgba(53, 42, 32, 0.45) 100%);
}

.graph-node h3 {
  font-size: 0.75rem;
  margin: 0;
  color: #ffd700;
  font-weight: 700;
  text-shadow: 0 0 10px rgba(255, 215, 0, 0.6), 0 1px 2px rgba(0, 0, 0, 0.8);
  line-height: 1.2;
  text-align: center;
  word-break: break-word;
  position: relative;
  z-index: 1;
}

.node-branch-count {
  display: block;
  font-size: 10px;
  color: #d4a574;
  margin-top: 4px;
  font-weight: 600;
  text-shadow: 0 0 8px rgba(212, 165, 116, 0.5);
  position: relative;
  z-index: 1;
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
  font-weight: 700;
  margin: 0;
  color: #c9b896;
  font-family: 'Segoe UI', 'PingFang SC', 'Microsoft YaHei', sans-serif;
  letter-spacing: 0.02em;
}

.badge {
  background: rgba(180, 165, 140, 0.25);
  color: #c9b896;
  padding: 2px 8px;
  border-radius: 4px;
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.03em;
}

.node-preview {
  margin: 16px 16px 16px 16px;
  padding: 12px;
  border-radius: 8px;
  background: rgba(53, 42, 32, 0.4);
  border: 1px solid var(--glass-border);
}

.node-preview strong {
  display: block;
  color: #d0c0a0;
  font-size: 0.95rem;
  margin-bottom: 6px;
  font-weight: 600;
  font-family: 'Segoe UI', 'PingFang SC', 'Microsoft YaHei', sans-serif;
}

.node-preview p {
  color: rgba(212, 165, 116, 0.8);
  font-size: 0.85rem;
  margin: 0;
  line-height: 1.5;
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
  padding: 10px 6px;
  border-radius: 6px;
  background: rgba(212, 165, 116, 0.08);
  border: 1px solid var(--glass-border);
}

.stat-card span {
  font-size: 0.7rem;
  color: rgba(212, 165, 116, 0.6);
  margin-bottom: 4px;
  font-weight: 500;
  letter-spacing: 0.01em;
}

.stat-card strong {
  font-size: 1rem;
  color: #d0c0a0;
  font-weight: 700;
  font-family: 'Segoe UI', 'PingFang SC', 'Microsoft YaHei', sans-serif;
}

.node-quick {
  display: flex;
  gap: 6px;
  margin: 0 16px 12px 16px;
}

.node-quick .btn {
  flex: 1;
  font-size: 0.8rem;
  padding: 6px 8px;
  font-weight: 500;
  font-family: 'Segoe UI', 'PingFang SC', 'Microsoft YaHei', sans-serif;
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
  padding: 12px;
  border-radius: 8px;
  background: rgba(53, 42, 32, 0.4);
  border: 1px solid var(--glass-border);
}

.tree-hints h4 {
  font-size: 0.85rem;
  color: #c9b896;
  margin: 0 0 8px 0;
  font-weight: 600;
  font-family: 'Segoe UI', 'PingFang SC', 'Microsoft YaHei', sans-serif;
}

.tree-hints p {
  font-size: 0.8rem;
  color: rgba(212, 165, 116, 0.7);
  margin: 4px 0;
  line-height: 1.5;
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
