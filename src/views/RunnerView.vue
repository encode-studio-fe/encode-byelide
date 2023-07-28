<script setup lang="ts">
import AppRunnerRenderer from '@/components/AppRunnerRenderer/AppRunnerRenderer.vue'
</script>

<template>
  <div class="layout-wrapper">
    <AppRunnerRenderer />
  </div>
</template>

<style scoped>
.layout-wrapper {
  display: flex;
  height: 100%;
}

.layout-setting {
  position: relative;
  z-index: 6;
  width: var(--panel-width);
  box-shadow: var(--color-gray-300) -1px 0 0;
}
</style>
