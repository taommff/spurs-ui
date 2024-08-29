// import { fileURLToPath } from 'node:url'
// import path from 'node:path'
import { defineConfig } from 'vite'
import { vitepressDemo } from 'vite-plugin-vitepress-demo'
import vueJsx from '@vitejs/plugin-vue-jsx'
import tsxResolveTypes from 'vite-plugin-tsx-resolve-types'
import Component from 'unplugin-vue-components/vite'
import alias from './alias'
import { spursUIResolver } from './scripts/spurs-ui-resolver'

// import vue from '@vitejs/plugin-vue'
// const baseURl = fileURLToPath(new URL('.', import.meta.url))
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vueJsx(),
    tsxResolveTypes(),
    vitepressDemo({
      glob: ['**/demos/*.vue'],
    }),
    Component({
      resolvers: [spursUIResolver()],
    }),
  ],
  resolve: {
    alias,
  },
})
