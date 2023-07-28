<script setup lang="ts">
import ChartRenderer from '@/components/ChartRenderer/ChartRenderer.vue'
import type { ChartBlockInfo } from '@/types/block'

defineProps<{
  blockInfo: ChartBlockInfo
}>()
</script>

<template>
  <div class="chart">
    <ChartRenderer :block-info="blockInfo" />
  </div>
</template>

<style scoped>
.chart {
  width: 100%;
}
</style>
