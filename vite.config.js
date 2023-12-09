import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  base: '/dandang-app-v1s/',
  plugins: [vue()],
});
