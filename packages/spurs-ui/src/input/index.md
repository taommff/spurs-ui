# Input 输入框

<demo src='./demos/basic.vue' />

<demo src='./demos/disabled.vue' />

<demo src='./demos/size.vue' />

<demo src='./demos/slot.vue' />

| 属性     | 说明             | 类型                            | 默认值  |
| -------- | ---------------- | ------------------------------- | ------- |
| size     | 设置输入框大小     | `default` \| `samll` \| `large`   | default |
| disabled | 设置输入框禁用状态 | Boolean                         | false   |

## 事件

| 事件  | 说明               | 类型                      |
| ----- | ------------------ | ------------------------- |
| focus | 点击输入框触发该事件 | `inputRef.value.focus()` |
| blur | 点击其余区域触发该事件 | `inputRef.value.blur()` |
