<script setup lang="ts">
import { ref } from 'vue'

import AppLaptopPreviewer from '../AppPreviewer/LaptopPreviewer.vue'
import PreviewModeSwitcher from './PreviewModeSwitcher.vue'
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

function toggle() {
  if (!runner.value) {
    return
  }
  if (document.fullscreenElement) {
    document.exitFullscreen()
  } else {
    runner.value.requestFullscreen()
  }
}
</script>

<template>
  <div class="layout-runner" ref="runner">
    <div class="layout-runner-navigator">
      <div></div>
      <div class="address-wrapper">https://helloword.com/sdfsfsdf/sggwefwfsdfsdfsdfsdfsf</div>

      <PreviewModeSwitcher
        :preview-mode="props.previewMode"
        @preview-mode-change="greet"
        @full-screen="toggle"
      />
    </div>
    <AppLaptopPreviewer />
  </div>
</template>

<style scoped>
.layout-runner {
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow: hidden;
  margin: 8px 40px;
  background-color: var(--color-white);
  border-radius: 8px;
  box-shadow:
    0 0 1px rgb(62 65 86 / 37.5%),
    0 12px 24px rgb(62 65 86 / 15%),
    0 20px 40px rgb(62 65 86 / 10%);
}

.layout-runner-navigator {
  height: 42px;
  flex-shrink: 0;
  display: grid;
  font-size: var(--font-size-normal);
  grid-template-columns: repeat(4, minmax(0, 1fr));
  align-items: center;
  gap: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  padding: 0 16px;
  border-bottom: 1px solid var(--color-gray-200);
  background-color: var(--color-gray-100);
}

.address-wrapper {
  grid-column: span 2 / span 2;
  border-radius: 6px;
  background-color: var(--color-gray-200);
  color: var(--color-gray-800);
  padding: 2px 32px 2px 12px;
  cursor: pointer;
  overflow: hidden;
  text-overflow: ellipsis;
}

.layout-runner-content-wrapper {
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow: auto;
}

.layout-runner-content-header {
  position: sticky;
  top: 0;
  z-index: 2;
}

.layout-runner-content-navigator {
  height: 56px;
  font-size: var(--font-size-normal);
  align-items: center;
  padding: 0 16px;
  background-color: var(--color-primary);
  border-bottom: 1px solid rgb(31 41 55 / 8%);
}

.layout-runner-content-title {
  display: flex;
  align-items: center;
  padding: 0 90px;
  height: 90px;
  font-size: 24px;
  font-weight: var(--font-weight-bolder);
  color: var(--color-white);
  background-color: var(--color-primary);
}

.layout-runner-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 90px;
}
</style>
