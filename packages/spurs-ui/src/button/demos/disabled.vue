<docs>
---
title: 禁用按钮
---
设置`disabled`属性为`true`即可禁用按钮
</docs>

<script setup lang="ts">
function handleClick() {
  console.log('这是一个演示')
}
</script>

<template>
  <div>
    <TButton disabled @click="handleClick">
      按钮1
    </TButton>
    <TButton disabled type="dashed" @click="handleClick">
      按钮2
    </TButton>
    <TButton disabled type="primary" @click="handleClick">
      按钮3
    </TButton>
  </div>
</template>
