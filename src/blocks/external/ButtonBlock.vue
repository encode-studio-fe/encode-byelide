<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    required: true
  },
  onClick: {
    type: Function,
    required: true
  }
})
console.log('🚀 ~ file: ButtonBlock.vue:12 ~ props:', props)
</script>

<template>
  <div class="button">Button</div>
</template>

<style scoped>
.button {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 36px;
  padding: 0 12px;
  border-radius: 8px;
  font-weight: var(--font-weight-bold);
  color: var(--color-white);
  background-color: var(--color-primary);
}
</style>
