// The entry file of your WebAssembly module.
import { MagicNumbers } from "./rain-documents";

export function add(a: i32, b: i32): i32 {
  return a + b;
}

export { MagicNumbers };
