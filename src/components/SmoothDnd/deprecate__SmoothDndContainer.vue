<script setup lang="ts">
import type { ContainerOptions } from 'smooth-dnd'
import { dropHandlers, smoothDnD } from 'smooth-dnd'
import { onMounted, ref } from 'vue'

smoothDnD.dropHandler = dropHandlers.reactDropHandler().handler
// smoothDnD.wrapChild = false

interface SmoothDnDWrapperProps<T extends any = any> {
  sortKey?: string
  data: T
  options?: ContainerOptions
}

const props = withDefaults(defineProps<SmoothDnDWrapperProps>(), {
  sortKey: 'id',
  data: []
})

const containerRef = ref()

onMounted(() => {
  smoothDnD(containerRef.value, props.options)
})
</script>

<template>
  <div ref="containerRef" class="smooth-dnd-wrapper">
    <slot v-for="(d, i) in data" :key="d" :name="i" :data="d"></slot>
    <div></div>
    <!-- <SmoothDndDraggable v-for="d in data" :key="d.id" :data="d">
      <slot name="item" :data="d"></slot>
      <component :is="d.material" />
    </SmoothDndDraggable> -->
    <!-- <div class="dnd-item" v-for="d in data" :key="d.id">
      <slot name="item" :data="d"></slot>
      <div class="draggable-item">{{ d.id }}</div>
    </div> -->
  </div>
</template>

<!-- <style scoped></style> -->
