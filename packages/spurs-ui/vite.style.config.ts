// 将样式打包为umd包

import { fileURLToPath } from 'node:url'
import path from 'node:path'
import { defineConfig } from 'vite'
import fs from 'fs-extra'

export default defineConfig({
  build: {
    emptyOutDir: false,
    rollupOptions: {
      output: {
        assetFileNames: () => 'spurs-ui.css',
      },
    },
    lib: {
      entry: 'src/style.ts',
      formats: ['es'],
      fileName: () => 'spurs-ui-style.js',
    },
  },
  plugins: [
    {
      name: 'remove:spurs-ui-style.js',
      closeBundle() {
        const spursPath = fileURLToPath(new URL('./dist', import.meta.url))
        const styleFilePath = path.resolve(spursPath, 'spurs-ui-style.js')
        fs.removeSync(styleFilePath)
      },
    },
  ],
})
