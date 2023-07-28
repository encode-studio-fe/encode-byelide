import type { Ref } from "vue"

import { useAppEditorStore } from "@/stores/appEditor"

export const useClickOutside = (domRef: Ref<HTMLElement | null>) => {
  const appEditorStore = useAppEditorStore()

  const handleClickOutside = (e: MouseEvent) => {
    if (!appEditorStore.currentBlockId) return
    if (!domRef.value?.contains(e.target as HTMLElement)) {
      appEditorStore.selectBlock('')
    }
  }

  document.addEventListener('click', handleClickOutside)

  return () => {
    document.removeEventListener('click', handleClickOutside)
  }

}
