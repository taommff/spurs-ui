<docs>
---
title: 基础使用
---
这是一个`input`简单案例
</docs>

<script setup lang="ts">
import { onMounted, ref } from 'vue'

const value = ref('')

const inputRef = ref('')

onMounted(() => {
  // inputRef.value.focus()
})
</script>

<template>
  <div>
    <TInput ref="inputRef" v-model="value" size="default" />
  </div>
</template>
