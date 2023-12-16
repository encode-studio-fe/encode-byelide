<script setup lang="ts">
import { SmoothDndContainer } from '@/components/SmoothDnd/SmoothDndContainer'
import { SmoothDndDraggable } from '@/components/SmoothDnd/SmoothDndDraggable'
import { blocksBaseMetaList, getBlocksDefaultData } from '@/constants/blocksBaseMeta'
</script>

<template>
  <div class="blocks-drawer-wrapper">
    <h3 class="drawer-title">组件</h3>
    <!-- <div v-for="d in blocksBaseMetaList" :key="d.type">{{ d.type }}</div> -->

    <smooth-dnd-container
      behaviour="copy"
      group-name="blocks"
      orientation="vertical"
      :get-child-payload="
        (index: number) => {
          const { type } = blocksBaseMetaList[index]
          return getBlocksDefaultData(type)
        }
      "
      tag="div"
      class="blocks-list"
    >
      <smooth-dnd-draggable v-for="d in blocksBaseMetaList" :key="d.type">
        <div class="blocks-item">
          <div class="block-icon-wrapper">
            <component :is="d.icon" />
          </div>
          <span class="block-label">{{ d.label }}</span>
        </div>
      </smooth-dnd-draggable>
    </smooth-dnd-container>
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

.blocks-list {
  --grid-item-color: #1edb5b;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2px;
  margin: 0 -12px;
  padding-bottom: 8px;
}

.blocks-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 9px;
  transition: background-color 0.125s ease 0s;
  padding: 8px 0;
  cursor: grab;
  user-select: none;
}

.blocks-item:hover {
  background-color: var(--color-gray-200);
}

.block-icon-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  margin-bottom: 4px;
  border-radius: 8px;
  color: var(--color-white);
  font-size: var(--font-size-large);
  background-color: var(--grid-item-color);
}

.block-label {
  font-size: var(--font-size-small);
  font-weight: var(--font-weight-bold);
}
</style>
