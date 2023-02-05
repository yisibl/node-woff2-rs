import { promises as fs } from 'fs'
import path, { join } from 'path'
import { fileURLToPath } from 'url'

import { convertWOFF2ToTTF } from '@napi-rs/ttf2woff2'
import b from 'benny'
import wawoff from 'wawoff2'
import woff2Next from 'woff2-next'

import woff2Rs from '../index.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.resolve(path.dirname(__filename))

async function run() {
  // const font1 = await fs.readFile(join(__dirname, '../__test__/fa-brands-400-v6.2.woff2'))
  const font1 = await fs.readFile(join(__dirname, '../__test__/fa-regular-400-v5.15.4.woff2'))

  await b.suite(
    'WOFF2 to TTF (Use Font Awesome)',

    b.add('woff2-next(node-gyp binding)', () => {
      woff2Next.decode(font1)
    }),

    b.add('@napi-rs/ttf2woff2(Rust binding)', () => {
      convertWOFF2ToTTF(font1)
    }),

    b.add('@woff2/woff2-rs(Pure Rust)', () => {
      woff2Rs.decode(font1)
    }),

    b.add('wawoff(Wasm)', async () => {
      await wawoff.decompress(font1)
    }),

    b.cycle(),
    b.complete(),
  )
}

run().catch((e) => {
  console.error(e)
})
