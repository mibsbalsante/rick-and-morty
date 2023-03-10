import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { quasar, transformAssetUrls } from '@quasar/vite-plugin'

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "@ast/mixins.scss";'
      }
    }
  },
  plugins: [
    vue({
      template: { transformAssetUrls }
    }),
    vueJsx(),
    quasar({
      sassVariables: '@ast/quasar-variables.scss'
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@ast': fileURLToPath(new URL('./src/assets', import.meta.url)),
      '@cmp': fileURLToPath(new URL('./src/components', import.meta.url)),
      '@gql': fileURLToPath(new URL('./src/queries', import.meta.url)),
      '@str': fileURLToPath(new URL('./src/stores', import.meta.url)),
      '@utl': fileURLToPath(new URL('./src/utils', import.meta.url))
    }
  },
  server: {
    port: 9000
  }
})
