import type { App } from 'vue'
import Table from './table'
import { TableColumn } from './table-column'

// 实现组件的注册
Table.install = (app: App) => {
  app.component(Table.name, Table)
  app.component(TableColumn.displayName, TableColumn)
}
export default Table
