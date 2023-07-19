<!-- 放弃这个方案，因为他的交互很不好，这正是做技术选型需要考量的 -->

<!-- <script setup lang="ts">
import { defineAsyncComponent, ref } from 'vue'
import Draggable from 'vuedraggable'
import { Drag, Delete } from '@icon-park/vue-next'
import type { BlockType } from './types'
import { useEnvStore } from '@/stores/debug'
import { useAppEditorStore } from '@/stores/appEditor'

// const props = defineProps<{
//   type: BlockType
// }>()

const envStore = useEnvStore()
const appEditorStore = useAppEditorStore()

const baseBlocks = [
  {
    type: 'quote',
    label: '引述',
    material: defineAsyncComponent(() => import('./basic/QuoteBlock.vue')),
    props: {
      title: '标题',
      subTitle: '副标题'
    }
  },
  {
    type: 'heroTitle',
    label: '标题',
    material: defineAsyncComponent(() => import('./basic/HeroTitleBlock.vue')),
    props: {
      title: '标题',
      subTitle: '副标题'
    }
  },
  {
    type: 'view',
    label: '视图',
    material: defineAsyncComponent(() => import('./basic/ViewBlock.vue')),
    props: {
      title: '标题',
      subTitle: '副标题'
    }
  },
  {
    type: 'chart',
    label: '图表',
    material: defineAsyncComponent(() => import('./basic/ChartBlock.vue')),
    props: {
      title: '标题',
      subTitle: '副标题'
    }
  },
  {
    type: 'image',
    label: '图片',
    material: defineAsyncComponent(() => import('./basic/ImageBlock.vue')),
    props: {
      title: '标题',
      subTitle: '副标题'
    }
  }
]
class BlockSuite {
  private blocks = baseBlocks
  constructor() {}
  getBlocksMap() {
    return Object.fromEntries(this.blocks.map((block) => [block.type, block]))
  }
  getBlocks() {
    return this.blocks
  }
  addBlock(block: any) {
    this.blocks.push(block)
  }
  hasBlock(type: BlockType) {
    return !!this.getBlocksMap()[type]
  }
}

const blockSuite: any = new BlockSuite()

console.log(
  '🚀 ~ file: BlockRenderer.vue:55 ~ blockSuite.hasBlock(button):',
  blockSuite.hasBlock('button')
)

blockSuite.addBlock({
  type: 'button',
  label: '按钮',
  material: defineAsyncComponent(() => import('./external/ButtonBlock.vue')),
  props: {
    title: '标题',
    subTitle: '副标题'
  }
})
blockSuite.addBlock({
  type: 'form',
  label: '表单',
  material: defineAsyncComponent(() => import('./external/FormBlock.vue')),
  props: {
    title: '标题',
    subTitle: '副标题'
  }
})
blockSuite.addBlock({
  type: 'notes',
  label: '笔记',
  material: defineAsyncComponent(() => import('./external/NotesBlock.vue')),
  props: {
    title: '标题',
    subTitle: '副标题'
  }
})
console.log(
  '🚀 ~ file: BlockRenderer.vue:68 ~ blockSuite.hasBlock(button):',
  blockSuite.hasBlock('button')
)
const blocks = blockSuite.getBlocks()

const b = ref(blocks)
console.log('🚀 ~ file: BlockRenderer.vue:116 ~ blocks:', blocks)
</script>

<template>
  <draggable v-model="b" item-key="type" handle=".handle">
    <template #item="{ element }">
      <div
        v-if="element"
        class="block-wrapper"
        :id="element.type"
        @click="appEditorStore.selectBlock(element.type)"
      >
        <component :is="element.material" class="block" />
        <div
          :class="[
            'block-wrapper-indicator',
            { shown: envStore.debug, selected: appEditorStore.currentBlock === element.type }
          ]"
        >
          <div class="block-toolbar" v-if="appEditorStore.currentBlock === element.type">
            <div class="block-toolbar-item handle">
              <drag />
            </div>
            <div class="block-toolbar-item">
              <delete />
            </div>
          </div>
        </div>
      </div>
    </template>
  </draggable>
</template>

<style scoped>
.block-wrapper {
  position: relative;
  display: flex;
  width: 100%;
  margin-top: 16px;
  padding: 6px 0;
  border-radius: 8px;
  transition: box-shadow 0.2s ease-in-out;
}
.block {
  position: relative;
  z-index: 1;
}
.block-wrapper-indicator {
  content: '';
  position: absolute;
  width: calc(100% + 16px);
  height: 100%;
  left: -8px;
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
</style> -->
