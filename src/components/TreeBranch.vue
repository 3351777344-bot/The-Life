<template>
  <div class="tree-branch" :style="{ '--branch-depth': String(level) }">
    <div class="tree-node-wrap">
      <div class="tree-connector" v-if="hasChildren"></div>
      <div
        class="node tree-node-card"
        :class="[{ active: selectedNode === node.id }, levelClass]"
        @click.stop="$emit('select-node', node.id)"
      >
        <div class="node-content">
          <h3>{{ node.title }}</h3>
          <p>{{ node.description }}</p>
          <div class="node-meta">
            <span>层级 {{ node.depth || level }}</span>
            <span>{{ node.children?.length || 0 }} 个分支</span>
          </div>
          <div class="node-actions">
            <button class="btn btn-secondary small" @click.stop="$emit('edit-node', node.id)">编辑</button>
            <button class="btn btn-secondary small" @click.stop="$emit('delete-node', node.id)">删除</button>
            <button class="btn btn-secondary small" @click.stop="$emit('extend-branch', node.id)">延伸分支</button>
          </div>
        </div>
      </div>
    </div>

    <div class="tree-children" v-if="children.length">
      <TreeBranch
        v-for="child in children"
        :key="child.id"
        :node="child"
        :selectedNode="selectedNode"
        :level="level + 1"
        @select-node="$emit('select-node', $event)"
        @edit-node="$emit('edit-node', $event)"
        @delete-node="$emit('delete-node', $event)"
        @extend-branch="$emit('extend-branch', $event)"
      />
    </div>
  </div>
</template>

<script setup>
import { computed, defineOptions } from 'vue'

defineOptions({ name: 'TreeBranch' })

const props = defineProps({
  node: { type: Object, required: true },
  nodes: { type: Array, required: true },
  selectedNode: { type: [String, Number], required: true },
  level: { type: Number, default: 1 }
})

defineEmits(['select-node', 'edit-node', 'delete-node', 'extend-branch'])

const children = computed(() => {
  const childIds = Array.isArray(props.node.children) ? props.node.children : []
  return childIds
    .map((childId) => props.nodes.find((candidate) => candidate.id === childId))
    .filter(Boolean)
})

const hasChildren = computed(() => children.value.length > 0)
const levelClass = computed(() => `level-${Math.min(props.level, 6)}`)
</script>

<style scoped>
.tree-branch {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  gap: 20px;
}

.tree-node-wrap {
  position: relative;
  display: flex;
  justify-content: center;
  padding-top: 14px;
}

.tree-connector {
  position: absolute;
  top: 0;
  left: 50%;
  width: 2px;
  height: 18px;
  background: rgba(44, 36, 27, 0.18);
}

.tree-connector::after {
  content: '';
  position: absolute;
  top: 18px;
  left: 50%;
  width: 24px;
  height: 2px;
  transform: translateX(-50%);
  background: rgba(44, 36, 27, 0.18);
}

.tree-node-card {
  min-width: 220px;
  max-width: 280px;
  transition: var(--transition-smooth);
}

.tree-node-card:hover {
  transform: translateY(-4px);
}

.tree-node-card.active {
  border-color: var(--color-important);
  box-shadow: 0 10px 30px rgba(226, 163, 90, 0.22);
}

.tree-node-card.level-1 {
  background: linear-gradient(180deg, rgba(255, 249, 239, 0.96), rgba(241, 226, 208, 0.9));
}

.tree-node-card.level-2 {
  background: linear-gradient(180deg, rgba(247, 243, 235, 0.96), rgba(236, 222, 205, 0.9));
}

.tree-node-card.level-3,
.tree-node-card.level-4,
.tree-node-card.level-5,
.tree-node-card.level-6 {
  background: rgba(247, 243, 235, 0.88);
}

.node-content {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.node-content h3 {
  font-size: 1.05rem;
}

.node-content p {
  font-size: 0.92rem;
  color: rgba(44, 36, 27, 0.78);
}

.node-meta {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  font-size: 12px;
  color: rgba(44, 36, 27, 0.68);
}

.node-actions {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.tree-children {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 28px;
  padding: 10px 12px 0;
  position: relative;
}

.tree-children::before {
  content: '';
  position: absolute;
  top: 0;
  left: 50%;
  width: calc(100% - 60px);
  height: 2px;
  transform: translateX(-50%);
  background: rgba(44, 36, 27, 0.16);
}

@media (max-width: 768px) {
  .tree-children {
    flex-direction: column;
    gap: 18px;
    align-items: center;
  }

  .tree-children::before {
    display: none;
  }
}
</style>