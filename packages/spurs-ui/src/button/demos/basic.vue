<docs>
---
title: 基础使用
---
这是一个`button`简单案例
</docs>

<script setup lang="ts">
function handleClick() {
  console.log('这是一个演示')
}
</script>

<template>
  <div>
    <TButton @click="handleClick">
      按钮1
    </TButton>
    <TButton type="dashed" @click="handleClick">
      按钮2
    </TButton>
    <TButton type="primary" @click="handleClick">
      按钮3
    </TButton>
  </div>
</template>
