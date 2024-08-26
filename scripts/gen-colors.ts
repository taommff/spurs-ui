import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { gold, green, purple, red } from '@ant-design/colors'

let colors = ''

purple.forEach((element, index) => {
  // console.log(element)
  // css variable 变量
  colors += `--spurs-color-primary-${index + 1}: ${element};\n`
})
colors += '\n'
green.forEach((element, index) => {
  colors += `--spurs-color-success-${index + 1}: ${element};\n`
})
colors += '\n'
gold.forEach((element, index) => {
  colors += `--spurs-color-warning-${index + 1}: ${element};\n`
})
colors += '\n'
red.forEach((element, index) => {
  colors += `--spurs-color-error-${index + 1}: ${element};\n`
})

// 根目录
const baseURl = fileURLToPath(new URL('../', import.meta.url))

const cssFile = path.resolve(baseURl, 'packages/spurs-ui/src/style/theme/colors.css')
fs.writeFileSync(cssFile, `:root{\n${colors}\n}`)

console.log(111)
