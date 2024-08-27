import type { PropType, VNode } from 'vue'
import { computed, createVNode, defineComponent, ref } from 'vue'
import type { Placement } from '@floating-ui/vue'
import { offset, useFloating } from '@floating-ui/vue'
import { useClassnames } from '@spurs-ui/utils'

// 过滤掉注释等元素
import { filterEmpty, isBaseType } from '@v-c/utils'

export default defineComponent({
  name: 'TTooltip',
  props: {
    // placement -- 对应的12个位置
    placement: {
      type: String as PropType<Placement>,
      default: 'bottom-center',
    },
    content: {
      type: String as PropType<string>,
    },
    trigger: {
      type: String as PropType<'hover' | 'click'>,
      default: 'hover',
    },
  },
  setup(props, { slots }) {
    const reference = ref(null)
    const floating = ref(null)
    const show = ref(false)
    const placement = computed(() => props.placement)
    const { c } = useClassnames('tooltip')
    const { floatingStyles } = useFloating(reference, floating, {
      placement,
      middleware: [offset(4)],
    })

    const handleMouseEnter = () => {
      if (props.trigger !== 'hover')
        return
      show.value = true
    }
    const handleClick = () => {
      if (props.trigger !== 'click')
        return
      show.value = true
    }
    const handleMouseLeave = () => {
      show.value = false
    }

    return () => {
      const renderTooltip = () => {
        if (!reference.value)
          return null
        if (!show.value)
          return null

        const cls = {
          [c()]: true,
        }

        return (
          <div class={cls} ref={floating} style={floatingStyles.value}>
            {/* 有插槽用插槽，否则用content */}
            {slots.content ? slots.content?.() : props.content}
          </div>
        )
      }

      const children = filterEmpty(slots.default?.())

      if (children && children.length < 1)
        return null
      if (children.length > 1) {
        console.warn('TTooltip can only have one child')
        return children
      }
      const node = children[0]

      if (isBaseType(node)) {
        console.warn('TTooltip must have a child component')
        return node
      }

      const events = {
        onMouseenter: handleMouseEnter,
        onMouseleave: handleMouseLeave,
        onClick: handleClick,
      }

      const tipNode = createVNode(node as VNode, {
        ref: reference,
        ...events,
      })

      return (
        <>
          {tipNode}
          {/* tsx 中，ref类型的数据需要写成.value的形式（除非使用ref这个属性） */}
          {renderTooltip()}
        </>
      )
    }
  },
})
