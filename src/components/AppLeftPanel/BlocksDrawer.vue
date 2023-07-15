<script setup lang="ts"></script>

<template>
  <div class="blocks-drawer-wrapper">
    <h3 class="drawer-title">组件</h3>
    <!-- <div v-for="d in blocksBaseMetaList" :key="d.type">{{ d.type }}</div> -->
    blocks drawer
  </div>
</template>

<style scoped>
.blocks-drawer-wrapper {
  width: 100%;
}

.drawer-title {
  font-size: var(--font-size-large);
  font-weight: var(--font-weight-bolder);
  margin-bottom: 8px;
}
</style>
