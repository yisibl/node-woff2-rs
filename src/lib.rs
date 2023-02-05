#![deny(clippy::all)]

use napi::bindgen_prelude::Buffer;
use napi_derive::napi;

use woff2::decode::{convert_woff2_to_ttf};

#[napi]
pub fn decode(input: Buffer) -> Buffer {
  let output = convert_woff2_to_ttf(&mut std::io::Cursor::new(input));

  Buffer::from(output.unwrap())
}
