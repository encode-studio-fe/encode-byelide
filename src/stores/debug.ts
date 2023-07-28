import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useEnvStore = defineStore('env', () => {
  const debug = ref(true)
  function toggle() {
    debug.value = !debug.value
  }

  return { debug, toggle }
})
