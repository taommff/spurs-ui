import { defineComponent } from 'vue'
import { useClassnames } from '@spurs-ui/utils'
import type { HeaderProps } from './interface'

export const Header = defineComponent<HeaderProps>({
  name: 'Header',
  setup(props = { columns: [] }) {
    const { c } = useClassnames('table')
    return () => {
      const ceilCls = {
        [c('ceil')]: true,
        [c('header-ceil')]: true,
      }

      const renderColumns = () => {
        return props.columns.map((column) => {
          return <th class={ceilCls}>{column.title}</th>
        })
      }

      const rowCls = {
        [c('header-row')]: true,
      }

      const cls = {
        [c('header')]: true,
      }

      return (
        <thead class={cls}>
          <tr class={rowCls}>
            {renderColumns()}
          </tr>
        </thead>
      )
    }
  },
})
