import { fileURLToPath } from 'node:url'
import path from 'node:path'

const baseURl = fileURLToPath(new URL('.', import.meta.url))

export default [
  {
    find: /^spurs-ui/,
    replacement: path.resolve(baseURl, 'packages/spurs-ui/src'),
  },
  {
    find: /^@spurs-ui\/utils/,
    replacement: path.resolve(baseURl, 'packages/utils/src'),
  },
  {
    find: /^@spurs-ui\/icons/,
    replacement: path.resolve(baseURl, 'packages/icons/src'),
  },
]
