<docs>
---
title: 插槽
---
可以使用前置插槽和后置插槽
</docs>

<script setup lang="ts">
import { ref } from 'vue'

const value = ref('')
</script>

<template>
  <div>
    <TInput v-model="value" size="default">
      <template #prefix>
        前置插槽
      </template>
      <template #suffix>
        后置插槽
      </template>
    </TInput>
  </div>
</template>
