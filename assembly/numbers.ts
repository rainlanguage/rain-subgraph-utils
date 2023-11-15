import { BigInt, Bytes } from "@graphprotocol/graph-ts";

/**
 * Generates a string with a specified number of trailing zeros.
 *
 * If negative or zero values are provided, it will generate a default value (`1`)
 *
 * @param num The number of zeros to generate in the string.
 * @returns A string with the specified number of trailing zeros.
 *
 * @example
 * ```typescript
 * const result1: string = getZeros(5);
 * // Result: "100000"
 *
 * const result2: string = getZeros(8);
 * // Result: "100000000"
 * ```
 */
export function getZeros(num: number): string {
  let s = "1";
  for (let i = 0; i < num; i++) {
    s = s + "0";
  }
  return s;
}

export function hexToBigInt(hexString: string): BigInt {
  return BigInt.fromUnsignedBytes(
    changetype<Bytes>(Bytes.fromHexString(hexString).reverse())
  );
}
