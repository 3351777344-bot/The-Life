<template>
  <div class="tree-branch">
    <div class="tree-node-wrap">
      <div class="tree-connector" v-if="hasChildren"></div>
      <div
        class="tree-node-card"
        :class="[{ active: selectedNode === node.id }, levelClass]"
        @click.stop="$emit('select-node', node.id)"
        :title="node.description"
      >
        <span class="node-title">{{ node.title }}</span>
        <div class="node-branch-count" v-if="hasChildren">{{ children.length }}</div>
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
  gap: 12px;
  font-family: 'Segoe UI', 'PingFang SC', 'Microsoft YaHei', sans-serif;
}

.tree-node-wrap {
  position: relative;
  display: flex;
  justify-content: center;
  padding-top: 10px;
}

.tree-connector {
  position: absolute;
  top: 0;
  left: 50%;
  width: 2px;
  height: 12px;
  background: var(--glass-border);
  opacity: 0.6;
}

.tree-connector::after {
  content: '';
  position: absolute;
  top: 12px;
  left: 50%;
  width: 16px;
  height: 2px;
  transform: translateX(-50%);
  background: var(--glass-border);
  opacity: 0.6;
}

.tree-node-card {
  position: relative;
  min-width: 140px;
  max-width: 160px;
  padding: 12px 16px;
  background: linear-gradient(135deg, rgba(212, 165, 116, 0.15) 0%, rgba(53, 42, 32, 0.6) 100%);
  backdrop-filter: blur(15px);
  border: 1.5px solid var(--glass-border);
  border-radius: 12px;
  cursor: pointer;
  transition: var(--transition-smooth);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  overflow: hidden;
}

.tree-node-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(90deg, transparent, rgba(212, 165, 116, 0.8), transparent);
  opacity: 0;
  transition: opacity 0.3s;
}

.tree-node-card:hover {
  background: linear-gradient(135deg, rgba(180, 165, 140, 0.25) 0%, rgba(53, 42, 32, 0.75) 100%);
  border-color: rgba(180, 165, 140, 0.5);
  transform: translateY(-6px) scale(1.05);
  box-shadow: 0 8px 24px rgba(180, 165, 140, 0.2), 0 4px 12px rgba(0, 0, 0, 0.3);
}

.tree-node-card:hover::before {
  opacity: 1;
}

.tree-node-card.active {
  border-color: rgba(200, 180, 140, 0.7);
  background: linear-gradient(135deg, rgba(180, 165, 140, 0.25) 0%, rgba(53, 42, 32, 0.8) 100%);
  box-shadow: 0 8px 24px rgba(180, 165, 140, 0.3), 0 4px 12px rgba(0, 0, 0, 0.3);
  transform: translateY(-8px);
}

.tree-node-card.level-1 {
  min-width: 160px;
  max-width: 180px;
  padding: 14px 18px;
  border-width: 2px;
  background: linear-gradient(135deg, rgba(180, 165, 140, 0.12) 0%, rgba(53, 42, 32, 0.65) 100%);
}

.tree-node-card.level-1 .node-title {
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: 0.02em;
  color: #d0c0a0;
}

.tree-node-card.level-1:hover .node-title {
  color: #e0d4b8;
}

.tree-node-card.level-2 {
  min-width: 150px;
  max-width: 170px;
  padding: 12px 16px;
}

.tree-node-card.level-2 .node-title {
  font-size: 0.95rem;
  font-weight: 600;
}

.tree-node-card.level-3,
.tree-node-card.level-4,
.tree-node-card.level-5,
.tree-node-card.level-6 {
  min-width: 130px;
  max-width: 150px;
  padding: 10px 14px;
}

.tree-node-card.level-3 .node-title,
.tree-node-card.level-4 .node-title,
.tree-node-card.level-5 .node-title,
.tree-node-card.level-6 .node-title {
  font-size: 0.875rem;
  font-weight: 500;
}

.node-title {
  color: #c9b896;
  text-align: center;
  line-height: 1.5;
  word-break: break-word;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
  transition: color 0.3s, text-shadow 0.3s;
  display: block;
}

.tree-node-card:hover .node-title {
  color: #d4c4a8;
  text-shadow: 0 0 6px rgba(200, 180, 140, 0.3), 0 1px 3px rgba(0, 0, 0, 0.4);
}

.tree-node-card.active .node-title {
  color: #e0d0b0;
  text-shadow: 0 0 8px rgba(220, 200, 160, 0.4);
}

.node-branch-count {
  font-size: 0.7rem;
  font-weight: 500;
  color: rgba(180, 165, 140, 0.7);
  background: rgba(0, 0, 0, 0.25);
  padding: 2px 8px;
  border-radius: 10px;
  min-width: 24px;
  text-align: center;
  letter-spacing: 0.02em;
}

.tree-children {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 16px;
  padding: 6px 8px 0;
  position: relative;
  flex-wrap: wrap;
}

.tree-children::before {
  content: '';
  position: absolute;
  top: 0;
  left: 50%;
  width: calc(100% - 40px);
  height: 2px;
  transform: translateX(-50%);
  background: var(--glass-border);
  opacity: 0.4;
}

@media (max-width: 1024px) {
  .tree-branch {
    gap: 10px;
  }

  .tree-node-wrap {
    padding-top: 8px;
  }

  .tree-connector {
    height: 10px;
  }

  .tree-connector::after {
    top: 10px;
    width: 12px;
  }

  .tree-children {
    gap: 12px;
  }

  .tree-node-card.level-1 .node-title {
    font-size: 0.95rem;
  }

  .tree-node-card.level-2 .node-title {
    font-size: 0.9rem;
  }
}

@media (max-width: 768px) {
  .tree-branch {
    gap: 8px;
  }

  .tree-node-card {
    min-width: 120px;
    max-width: 140px;
    padding: 10px 12px;
  }

  .tree-node-card.level-1 {
    min-width: 130px;
    max-width: 150px;
  }

  .tree-node-card.level-1 .node-title,
  .tree-node-card.level-2 .node-title,
  .tree-node-card.level-3 .node-title,
  .tree-node-card.level-4 .node-title {
    font-size: 0.85rem;
  }

  .tree-children {
    flex-direction: column;
    gap: 10px;
    align-items: center;
  }

  .tree-children::before {
    display: none;
  }
}

@media (max-width: 480px) {
  .tree-node-card {
    min-width: 110px;
    max-width: 130px;
    padding: 8px 10px;
  }

  .tree-node-card.level-1 {
    min-width: 120px;
    max-width: 140px;
  }

  .node-title {
    font-size: 0.8rem;
  }

  .node-branch-count {
    font-size: 0.65rem;
    padding: 1px 6px;
  }
}
</style>