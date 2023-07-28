<script setup lang="ts">
import { Bug,Data, LayoutThree, Lightning, Share } from '@icon-park/vue-next'
import { computed, defineComponent, h } from 'vue'
import { useRoute } from 'vue-router'

import { useEnvStore } from '@/stores/debug'

const linkItems = [
  {
    value: 'dataSource',
    label: '数据源',
    bg: `radial-gradient(50% 50% at 50% 100%, rgba(0, 196, 83, 0.2) 0%, rgba(0, 196, 83, 0) 100%)`,
    color: 'rgb(0, 196, 83)',
    borderColor: 'radial-gradient(50% 50%, rgb(0, 196, 83) 0%, rgba(0, 196, 83, 0) 100%)'
  },
  {
    value: 'layout',
    label: '布局',
    bg: `radial-gradient(50% 50% at 50% 100%, rgba(24, 190, 212, 0.2) 0%, rgba(24, 190, 212, 0) 100%)`,
    color: 'rgb(24, 190, 212)',
    borderColor: 'radial-gradient(50% 50%, rgb(24, 190, 212) 0%, rgba(24, 190, 212, 0) 100%)'
  },
  {
    value: 'actions',
    label: '动作',
    bg: `radial-gradient(50% 50% at 50% 100%, rgba(241, 60, 11, 0.2) 0%, rgba(241, 60, 11, 0) 100%)`,
    color: 'rgb(241, 60, 11)',
    borderColor: 'radial-gradient(50% 50%, rgb(241, 60, 11) 0%, rgba(241, 60, 11, 0) 100%)'
  }
]

defineProps<{
  msg: string
}>()

// 千万不要这样！
// const { debug, toggle } = useEnvStore()
const envStore = useEnvStore()

const route = useRoute()

const activeLink = computed(() => route.path)

// 等价于 computed
// const activeLink = ref(route.path.slice(1))
// watch(
//   () => route.path,
//   (path) => {
//     console.log('🚀 ~ file: AppNavigator.vue:20 ~ path:', path)
//     activeLink.value = path.slice(1)
//   }
// )

const Icon = defineComponent({
  setup(props) {
    // 千万不能这样子写！！！
    // const { type } = props
    switch (props.type) {
      case 'dataSource':
        return () => h(Data, { size: 16 })
      case 'layout':
        return () => h(LayoutThree, { size: 16 })
      case 'actions':
        return () => h(Lightning, { size: 16 })

      default:
        return () => h('div')
    }
  },
  props: {
    type: {
      type: String,
      required: true
    }
  }
})
</script>

<template>
  <div class="app-navigator">
    <div class="app-info-wrapper">
      <div class="app-logo">
        <img
          src="https://cdnjs.cloudflare.com/ajax/libs/twemoji/11.3.0/2/svg/1f469-200d-1f692.svg"
        />
      </div>
      <h1 class="app-name">Byelide</h1>
    </div>
    <div class="app-navigator-link-wrapper">
      <router-link
        class="app-navigator-link-item"
        v-for="item in linkItems"
        :key="item.value"
        :style="activeLink.includes(item.value) && { background: item.bg }"
        :to="`/app/${item.value}`"
      >
        <!-- defineComponent + h 代替条件渲染 -->
        <!-- <div v-if="item.value === 'dataSource'"><Data /></div>
        <div v-if="item.value === 'layout'"><LayoutThree /></div>
        <div v-if="item.value === 'action'"><Lightning /></div> -->
        <div
          :style="{
            lineHeight: 0.7,
            color: activeLink.includes(item.value) ? item.color : 'var(--color-gray-700)'
          }"
        >
          <Icon :type="item.value" :active="activeLink.includes(item.value)" />
        </div>
        <span class="item-title">
          {{ item.label }}
        </span>
        <div
          class="item-border"
          :style="activeLink.includes(item.value) ? { background: item.borderColor } : {}"
        ></div>
      </router-link>
    </div>
    <div class="app-setting-wrapper">
      <div class="common-btn debug-btn" :class="{ debug: envStore.debug }" @click="envStore.toggle">
        <Bug />
        开发模式:({{ envStore.debug ? '开' : '关' }})
      </div>
      <div class="common-btn">
        <Share />
        发布
      </div>
    </div>
  </div>
</template>

<style scoped>
.app-navigator {
  position: relative;
  z-index: 5;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 48px;
  box-shadow: rgb(0 0 0 / 8%) 0 1px 0;
}

.app-info-wrapper {
  width: 1000px;
  display: flex;
  place-items: center;
}

.app-logo {
  width: 32px;
  height: 32px;
  margin: 10px 8px 10px 18px;
  border-radius: 8px;
  background-color: var(--color-primary);
}

.app-logo img {
  width: 100%;
  height: 100%;
  padding: 6px;
}

.app-name {
  color: var(--color-gray-900);
  font-weight: var(--font-weight-bolder);
  font-size: var(--font-size-large);
}

.app-navigator-link-wrapper {
  display: flex;
  flex-shrink: 0;
  justify-content: space-between;
  align-self: stretch;
}

.app-navigator-link-item {
  position: relative;
  display: flex;
  align-items: center;
  padding: 0 8px;
  margin: 0 24px;
  align-self: stretch;
  background-color: var(--color-white);
  color: var(--color-text);
  font-size: var(--font-size-normal);
  font-weight: var(--font-weight-bold);
}

.item-title {
  margin-left: 8px;
  color: var(--color-black);
}

.item-border {
  position: absolute;
  bottom: -1px;
  left: 0;
  right: 0;
  height: 1px;
}

.app-setting-wrapper {
  width: 1000px;
  display: flex;
  place-items: center;
  justify-content: flex-end;
  margin-right: 18px;
  gap: 12px;
}

.common-btn {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 6px 18px;
  border-radius: 8px;
  background-color: var(--color-black);
  color: var(--color-white);
  font-size: var(--font-size-normal);
  font-weight: var(--font-weight-bold);
  cursor: pointer;
  user-select: none;
}

.debug-btn {
  box-shadow: var(--color-gray-300) 0 0 0 1px;
  background-color: var(--color-white);
  color: var(--color-black);
}

.debug-btn.debug {
  color: var(--color-primary);
  box-shadow: var(--color-primary) 0 0 0 1px;
}
</style>
