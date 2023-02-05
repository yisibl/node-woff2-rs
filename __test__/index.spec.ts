import { readFile } from 'fs/promises'
import { join } from 'path'

import * as fontkit from '@yisibl/fontkit'
import test from 'ava'

import { decode } from '../index'

test('should be converting WOFF2 to TTF', async (t) => {
  const font = await readFile(join(__dirname, './fa-brands-400-v6.2.woff2'))
  const output = decode(font)
  const fontkitOut = fontkit.openSync(output)

  t.is(fontkitOut.type, 'TTF') // font type
})

test('should be a TTF font converted by fontkit check', async (t) => {
  const font = await readFile(join(__dirname, './fa-regular-400-v5.15.4.woff2'))
  const output = decode(font)
  const fontkitOut = fontkit.openSync(output)

  t.is(fontkitOut.type, 'TTF')
  t.is(fontkitOut.directory.numTables, 13) // table count
  t.is(fontkitOut.directory.tables.glyf.length, 28076) // glyf table size
  t.is(fontkitOut.directory.tables.loca.length, 310) // glyf table size
})
