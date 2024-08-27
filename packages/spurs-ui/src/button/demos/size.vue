<docs>
---
title: 按钮大小
---
通过 `size`属性可以设置按钮大小
</docs>

<script setup lang="ts">
function handleClick() {
  console.log('这是一个演示')
}
</script>

<template>
  <div>
    <TButton size="small" @click="handleClick">
      按钮1
    </TButton>
    <TButton size="default" type="dashed" @click="handleClick">
      按钮2
    </TButton>
    <TButton size="large" type="primary" @click="handleClick">
      按钮3
    </TButton>
  </div>
</template>
