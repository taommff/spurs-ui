// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './style.css'
import { AntdTheme } from 'vite-plugin-vitepress-demo/theme'

// import spurs from 'spurs-ui'
import 'spurs-ui/style.ts'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp({ app }) {
    // ...
    app.component('Demo', AntdTheme)
    // app.use(spurs)
  },
} satisfies Theme
