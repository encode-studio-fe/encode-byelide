<script setup lang="ts"></script>

<template>
  <div class="ds-left-panel-wrapper">
    <div class="ds-left-panel-content">todo</div>
  </div>
</template>

<style scoped>
.ds-left-panel-wrapper {
  position: relative;
  display: flex;
  z-index: 4;
  height: 100%;
  box-shadow: var(--color-gray-300) 1px 0 0;
}

.ds-left-panel-content {
  width: calc(var(--panel-width) - 60px);
  height: 100%;
  box-shadow: var(--color-gray-300) 1px 0 0;
}
</style>
