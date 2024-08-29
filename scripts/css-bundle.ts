// 对css样式进行打包脚本
import { fileURLToPath } from 'node:url'
import path from 'node:path'
import fg from 'fast-glob'
import fs from 'fs-extra'
import less from 'less'

// 找目录
const spursDir = fileURLToPath(new URL('../packages/spurs-ui', import.meta.url))

// 遍历src下面的所有文件，找到所有index.less
const lessFiles = fg.sync([
  'src/**/style/index.less',
  '!src/style',
], {
  cwd: spursDir,
})

async function compile() {
  for (const file of lessFiles) {
    // 拿到完整路径
    const filePath = path.resolve(spursDir, file)
    const lessCode = fs.readFileSync(filePath, 'utf-8')

    // 把less代码转换为css代码
    const cssCode = await less.render(lessCode, {
      paths: [path.dirname(filePath)],
    })

    // 输出
    const esDir = path.resolve(spursDir, `./es${file.slice(3, file.length - 4)}css`)
    const libDir = path.resolve(spursDir, `./lib${file.slice(3, file.length - 4)}css`)
    fs.outputFileSync(esDir, cssCode.css)
    fs.outputFileSync(libDir, cssCode.css)
  }
}

compile()
