<script setup lang="ts">
import { h } from 'vue'
type Field = {
  label: string
  id: string
  type: 'input' | 'select'
}
defineProps({
  title: {
    type: String,
    required: true
  },
  onClick: {
    type: Function,
    required: true
  }
})

const fieldMap = {
  input: h('input'),
  select: h('select')
}

const fields: Field[] = [
  {
    label: '标题',
    id: '1',
    type: 'input'
  },
  {
    label: '副标题',
    id: '2',
    type: 'select'
  }
]
</script>

<template>
  <div class="form">
    <div class="form-item" v-for="field in fields" :key="field.id">
      <component :is="fieldMap[field.type]" />
    </div>
  </div>
</template>

<style scoped>
.form {
  display: flex;
  flex-direction: column;
}

.form-item {
  display: flex;
  flex-direction: column;
  margin-bottom: 12px;
}
</style>
