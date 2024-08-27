export interface InputProps {
  modelValue?: string
  disabled?: boolean
  size?: 'small' | 'default' | 'large'
}

// 动态分配属性的继承
export const originInputProps = ['autocomplete']
