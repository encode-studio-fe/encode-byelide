import { defineStore } from 'pinia'
import { ref } from 'vue'

import { blocks as blocksData } from '@/mocks/blocks'
import type { BlockInfo } from '@/types/block'

export const useAppEditorStore = defineStore('appEditor', () => {
  const currentBlockId = ref<string | null>(null)
  const blocks = ref(blocksData)


  function selectBlock(id: string) {
    currentBlockId.value = id
  }

  function updateBlocks(newBlocks: typeof blocksData) {
    blocks.value = newBlocks
  }

  function updateBlock(id: string, newBlock: BlockInfo) {
    // blocks.value = blocks.value.map((block) => {
    //   if (block.id === id) {
    //     return newBlock
    //   }
    //   return block
    // })
    for (const block of blocks.value) {
      if (block.id === id) {
        Object.assign(block, newBlock)
        break
      }
    }
  }

  return { currentBlockId, blocks, selectBlock, updateBlocks, updateBlock }
})
