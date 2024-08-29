import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  entries: [
    // 不用带后缀
    'src/index',
  ],
  // 每次打包前清空dist目录
  clean: true,
  // 类型提示
  declaration: true,
  rollup: {
    emitCJS: true,
  },
})
