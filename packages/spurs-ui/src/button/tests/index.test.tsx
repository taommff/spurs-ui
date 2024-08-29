// 单元测试文件
import { mount } from '@vue/test-utils'
import { Button } from 'spurs-ui'

// 测试用例
// describe('button', () => {
//   it('should work', () => {
//     // const type = 'primary'
//     const wrapper = mount(<Button>测试</Button>)
//     console.log(wrapper.text())
//     // expect(type).toBe('primary')
//   })
// })

// 测试用例
describe('button', () => {
  it('should work', () => {
    const wrapper = mount(<Button type="primary">测试</Button>)
    const btnEl = wrapper.find('button')
    const hasPrimary = btnEl.element.classList.contains('spurs-button--primary')
    console.log(hasPrimary)
    console.log(btnEl)
    // 测试完成
    expect(hasPrimary).toBe(true)
    wrapper.unmount()
  })

  // 测试size属性
  it('size', () => {
    const wrapper = mount(<Button size="small">测试</Button>)
    const btnEl = wrapper.find('button')
    const hasSmall = btnEl.element.classList.contains('spurs-button-size--small')
    // 测试
    expect(hasSmall).toBe(true)
    wrapper.unmount()
  })

  // 测试点击事件
  it('click', () => {
    let clickState = false
    const handleClick = () => {
      clickState = true
    }
    const wrapper = mount(<Button onClick={handleClick}>测试</Button>)
    wrapper.trigger('click')
    expect(clickState).toBe(true)
    wrapper.unmount()
  })
})
