<script setup lang="ts">
import { ref } from 'vue'

import AppMobilePreviewer from '../AppPreviewer/MobilePreviewer.vue'
import PreviewModeSwitcher from './PreviewModeSwitcher.vue'
import StatusBar from './StatusBar.vue'
import type { PreviewType } from './type'

const props = defineProps<{
  previewMode?: PreviewType
}>()
const runner = ref<HTMLElement | null>(null)

const emit = defineEmits<{
  'preview-mode-change': [mode: PreviewType]
}>()

function greet(mode: PreviewType) {
  emit('preview-mode-change', mode)
}
</script>

<template>
  <div class="layout-runner" ref="runner">
    <div class="layout-runner-navigator">
      <PreviewModeSwitcher :preview-mode="props.previewMode" @preview-mode-change="greet" />
    </div>
    <div class="simulator-wrapper">
      <div class="simulator-header">
        <StatusBar />
      </div>
      <div class="simulator-content">
        <AppMobilePreviewer />
      </div>
    </div>
  </div>
</template>

<style scoped>
.layout-runner {
  flex: 1;
}

.layout-runner-navigator {
  height: 42px;
  display: grid;
  font-size: var(--font-size-normal);
  align-items: center;
  justify-content: flex-end;
  gap: 8px;
  padding: 0 16px;
  background-color: var(--color-gray-100);
  width: 100%;
}

.simulator-wrapper {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 393px;
  height: 852px;
  margin: 0 auto;
  border-radius: 55px;
  overflow: hidden;
  overflow-y: auto;
  background-color: var(--color-white);
  box-shadow:
    0 0 0 5px #151515,
    0 0 0 6px var(--color-primary),
    0 -7.5px 1.5px rgb(255 255 255 / 40%),
    7.5px 0 1.5px rgb(255 255 255 / 25%),
    -7.5px 0 1.5px rgb(255 255 255 / 40%),
    0 7.5px 1.5px rgb(255 255 255 / 25%),
    0 0 0 9px var(--color-primary),
    6px 8px 16px rgb(0 0 0 / 25%),
    20px 32px 72px rgb(0 0 0 / 20%);
}

.simulator-header {
  position: sticky;
  top: 0;
  z-index: 2;
}

.simulator-navigator {
  display: flex;
  height: 56px;
  align-items: center;
  padding: 0 12px;
  font-size: 18px;
  font-weight: var(--font-weight-bolder);
  color: var(--color-white);
  background-color: var(--color-primary);
  border-bottom: 1px solid rgb(31 41 55 / 8%);
}

.simulator-title {
  height: 90px;
  background-color: var(--color-primary);
}

.simulator {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 12px 32px;
  flex: 1;
}
.simulator-content {
  flex: 1;
  overflow: hidden;
  overflow-y: auto;
}

.simulator-content::-webkit-scrollbar {
  display: none;
}
</style>
