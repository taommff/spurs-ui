import type { App } from 'vue'
import Button from './button.vue'

// 实现组件的注册
Button.install = (app: App) => {
  app.component(Button.name, Button)
}
export default Button
