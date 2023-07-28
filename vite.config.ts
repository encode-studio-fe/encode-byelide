import { fileURLToPath, URL } from 'node:url'

import veauryVitePlugins from 'veaury/vite/index.js'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    // vue(),
    // vueJsx(),
    veauryVitePlugins({
      type: 'vue'
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
