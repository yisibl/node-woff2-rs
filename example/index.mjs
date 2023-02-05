import { promises as fs } from 'fs'
import path, { join } from 'path'
import { fileURLToPath } from 'url'

import woff2Rs from '../index.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.resolve(path.dirname(__filename))
async function toTTF() {
  const font = await fs.readFile(join(__dirname, '../__test__/fa-regular-400-v5.15.4.woff2'))
  const outputBuffer = woff2Rs.decode(font) // output TTF buffer

  await fs.writeFile(join(__dirname, 'fa-regular-400.ttf'), outputBuffer)
}
toTTF()
