import type { App, Plugin } from 'vue'
import pkg from '../package.json'
import * as components from './components'

export * from './components'

export default {
  install(app: App) {
    Object.entries(components).forEach(([_name, component]) => {
      if (component.install)
        app.use(component)
    })
  },
  version: pkg.version,
} as Plugin
