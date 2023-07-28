<script setup lang="ts">
import '@vue-flow/core/dist/style.css'
import '@vue-flow/core/dist/theme-default.css'

import { Log,Resting, Shuffle } from '@icon-park/vue-next'
import { Background, Controls, MiniMap } from '@vue-flow/additional-components'
import { isNode, Panel, useVueFlow,VueFlow } from '@vue-flow/core'
import { ref } from 'vue'

import { initialElements } from './initial-elements'

/**
 * useVueFlow provides all event handlers and store properties
 * You can pass the composable an object that has the same properties as the VueFlow component props
 */
const { onNodeDragStop, onConnect, addEdges, setTransform, toObject } = useVueFlow()

/**
 * Our elements
 */
const elements = ref(initialElements)

/**
 * This is a Vue Flow event-hook which can be listened to from anywhere you call the composable, instead of only on the main component
 *
 * onPaneReady is called when view pane & nodes have visible dimensions
 */
// onPaneReady(({ fitView }) => {})

onNodeDragStop((e) => console.log('drag stop', e))

/**
 * onConnect is called when a new connection is created.
 * You can add additional properties to your new edge (like a type or label) or block the creation altogether
 */
onConnect((params) => addEdges(params))

/**
 * To update node properties you can simply use your elements v-model and mutate the elements directly
 * Changes should always be reflected on the graph reactively, without the need to overwrite the elements
 */
function updatePos() {
  return elements.value.forEach((el) => {
    if (isNode(el)) {
      el.position = {
        x: Math.random() * 400,
        y: Math.random() * 400
      }
    }
  })
}

/**
 * toObject transforms your current graph data to an easily persist-able object
 */
function logToObject() {
  return console.log(toObject())
}

/**
 * Resets the current view pane transformation (zoom & pan)
 */
function resetTransform() {
  return setTransform({ x: 0, y: 0, zoom: 1 })
}
</script>

<template>
  <VueFlow
    v-model="elements"
    class="basic-flow"
    :default-viewport="{ zoom: 1.5 }"
    :min-zoom="0.2"
    :max-zoom="4"
  >
    <Background :gap="12" />

    <MiniMap />

    <Controls />

    <Panel position="top-right" class="controls">
      <div class="control-btn" title="Reset Transform" @click="resetTransform">
        <Resting />
      </div>

      <div class="control-btn" title="Shuffle Node Positions" @click="updatePos">
        <Shuffle />
      </div>

      <div class="control-btn" title="Log `toObject`" @click="logToObject">
        <Log />
      </div>
    </Panel>
  </VueFlow>
</template>

<style scoped>
@import url('https://cdn.jsdelivr.net/npm/@vue-flow/controls@latest/dist/style.css');
@import url('https://cdn.jsdelivr.net/npm/@vue-flow/minimap@latest/dist/style.css');

.controls {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 4px 8px;
  border-radius: 8px;
  background-color: var(--color-gray-100);
  border: 1px solid var(--color-gray-300);
  box-shadow: rgb(0 0 0 / 10%) 1px 2px 20px;
}

.control-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 8px;
  color: var(--color-gray-800);
  cursor: pointer;
  transition: all 0.2s ease-in-out;
}

.control-btn:hover {
  background-color: var(--color-gray-300);
  transition: all 0.2s ease-in-out;
}
</style>
