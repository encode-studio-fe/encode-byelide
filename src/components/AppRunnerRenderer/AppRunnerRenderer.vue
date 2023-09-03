<script setup lang="ts">
import { onMounted, onUnmounted, provide, ref } from 'vue'

import { isMobileTablet } from '@/utils/detect'

import LaptopPreviewer from '../AppPreviewer/LaptopPreviewer.vue'
import MobilePreviewer from '../AppPreviewer/MobilePreviewer.vue'

provide('editable', false)

const device = ref<'laptop' | 'mobile'>('laptop')

const resize = () => {
  const isMobile = isMobileTablet()

  if (isMobile) {
    device.value = 'mobile'
  } else {
    device.value = 'laptop'
  }
}

onMounted(() => {
  const isMobile = isMobileTablet()

  if (isMobile) {
    device.value = 'mobile'
  }

  window.addEventListener('resize', resize, false)
})

onUnmounted(() => {
  window.removeEventListener('resize', resize, false)
})
</script>

<template>
  <LaptopPreviewer v-memo="[device === 'laptop']" v-if="device === 'laptop'" />
  <MobilePreviewer v-memo="[device === 'mobile']" v-if="device === 'mobile'" />
</template>

<style scoped>
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
