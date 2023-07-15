import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useEnvStore = defineStore('env', () => {
  const debug = ref(true)
  function toggle() {
    debug.value = !debug.value
  }

  return { debug, toggle }
})
