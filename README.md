# Node `woff2-rs`

<a href="https://github.com/yisibl/node-woff2-rs/actions"><img alt="GitHub CI Status" src="https://github.com/yisibl/node-woff2-rs/workflows/CI/badge.svg?branch=main"></a>
<a href="https://www.npmjs.com/package/@woff2/woff2-rs"><img src="https://img.shields.io/npm/v/@woff2/woff2-rs.svg?sanitize=true" alt="@woff2/woff2-rs npm version"></a>
<a href="https://npmcharts.com/compare/@woff2/woff2-rs?minimal=true"><img src="https://img.shields.io/npm/dm/@woff2/woff2-rs.svg?sanitize=true" alt="@woff2/woff2-rs npm downloads"></a>

A WOFF2 decompressor converts WOFF2 to TTF or OTF, powered by Rust based [woff2-rs](https://github.com/Cimpress-MCP/woff2-rs) and [napi-rs](https://github.com/napi-rs/napi-rs).

## Features

- Converts WOFF2 to TTF or OTF.
- Quick to install, no need for node-gyp and postinstall.
- Cross-platform support, including [Apple M Chips](https://www.apple.com/newsroom/2020/11/apple-unleashes-m1/).
- Support for running as native addons in Deno.

## Installation

```
npm i @woff2/woff2-rs
yarn add @woff2/woff2-rs
```

## Usage

```js
import { promises as fs } from 'fs'
import path, { join } from 'path'
import { fileURLToPath } from 'url'
import woff2Rs from '@woff2/woff2-rs'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.resolve(path.dirname(__filename))
async function toTTF() {
  const font = await fs.readFile(join(__dirname, '../__test__/fa-regular-400-v5.15.4.woff2'))
  const outputBuffer = woff2Rs.decode(font) // output TTF buffer
  await fs.writeFile(join(__dirname, 'fa-regular-400.ttf'), outputBuffer)
}
toTTF()
```

## Benchmark

```bash
npm run bench

Running "WOFF2 to TTF (Use Font Awesome)" suite...
Progress: 50%
Progress: 100%

  woff2-next(node-gyp binding):
    2 990 ops/s, ±0.30%   | fastest

  @napi-rs/ttf2woff2(Rust binding):
    2 396 ops/s, ±0.66%   | 19.87% slower

  @woff2/woff2-rs(Pure Rust):
    1 934 ops/s, ±0.30%   | 35.32% slower

  wawoff(Wasm):
    1 501 ops/s, ±0.75%   | slowest, 49.8% slower
```

## Support matrix

|                  | Node.js 12 | Node.js 14 | Node.js 16 | Node.js 18 | npm |
| ---------------- | ---------- | ---------- | ---------- | ---------- | --- |
| Windows x64      | ✓          | ✓          | ✓          |  ✓         |[![npm version](https://img.shields.io/npm/v/@woff2/woff2-rs-win32-x64-msvc.svg?sanitize=true)](https://www.npmjs.com/package/@woff2/woff2-rs-win32-x64-msvc) |
| Windows x32      | ✓          | ✓          | ✓          |  ✓         |[![npm version](https://img.shields.io/npm/v/@woff2/woff2-rs-win32-ia32-msvc.svg?sanitize=true)](https://www.npmjs.com/package/@woff2/woff2-rs-win32-ia32-msvc) |
| Windows arm64    | ✓          | ✓          | ✓          |  ✓         |[![npm version](https://img.shields.io/npm/v/@woff2/woff2-rs-win32-arm64-msvc.svg?sanitize=true)](https://www.npmjs.com/package/@woff2/woff2-rs-win32-arm64-msvc) |
| macOS x64        | ✓          | ✓          | ✓          |  ✓         |[![npm version](https://img.shields.io/npm/v/@woff2/woff2-rs-darwin-x64.svg?sanitize=true)](https://www.npmjs.com/package/@woff2/woff2-rs-darwin-x64) |
| macOS arm64(M1)  | ✓          | ✓          | ✓          |  ✓         |[![npm version](https://img.shields.io/npm/v/@woff2/woff2-rs-darwin-arm64.svg?sanitize=true)](https://www.npmjs.com/package/@woff2/woff2-rs-darwin-arm64) |
| Linux x64 gnu    | ✓          | ✓          | ✓          |  ✓         |[![npm version](https://img.shields.io/npm/v/@woff2/woff2-rs-linux-x64-gnu.svg?sanitize=true)](https://www.npmjs.com/package/@woff2/woff2-rs-linux-x64-gnu) |
| Linux x64 musl   | ✓          | ✓          | ✓          |  ✓         |[![npm version](https://img.shields.io/npm/v/@woff2/woff2-rs-linux-x64-musl.svg?sanitize=true)](https://www.npmjs.com/package/@woff2/woff2-rs-linux-x64-musl) |
| Linux arm gnu    | ✓          | ✓          | ✓          |  ✓         |[![npm version](https://img.shields.io/npm/v/@woff2/woff2-rs-linux-arm-gnueabihf.svg?sanitize=true)](https://www.npmjs.com/package/@woff2/woff2-rs-linux-arm-gnueabihf) |
| Linux arm64 gnu  | ✓          | ✓          | ✓          |  ✓         |[![npm version](https://img.shields.io/npm/v/@woff2/woff2-rs-linux-arm64-gnu.svg?sanitize=true)](https://www.npmjs.com/package/@woff2/woff2-rs-linux-arm64-gnu) |
| Linux arm64 musl | ✓          | ✓          | ✓          |  ✓         |[![npm version](https://img.shields.io/npm/v/@woff2/woff2-rs-linux-arm64-musl.svg?sanitize=true)](https://www.npmjs.com/package/@woff2/woff2-rs-linux-arm64-musl) |
| Android arm64    | ✓          | ✓          | ✓          |  ✓         |[![npm version](https://img.shields.io/npm/v/@woff2/woff2-rs-android-arm64.svg?sanitize=true)](https://www.npmjs.com/package/@woff2/woff2-rs-android-arm64) |
| Android armv7    | ✓          | ✓          | ✓          |  ✓         |[![npm version](https://img.shields.io/npm/v/@woff2/woff2-rs-android-arm-eabi.svg?sanitize=true)](https://www.npmjs.com/package/@woff2/woff2-rs-android-arm-eabi) |

### Build

After `yarn build/npm run build` command, you can see `package-template.[darwin|win32|linux].node` file in project root. This is the native addon built from [lib.rs](./src/lib.rs).

### Test

With [ava](https://github.com/avajs/ava), run `yarn test/npm run test` to testing native addon. You can also switch to another testing framework if you want.

## Develop requirements

- Install the latest `Rust`
- Install `Node.js@10+` which fully supported `Node-API`
- Install `yarn@1.x`

## Test in local

- yarn
- yarn build
- yarn test

## Release package

Ensure you have set your **NPM_TOKEN** in the `GitHub` project setting.

In `Settings -> Secrets`, add **NPM_TOKEN** into it.

When you want to release the package:

`npm version [<newversion> | major | minor | patch | premajor | preminor | prepatch | prerelease [--preid=<prerelease-id>] | from-git]`

```
# 1.0.0 => 1.0.1
npm version patch

# or 1.0.0 => 1.1.0
npm version minor

git push
```
