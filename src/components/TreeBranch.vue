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
  background: linear-gradient(135deg, rgba(212, 165, 116, 0.25) 0%, rgba(53, 42, 32, 0.75) 100%);
  border-color: var(--glass-border-hover);
  transform: translateY(-6px) scale(1.05);
  box-shadow: 0 8px 24px rgba(212, 165, 116, 0.3), var(--glow-gold);
}

.tree-node-card:hover::before {
  opacity: 1;
}

.tree-node-card.active {
  border-color: var(--color-accent-gold-bright);
  background: linear-gradient(135deg, rgba(212, 165, 116, 0.3) 0%, rgba(53, 42, 32, 0.8) 100%);
  box-shadow: 0 8px 24px rgba(212, 165, 116, 0.5), 0 0 30px rgba(212, 165, 116, 0.3);
  transform: translateY(-8px);
}

.tree-node-card.level-1 {
  min-width: 160px;
  max-width: 180px;
  padding: 14px 18px;
  border-width: 2px;
  font-size: 1.05rem;
  background: linear-gradient(135deg, rgba(255, 215, 0, 0.15) 0%, rgba(53, 42, 32, 0.7) 100%);
}

.tree-node-card.level-2 {
  min-width: 150px;
  max-width: 170px;
  padding: 12px 16px;
  font-size: 1rem;
}

.tree-node-card.level-3,
.tree-node-card.level-4,
.tree-node-card.level-5,
.tree-node-card.level-6 {
  min-width: 130px;
  max-width: 150px;
  padding: 10px 14px;
  font-size: 0.95rem;
}

.node-title {
  font-weight: 600;
  color: var(--color-accent-gold-bright);
  text-align: center;
  line-height: 1.4;
  word-break: break-word;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);
  transition: color 0.3s;
  display: block;
}

.tree-node-card:hover .node-title {
  color: #ffff00;
  text-shadow: 0 0 10px rgba(255, 255, 0, 0.5), 0 2px 8px rgba(0, 0, 0, 0.5);
}

.tree-node-card.active .node-title {
  color: #ffff00;
  text-shadow: 0 0 12px rgba(255, 255, 0, 0.6);
}

.node-branch-count {
  font-size: 0.75rem;
  color: var(--color-text-muted);
  background: rgba(0, 0, 0, 0.3);
  padding: 2px 8px;
  border-radius: 10px;
  opacity: 0.8;
  min-width: 24px;
  text-align: center;
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
}

@media (max-width: 768px) {
  .tree-branch {
    gap: 8px;
  }

  .tree-node-card {
    min-width: 120px;
    max-width: 140px;
    padding: 10px 12px;
    font-size: 0.9rem;
  }

  .tree-node-card.level-1 {
    min-width: 130px;
    max-width: 150px;
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
    font-size: 0.85rem;
  }

  .tree-node-card.level-1 {
    min-width: 120px;
    max-width: 140px;
  }

  .node-title {
    font-size: 0.85rem;
  }

  .node-branch-count {
    font-size: 0.7rem;
  }
}
</style>