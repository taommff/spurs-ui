<docs>
---
title: 基础使用
---
这是一个虚拟列表的基本案例
</docs>

<script setup lang="ts">
const data = Array.from({ length: 1000 }).map((_, index) => {
  return {
    id: index + 1,
    name: `Item ${index + 1}`,
  }
})

function handleClick(item: any) {
  console.log(item)
}
</script>

<template>
  <div>
    <TVirtualList :data="data" @click-item="handleClick">
      <template #item="{ item }">
        <div class="data-item">
          {{ item.name }}
        </div>
      </template>
    </TVirtualList>
  </div>
</template>

<style scoped>
.data-item{
  height: 100%;
  display: flex;
  align-items: center;
}
</style>
