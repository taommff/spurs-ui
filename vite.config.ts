import { fileURLToPath } from 'node:url'
import path from 'node:path'
import { defineConfig } from 'vite'
import { vitepressDemo } from 'vite-plugin-vitepress-demo'

// import vue from '@vitejs/plugin-vue'
const baseURl = fileURLToPath(new URL('.', import.meta.url))
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vitepressDemo({
      glob: ['**/demos/*.vue'],
    }),
  ],
  resolve: {
    alias: [
      {
        find: /^@spurs-ui\/utils/,
        replacement: path.resolve(baseURl, 'packages/utils/src'),
      },
    ],
  },
})
