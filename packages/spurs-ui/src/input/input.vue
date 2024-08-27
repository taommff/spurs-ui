<script setup lang="ts">
import { nextTick, onMounted, ref } from 'vue'
import { useClassnames } from '@spurs-ui/utils'
import { omit, pick } from 'lodash-es'
import { originInputProps } from './interface'
import type { InputProps } from './interface'

defineOptions({
  name: 'TInput',
  inheritAttrs: false,
})

const props = defineProps<InputProps>()

const emit = defineEmits<{
  // 用元组方式写类型
  'update:modelValue': [string]
}>()

// 定义插槽
defineSlots<{
  prefix(): any
  suffix(): any
}>()

const { c, cx, cm, ce } = useClassnames('input')

const inputRef = ref<HTMLInputElement>()

const cls = cx(() => {
  return {
    [c()]: true,
    [c(cm('disabled'))]: props.disabled,
    // 非空断言
    // 双重逻辑非操作符，转换为布尔值
    [c(cm(props.size!))]: !!props.size,
  }
})

const inputCls = cx(() => {
  return {
    [c('input')]: true,
  }
})

function setInputValue() {
  const _input = inputRef.value
  if (!_input || _input.value === props.modelValue)
    return
  _input.value = props.modelValue ?? ''
}

function handleInput(e: Event) {
  const target = e.target as HTMLINputElement
  if (props.modelValue === target.value)
    return
  emit('update:modelValue', target.value)
  nextTick(() => {
    setInputValue()
  })
}

onMounted(() => {
  setInputValue()
})

function focus() {
  inputRef.value?.focus()
}

function blur() {
  inputRef.value?.blur()
}

defineExpose({
  focus,
  blur,
})
</script>

<template>
  <div :class="cls" v-bind="omit($attrs, originInputProps)">
    <span v-if="$slots.prefix" :class="c(ce('prefix'))">
      <!-- 前置插槽 -->
      <slot name="prefix" />
    </span>
    <input ref="inputRef" v-bind="pick($attrs, originInputProps)" :disabled="disabled" :class="inputCls" :value="modelValue" @input="handleInput">
    <span v-if="$slots.suffix" :class="c(ce('suffix'))">
      <!-- 后置插槽 -->
      <slot name="suffix" />
    </span>
  </div>
</template>
