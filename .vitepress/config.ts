import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Spurs UI',
  description: '一个基于Vue3的组件库(GSG)',
  // eslint-disable-next-line node/prefer-global/process
  base: process.env.NODE_ENV === 'production' ? '/spurs-ui/' : '/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '介绍', link: '/introduce' },
      { text: '组件', link: '/components/' },
      { text: '工具', link: '/utils' },
    ],

    sidebar: {
      '/components/': [
        {
          text: '按钮',
          link: '/components/button/',
        },
        {
          text: '输入框',
          link: '/components/input/',
        },
        {
          text: 'Tooltip',
          link: '/components/tooltip/',
        },
        {
          text: '表格',
          link: '/components/table/',
        },
        {
          text: '虚拟列表',
          link: '/components/virtual-list/',
        },
        {
          text: '通知',
          link: '/components/notification/',
        },
        {
          text: '图标',
          link: '/components/icons/',
        },
      ],
      '/utils/': [
        {
          text: 'genClass',
          link: '/utils/gen-class',
        },
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
    ],
  },
  rewrites: {
    'docs/(.*)': '(.*)',
    'packages/spurs-ui/src/:comp/(.*)': 'components/:comp/(.*)',
    'packages/utils/src/(.*)': 'utils/(.*)',
    'packages/icons/docs/(.*)': 'components/icons/(.*)',
  },
})
