<docs>
---
title: 自定义提示内容
---
这是一个`tooltip`插槽使用按钮，分别通过`hover`和`click`事件触发
</docs>

<script setup lang="ts">
</script>

<template>
  <div>
    <TTooltip placement="top" content="测试内容" trigger="hover">
      <TButton>按钮1</TButton>
      <template #content>
        <span style="color: red;">
          插槽测试内容
        </span>
      </template>
    </TTooltip>
    <TTooltip placement="top" content="测试内容" trigger="click">
      <TButton>按钮2</TButton>
      <template #content>
        <span style="color: red;">
          插槽测试内容
        </span>
      </template>
    </TTooltip>
  </div>
</template>
