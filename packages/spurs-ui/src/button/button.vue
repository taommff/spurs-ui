<script lang="ts">
import type { PropType } from 'vue'
import { defineComponent } from 'vue'
import { useClassnames } from '@spurs-ui/utils'

export default defineComponent({
  name: 'TButton',
  props: {
    type: {
      type: String as PropType<'default' | 'primary' | 'dashed'>,
      default: 'default',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String as PropType<'default' | 'samll' | 'large'>,
      default: 'default',
    },
  },
  emits: ['click'],
  setup(props, { emit }) {
    const handleClick = (e: Event) => {
      emit('click', e)
    }
    // c是生成类名的函数
    const { c, cx, cm } = useClassnames('button')
    // 响应式自动类名生成
    const cls = cx(() => {
      return {
        // c中不传参，默认生成只带有前后缀的类名
        [c()]: true,
        [c(cm(props.type))]: true,
        [c('size', cm(props.size))]: true,
      }
    })
    return { handleClick, cls }
  },
})
</script>

<template>
  <button :class="cls" :disabled="disabled" @click="handleClick">
    <slot />
  </button>
</template>
