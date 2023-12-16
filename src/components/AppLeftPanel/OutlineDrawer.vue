<script setup lang="ts">
import { storeToRefs } from 'pinia'

import { blocksBaseMeta } from '@/constants/blocksBaseMeta'
import { useAppEditorStore } from '@/stores/appEditor'

const appEditorStore = useAppEditorStore()
const { blocks } = storeToRefs(appEditorStore)
</script>

<template>
  <div class="outline-drawer-wrapper">
    <h3 class="drawer-title">大纲</h3>
    <ul class="outline-list">
      <li class="outline-item" v-for="block in blocks" :key="block.type">
        <component :is="blocksBaseMeta[block.type].icon" />
        <span class="outline-item-name">
          {{ blocksBaseMeta[block.type].label }}
        </span>
        <span class="outline-item-title">
          {{ block.label }}
        </span>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.outline-drawer-wrapper {
  width: 100%;
}

.drawer-title {
  font-size: var(--font-size-large);
  font-weight: var(--font-weight-bolder);
  margin-bottom: 8px;
}

.outline-list {
  margin-top: 8px;
}

.outline-item {
  display: flex;
  align-items: center;
  padding: 6px 0;
  color: var(--color-text);
}

.outline-item-name {
  margin-left: 8px;
  font-size: var(--font-size-normal);
}

.outline-item-title {
  flex: 1;
  text-align: right;
  margin-left: 8px;
  font-size: var(--font-size-small);
  color: var(--color-gray-700);
}
</style>
