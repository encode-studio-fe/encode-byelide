<script setup lang="ts">
import type { QuoteBlockInfo } from '@/types/block'
import { useField, useFieldArray, useForm } from 'vee-validate'

// 怎么传入 props，在这里如何定义？
const props = defineProps<{
  blockInfo: QuoteBlockInfo
}>()

const emit = defineEmits(['change'])

const { values, validate, defineInputBinds } = useForm()
const { fields, push } = useFieldArray('blocks')

const content = defineInputBinds('content')

// const c = useField('content')
</script>

<template>
  <div>
    {{ props.blockInfo.type }}
  </div>
  <!-- 你在使用 v-model，一定要注意，你的实际需求到底是不是需要 input 受控 -->
  <!-- 如果用 v-model，是受控组件 1，不是受控组件 2 -->
  <!-- <input class="content-input" :defaultValue="props.blockInfo.props.content" /> -->
  <input class="content-input" v-bind="content" @change="emit('change', $event.target.value)" />

  <input v-for="field in fields" :key="field.key" class="content-input" v-model="field.value" />

  <button @click="push(new Date().toLocaleTimeString())">添加</button>

  <!-- 非受控 -->
  <!-- <input class="content-input" :defaultValue="value" @input="value = $event.target.value" /> -->
  <!-- 受控 -->
  <!-- <input class="content-input" :value="value" @input="value = $event.target.value" /> -->
  <!-- {{ value }} -->
  <!-- <button @click="value = '哈哈'">更改为 哈哈</button> -->

  <!--  -->
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
