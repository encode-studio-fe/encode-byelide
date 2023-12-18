<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { dropHandlers, type DropResult, smoothDnD } from 'smooth-dnd'
import { toRaw } from 'vue'

import { SmoothDndContainer } from '@/components/SmoothDnd/SmoothDndContainer'
import { SmoothDndDraggable } from '@/components/SmoothDnd/SmoothDndDraggable'
import { useAppEditorStore } from '@/stores/appEditor'
import { arrayMove } from '@/utils/array'

import BlockRenderer from './BlockRenderer.vue'

smoothDnD.dropHandler = dropHandlers.reactDropHandler().handler

// const props = defineProps<{
//   type: BlockType
// }>()
const appEditorStore = useAppEditorStore()

const { blocks } = storeToRefs(appEditorStore)
const { updateBlocks } = appEditorStore

const applyDrag = <T extends any[]>(arr: T, dragResult: DropResult) => {
  const { removedIndex, addedIndex, payload } = dragResult

  const result = [...arr]

  // 没做操作
  if (addedIndex === null) return result

  // 添加
  if (addedIndex !== null && removedIndex === null) {
    result.splice(addedIndex, 0, {
      id: `${Math.random()}`,
      ...payload
    })
  }

  // 移动
  if (addedIndex !== null && removedIndex !== null) {
    return arrayMove(result, removedIndex, addedIndex)
  }

  return result
}

// 需要保证 blocksMap 在 BlockRenderer 之前被注入，并且我们暂时使用的 Symbol 作为 key
// console.log(inject('blocksMap'))
</script>

<template>
  <smooth-dnd-container
    drag-handle-selector=".handle"
    group-name="blocks"
    orientation="vertical"
    tag="div"
    class="renderer-dnd-container"
    @drop="updateBlocks(applyDrag(toRaw(blocks), $event))"
  >
    <smooth-dnd-draggable v-for="(block, i) in blocks" :key="block.id">
      <BlockRenderer :block="block" :i="i" />
    </smooth-dnd-draggable>
  </smooth-dnd-container>
</template>

<style scoped>
.renderer-dnd-container {
  width: 100%;
}
.block-wrapper {
  position: relative;
  display: flex;
  width: 100%;
  margin-top: 16px;
  padding: 6px 4px;
  border-radius: 8px;
  background-color: var(--color-white);
  transition: box-shadow 0.2s ease-in-out;
}

.block {
  position: relative;
  z-index: 1;
}

.block-wrapper-indicator {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  border-radius: 8px;
  pointer-events: none;
  user-select: none;
}

.block-wrapper-indicator.shown {
  border: 1px dashed var(--color-gray-300);
}

.block-wrapper-indicator.selected {
  border: 1px solid var(--color-primary);
}

.block-toolbar {
  display: flex;
  align-items: center;
  position: absolute;
  left: 0;
  top: -36px;
  z-index: 1;
  padding: 4px 8px;
  gap: 4px;
  background-color: var(--color-black);
  border-radius: 6px;
  pointer-events: visible;
}

.block-toolbar-item {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 22px;
  height: 22px;
  border-radius: 4px;
  color: var(--color-white);
  cursor: pointer;
}

.block-toolbar-item:nth-of-type(1) {
  cursor: grab;
}

.block-toolbar-item:hover {
  background-color: var(--color-gray-800);
  transition: all 0.2s ease-in-out;
}

.block-wrapper.debug:hover .block-wrapper-senior {
  border-style: solid;
  transition: box-shadow 0.2s ease-in-out;
}
</style>

<style lang="css">
.smooth-dnd-draggable-wrapper {
  overflow: visible !important;
}
</style>
