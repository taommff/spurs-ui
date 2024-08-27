import type { App } from 'vue'
import Input from './input.vue'

// 实现组件的注册
Input.install = (app: App) => {
  app.component(Input.name, Input)
}
export default Input
