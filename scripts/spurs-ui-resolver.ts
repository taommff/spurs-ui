import type { ComponentResolver } from 'unplugin-vue-components/vite'

// 实现组件按需加载功能
export function spursUIResolver(): ComponentResolver {
  return {
    type: 'component',
    resolve(name) {
      if (name.startsWith('T')) {
        return {
          name: name.slice(1),
          from: 'spurs-ui',
        }
      }
    },
  }
}
