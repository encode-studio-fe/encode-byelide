<template>
  <div class="schema-exporter-wrapper">
    <div class="schema-exporter-header">
      <span>导出 JSON</span>
      <copy class="icon" @click="handleCopyText" />
    </div>
    <vue-json-pretty
      class="json-pretty"
      showIcon
      showLineNumber
      editable
      :data="currentBlockInfo"
    />
  </div>
</template>

<script setup lang="ts">
import { Copy } from '@icon-park/vue-next'
import copyText from 'copy-text-to-clipboard'
import VueJsonPretty from 'vue-json-pretty'

const props = defineProps<{
  currentBlockInfo: any
}>()

const handleCopyText = () => {
  try {
    const blockJsonString = JSON.stringify(props.currentBlockInfo)
    copyText(blockJsonString)
  } catch (error) {
    console.error(error)
  }
}
</script>

<style scoped>
.schema-exporter-wrapper {
  background-color: var(--color-gray-100);
  padding: 12px;
  border-radius: 6px;
  color: var(--color-text);
}
.schema-exporter-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
  padding-bottom: 8px;
  margin-bottom: 12px;
  border-bottom: 1px solid var(--color-gray-300);
  color: var(--color-gray-800);
  font-size: var(--font-size-small);
}
.icon {
  cursor: pointer;
}
.icon:hover {
  color: var(--color-primary);
}
.json-pretty {
  color: var(--color-gray-800);
}
</style>

<style>
.vjs-tree-node {
  border-radius: 6px;
}
.vjs-tree-node:hover {
  background-color: var(--color-gray-300);
  font-weight: var(--font-weight-bolder);
}
</style>
