<script setup lang="ts">
import 'vue-json-pretty/lib/styles.css';

import { computed } from 'vue'
import VueJsonPretty from 'vue-json-pretty';

import { blocksBaseMeta } from '@/constants/blocksBaseMeta'
import { blocks } from '@/mocks/blocks'
import { useAppEditorStore } from '@/stores/appEditor'
import type { BlockInfo } from '@/types/block'

import ChartSetting from './ChartSetting.vue'
import QuoteSetting from './QuoteSetting.vue'

const appEditorStore = useAppEditorStore()
console.log('🚀 ~ file: AppRightPanel.vue:13 ~ appEditorStore:', appEditorStore)

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

const blockSetting = computed(() => {
  switch (currentBlockInfo.value?.type) {
    case 'quote': {
      return QuoteSetting
    }
    case 'chart': {
      return ChartSetting
    }
    default:
      return ''
  }
})
</script>

<template>
  <div class="app-right-panel-wrapper">
    <template v-if="currentBlockInfo">
      <div class="app-right-panel-header">
        {{ blocksBaseMeta[currentBlockInfo.type].name }}
      </div>
      <div class="app-right-panel-content">
        <!-- 策略模式渲染？？？ 动态组件-->
        <component
          :is="blockSetting"
          :blockInfo="currentBlockInfo"
          @change="(block: BlockInfo) => appEditorStore.updateBlock(block.id, block)"
        />
        <!-- <QuoteSetting
          :blockInfo="currentBlockInfo"
          @change="(val) => appEditorStore.updateBlock(currentBlockInfo?.id, val)"
        /> -->
        <!-- <div>
          {{ currentBlockInfo.type }}
        </div>
        <input v-if="currentBlockInfo.type === 'quote'" :defaultValue="currentBlockInfo.label" /> -->
      </div>
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
