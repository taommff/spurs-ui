<docs>
---
title: 基础使用
---
这是一个`notification`的基本使用案例
</docs>

<script setup lang="ts">
import { Notification } from 'spurs-ui'
import { getCurrentInstance, h } from 'vue'
import Test from './components/test.vue'

const instance = getCurrentInstance()

function info() {
  Notification.info({
    title: '通知',
    content: h(Test),
    appContext: instance?.appContext,
  })
}
</script>

<template>
  <div>
    <TButton @click="info">
      弹框
    </TButton>
  </div>
</template>
