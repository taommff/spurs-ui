// 打包生成umd文件
import { fileURLToPath } from 'node:url'
import path from 'node:path'
import { defineConfig } from 'vite'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vue from '@vitejs/plugin-vue'
import tsxResolveTypes from 'vite-plugin-tsx-resolve-types'

const baseURl = fileURLToPath(new URL('.', import.meta.url))

// 实现打包的配置

export default defineConfig({
  plugins: [
    vueJsx(),
    tsxResolveTypes(),
    vue(),
  ],
  resolve: {
    alias: [
      {
        find: /^@spurs-ui\/utils/,
        replacement: path.resolve(baseURl, '../utils/src'),
      },
    ],
  },
  build: {
    rollupOptions: {
      external: ['vue'],
      output: {
        exports: 'named',
        globals: {
          vue: 'vue',
        },
      },
    },
    lib: {
      entry: 'src/index.ts',
      formats: ['umd'],
      fileName: () => 'spurs-ui.js',
      name: 'spursUI',
    },
  },
})
