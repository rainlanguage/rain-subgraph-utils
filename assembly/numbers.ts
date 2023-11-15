import { BigDecimal, BigInt, Bytes } from "@graphprotocol/graph-ts";

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


export function toDisplayWithDecimals(
  amount: BigInt,
  decimals: i32
): BigDecimal {
  let denominator = BigInt.fromString(getZeros(decimals));
  return amount.toBigDecimal().div(denominator.toBigDecimal());
}

export function gcd(a: BigInt, b: BigInt): BigInt {
  if (b.equals(BigInt.zero())) {
    return a;
  } else {
    return gcd(b, a.mod(b));
  }
}

export function BDtoBIMultiplier(n1: BigDecimal, n2: BigDecimal): BigInt {
  let n1_split = n1.toString().split(".");
  let n1_decimals = n1_split.length == 1 ? 0 : n1_split[1].length;

  let n2_split = n2.toString().split(".");
  let n2_decimals = n2_split.length == 1 ? 0 : n2_split[1].length;

  let number: BigDecimal;
  if (n1_decimals > n2_decimals) {
    number = n1;
  } else {
    number = n2;
  }
  let location = number.toString().indexOf(".");
  let len = number.toString().slice(location + 1).length;
  return BigInt.fromString(getZeros(len));
}
