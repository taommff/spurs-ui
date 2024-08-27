<docs>
---
title: 禁用状态
---
通过`disabled`属性控制输入框的禁用状态
</docs>

<script setup lang="ts">
import { ref } from 'vue'

const value = ref('')
</script>

<template>
  <div>
    <TInput v-model="value" size="default" disabled />
  </div>
</template>
