<docs>
---
title: 基础使用
---
这是一个`tooltip`简单案例，分别通过`hover`和`click`事件触发
</docs>

<script setup lang="ts">
</script>

<template>
  <div>
    <TTooltip placement="top" content="测试内容" trigger="hover">
      <TButton>按钮1</TButton>
    </TTooltip>
    <TTooltip placement="top" content="测试内容" trigger="click">
      <TButton>按钮2</TButton>
    </TTooltip>
  </div>
</template>
