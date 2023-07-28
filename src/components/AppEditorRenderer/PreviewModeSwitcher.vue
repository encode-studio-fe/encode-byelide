<script setup lang="ts">
import { FullScreenOne,Iphone, LaptopComputer } from '@icon-park/vue-next'
import type { Icon } from '@icon-park/vue-next/lib/runtime'

import type { PreviewType } from './type'

const props = defineProps<{
  previewMode?: PreviewType
}>()
const emit = defineEmits<{
  'preview-mode-change': [mode: PreviewType]
  'full-screen': []
}>()

function greet(mode: PreviewType) {
  emit('preview-mode-change', mode)
}

const icons: { type: PreviewType; icon: Icon }[] = [
  {
    type: 'mobile',
    icon: Iphone
  },
  {
    type: 'laptop',
    icon: LaptopComputer
  }
]
</script>

<template>
  <div class="icon-button-wrapper">
    <div class="icon-button" v-for="icon in icons" :key="icon.type">
      <component
        :is="icon.icon"
        :size="20"
        :fill="props.previewMode === icon.type ? 'var(--color-black)' : 'var(--color-gray-500)'"
        @click="greet(icon.type)"
      />
    </div>
    <div v-if="props.previewMode === 'laptop'" class="icon-button" @click="emit('full-screen')">
      <full-screen-one />
    </div>
  </div>
</template>

<style scoped>
.icon-button-wrapper {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 8px;
  color: var(--color-gray-700);
}

.icon-button {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  border-radius: 4px;
}

.icon-button:hover {
  background-color: var(--color-gray-200);
}

span {
  cursor: pointer;
}
</style>
