import type { App } from 'vue'
import { createNotification } from './instance.tsx'

const instance = createNotification()

instance.install = (app: App) => {
  // app.component(Notification.name, Notification)
  app.config.globalProperties.$notification = instance
  // optionAPI
  // this.$notification.info({content: 'test'})
}
export default instance
