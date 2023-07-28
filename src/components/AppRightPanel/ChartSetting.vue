<script setup lang="ts">
import { useForm } from 'vee-validate'
import { watch } from 'vue'

import type { ChartBlockInfo, ChartType } from '@/types/block'
import SegmentedControl from '@/ui/SegmentedControl/SegmentedControl.vue'

// 怎么传入 props，在这里如何定义？
const props = defineProps<{
  blockInfo: ChartBlockInfo
}>()

const data = [
  {
    label: 'Echarts-Echarts',
    value: 'echarts'
  },
  {
    label: 'Canvas',
    value: 'canvas'
  },
  {
    label: 'SVG',
    value: 'svg'
  }
]

const emit = defineEmits<{ (event: 'change', block: ChartBlockInfo): void }>()

const { values, validate, defineInputBinds } = useForm({
  initialValues: {
    chartType: props.blockInfo.props.chartType
  }
})

const chartType = defineInputBinds('chartType')

watch([values], ([newValues]) => {
  emit('change', { ...props.blockInfo, props: { ...props.blockInfo.props, ...newValues } })
})

// const c = useField('content')
</script>

<template>
  <div>
    {{ props.blockInfo.type }}
  </div>
  <segmented-control
    v-model="chartType"
    :data="data"
    @input="
      (val) => {
        emit('change', {
          ...props.blockInfo,
          props: { ...props.blockInfo.props, chartType: val as ChartType }
        })
      }
    "
  />
</template>

<style scoped>
.content-input {
  width: 100%;

  /* 在做组件库的时候，input 是有一个 size 属性，sm、md、lg */
  height: 32px;
  margin-top: 8px;
  padding: 0 8px;
  border: 1px solid var(--color-gray-300);
  border-radius: 8px;
  outline-style: none;
  color: var(--color-gray-800);
}
</style>
