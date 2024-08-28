import { TransitionGroup, defineComponent, onMounted, ref } from 'vue'
import { useClassnames } from '@spurs-ui/utils'
import type { NotificationConfig, NotificationConfigType } from './interface'

export default defineComponent<{ onReady: (instance: NotificationInstance) => void }>({
  name: 'TNotification',
  setup(props, { expose }) {
    const data = ref<NotificationConfigType[]>([])
    const index = 0

    const add = (config: NotificationConfig) => {
      const instance: NotificationConfigType = {
        ...config,
        _id: index,
      }

      const close = () => {
        const index = data.value.findIndex(item => item._id === instance._id)
        if (index !== -1)
          data.value.splice(index, 1)
        if (instance._timer)
          clearTimeout(instance._timer)
      }

      if (instance.duration !== 0) {
        instance._timer = setTimeout(() => {
          close()
        }, instance.duration ?? 2000)
      }

      data.value.push(instance)

      return close
    }

    const { c } = useClassnames('notification')

    const onReady = () => {
      props.onReady?.({
        add,
      })
    }
    onMounted(() => {
      onReady()
    })

    expose({ add })

    return () => {
      const renderNotification = () => {
        const cls = {
          [c('wrapper')]: true,
        }
        const titleCls = {
          [c('wrapper', 'title')]: true,
        }
        const contentCls = {
          [c('wrapper', 'content')]: true,
        }

        return data.value.map((item) => {
          return (
            <div class={cls} key={item._id}>
              <div class={titleCls}>{item.title}</div>
              <div class={contentCls}>{item.content}</div>
            </div>
          )
        })
      }

      const notificationCls = {
        [c()]: true,
      }

      return (
        <>
          <div class={notificationCls}>
            <TransitionGroup name="spurs-slide-right" tag="div">
              {renderNotification()}
            </TransitionGroup>
          </div>
        </>
      )
    }
  },
})
