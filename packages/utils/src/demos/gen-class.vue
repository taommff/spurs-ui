<script setup lang="ts">
import { ref } from 'vue'
import { useClassnames } from '../gen-class.ts'

const { c, cx } = useClassnames('button')

const testRef = ref(false)
function handleClick() {
  testRef.value = !testRef.value
}
const cls = cx(() => ({
  c: true,
  d: testRef.value,
}))
</script>

<template>
  <div class="c('primary')">
    {{ cls }}
    {{ c('bbb', ['priamry', 'E']) }}
    <button @click="handleClick">
      按钮
    </button>
  </div>
</template>
