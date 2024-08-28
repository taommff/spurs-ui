import { defineComponent, isVNode } from 'vue'
import { filterEmpty, isBaseType } from '@v-c/utils'
import { useClassnames } from '@spurs-ui/utils'
import type { TableProps } from './interface'
import { Header } from './header'
import { Body } from './body'

export default defineComponent((props: TableProps, { slots }) => {
  const { c } = useClassnames('table')

  return () => {
    const { data, columns } = props
    const children = filterEmpty(slots.default?.() || [])
    const myColumns: any = columns ?? []
    if (myColumns.length < 1) {
      myColumns.length = 0
      children.forEach((child) => {
        if (isBaseType(child) || !isVNode(child))
          return

        if (child.type && child.type.displayName && child.type.displayName === 'TTableColumn')
          myColumns.push(child.props)
      })
    }
    const cls = {
      [c()]: true,
    }
    return (
      <table class={cls}>
        <Header columns={myColumns} v-slots={slots} />
        <Body columns={myColumns} data={data} />
      </table>
    )
  }
}, {
  name: 'TTable',
})
