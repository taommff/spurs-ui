import type { App } from 'vue'
import Tooltip from './tooltip'

// 实现组件的注册
Tooltip.install = (app: App) => {
  app.component(Tooltip.name, Tooltip)
}
export default Tooltip
