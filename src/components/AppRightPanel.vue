<script setup lang="ts">
import { blocks } from '@/mocks/blocks'
import { blocksBaseMeta } from '@/constants/blocksBaseMeta'
import { useAppEditorStore } from '@/stores/appEditor'
import { computed } from 'vue'

const appEditorStore = useAppEditorStore()

const blocksMap = computed(() => {
  return blocks.reduce<Record<string, (typeof blocks)[0]>>((acc, cur) => {
    acc[cur.id] = cur
    return acc
  }, {})
})

const currentBlockInfo = computed(() => {
  if (!appEditorStore.currentBlockId) return null
  return blocksMap.value[appEditorStore.currentBlockId]
})
</script>

<template>
  <div class="app-right-panel-wrapper">
    <template v-if="currentBlockInfo">
      <div class="app-right-panel-header">
        {{ blocksBaseMeta[currentBlockInfo.type].name }}
      </div>
      <div class="app-right-panel-content">{{ currentBlockInfo.type }}</div>
    </template>
  </div>
</template>

<style scoped>
.app-right-panel-wrapper {
  position: relative;
  z-index: 4;
  width: var(--panel-width);
  height: 100%;
  box-shadow: var(--color-gray-300) 1px 0 0;
}

.app-right-panel-header {
  font-size: var(--font-size-normal);
  font-weight: var(--font-weight-bolder);
  height: 44px;
  line-height: 44px;
  padding: 0 16px 0 20px;
}

.app-right-panel-content {
  padding: 0 16px 0 20px;
}
</style>
