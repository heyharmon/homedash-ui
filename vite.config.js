import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
  resolve: {
      alias: {
          '@': `${path.resolve(__dirname, 'src')}`,
      }
  },
  
  plugins: [
    vue()
  ],
  
  css: {
      preprocessorOptions: {
          scss: {
              /**
               * Share common variables among all processed files
               * without having to explicit import them.
               * https://vitejs.dev/config/#css-preprocessoroptions
               */
              additionalData: `@import './src/App/styles/resources';`
          }
      }
  }
})
