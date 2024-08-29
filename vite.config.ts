import { fileURLToPath } from 'node:url'
import path from 'node:path'
import { defineConfig } from 'vite'
import { vitepressDemo } from 'vite-plugin-vitepress-demo'
import vueJsx from '@vitejs/plugin-vue-jsx'
import tsxResolveTypes from 'vite-plugin-tsx-resolve-types'

// import vue from '@vitejs/plugin-vue'
const baseURl = fileURLToPath(new URL('.', import.meta.url))
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vueJsx(),
    tsxResolveTypes(),
    vitepressDemo({
      glob: ['**/demos/*.vue'],
    }),
  ],
  resolve: {
    alias: [
      {
        find: /^spurs-ui/,
        replacement: path.resolve(baseURl, 'packages/spurs-ui/src'),
      },
      {
        find: /^@spurs-ui\/utils/,
        replacement: path.resolve(baseURl, 'packages/utils/src'),
      },
      {
        find: /^@spurs-ui\/icons/,
        replacement: path.resolve(baseURl, 'packages/icons/src'),
      },
    ],
  },
})
