<script setup lang="ts">
import { DataSheet } from '@icon-park/vue-next'
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const activeLink = computed(() => route.path)

const dataLists = [
  {
    id: '1',
    name: '数据源1'
  },
  {
    id: '2',
    name: '数据源2'
  },
  {
    id: '3',
    name: '数据源3'
  },
  {
    id: '4',
    name: '数据源4'
  },
  {
    id: '5',
    name: '数据源5'
  }
]
</script>

<template>
  <div class="ds-left-panel-wrapper">
    <div class="ds-left-panel-content">
      <router-link
        v-for="ds in dataLists"
        :key="ds.id"
        :class="['ds-item', activeLink.includes(ds.id) && 'active']"
        :to="`/app/dataSource/${ds.id}`"
      >
        <data-sheet />
        <div class="item-label">{{ ds.id }} 100w 行数据，非常流畅</div>
      </router-link>
    </div>
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
  padding: 20px 10px 10px;
}

.ds-item {
  display: flex;
  align-items: center;
  height: 36px;
  padding: 0 12px;
  border-radius: 8px;
  cursor: pointer;
  color: var(--color-text);
  background-color: var(--color-white);
}

.ds-item.active {
  background-color: var(--color-gray-200);
}

.item-label {
  margin-left: 8px;
  font-size: var(--font-size-normal);
}
</style>
