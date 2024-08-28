<docs>
---
title: 基础使用
---
这是一个`table`简单案例
</docs>

<script setup lang="ts">
import { ref } from 'vue'

const columns = ref([
  {
    title: '姓名',
    key: 'name',
  },
  {
    title: '年龄',
    key: 'age',
  },
  {
    title: '住址',
    key: 'address',
  },
  {
    title: '操作',
    key: 'action',
  },
])

const data = ref(Array.from({ length: 3 }).map((_, index) => {
  return {
    name: `蔡徐淳${index + 1}号`,
    age: 28 + index,
    address: `建设路${index + 1}号`,
    action: index % 2 ? '删除' : '保存',
  }
}))
</script>

<template>
  <div>
    <TTable :data="data">
      <TTableColumn key="name" title="姓名" />
      <TTableColumn key="age" title="年龄" />
      <TTableColumn key="address" title="住址" />
      <TTableColumn key="action" title="操作" />
    </TTable>
    <TTable :data="data" :columns="columns" />
  </div>
</template>
