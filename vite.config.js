import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: "/dandang-app-v1/",
  server: {
    port: '3000',
  },
  preview: {
    port: '8080'
  }
})
