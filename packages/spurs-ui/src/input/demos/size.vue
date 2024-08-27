<docs>
---
title: 输入框尺寸
---
通过`size`属性定义不同大小的输入框
</docs>

<script setup lang="ts">
import { ref } from 'vue'

const value = ref('')
</script>

<template>
  <div>
    <TInput v-model="value" size="small" />
    <TInput v-model="value" size="default" />
    <TInput v-model="value" size="large" />
  </div>
</template>
