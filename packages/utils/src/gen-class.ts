import className from 'classnames'
import { computed } from 'vue'

type BEMType = string | [string, 'B' | 'E' | 'M' | undefined]

export function useClassnames(componentName: string) {
  const prefix = 'spurs'
  const componentClass = `${prefix}-${componentName}`
  // 拼接后面的自定义名称
  const c = (...arg: BEMType[]) => {
    if (arg.length >= 1) {
      return arg.reduce((prev, cur) => {
        if (Array.isArray(cur)) {
          const arg2 = cur[1]
          if (arg2 === 'E')
            return `${prev}__${cur}`

          else if (arg2 === 'M')
            return `${prev}--${cur}`
        }
        return `${prev}-${cur}`
      }, componentClass)
    }
    return componentClass
  }
  const ce = (e: string) => [e, 'E'] as BEMType
  const cm = (e: string) => [e, 'M'] as BEMType
  const cx = (cls: () => Record<string, boolean>) => {
    return computed(() => className(cls()))
  }
  return {
    c,
    cx,
    ce,
    cm,
  }
}

// BEM写法
// Block-Element—Modifier
