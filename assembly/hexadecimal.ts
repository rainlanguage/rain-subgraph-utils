/**
 * Checks if a given hexadecimal string has an even length.
 *
 * **Note**: This function does not validate if the string is a proper hexadecimal representation;
 * it solely checks whether the length is even. If the length is odd, it is advisable to add a leading zero
 * to ensure a proper hexadecimal format.
 *
 * @param value_ The input hexadecimal string to be checked.
 * @returns A boolean indicating whether the input string has an even length.
 */
export function getEvenHexString(value_: string): string {
  if (value_.length % 2 != 0) {
    value_ = value_.slice(0, 2) + "0" + value_.slice(2);
  }

  return value_;
}

/**
 * Creates an ArrayBuffer from a given hexadecimal string.
 *
 * Note: This function does not validate if the string is a proper hexadecimal representation;
 * it assumes that the input string is formatted as a valid hexadecimal value.
 *
 * @param value_ The input hexadecimal string.
 * @returns An ArrayBuffer representing the data encoded by the hexadecimal string.
 */
export function hexStringToArrayBuffer(value_: string): ArrayBuffer {
  value_ = getEvenHexString(value_);

  const buff = new ArrayBuffer(value_.length / 2);
  const view = new DataView(buff);
  for (let i = 0, j = 0; i < value_.length; i = i + 2, j++) {
    view.setUint8(j, u8.parse(`${value_.at(i)}${value_.at(i + 1)}`, 16));
  }
  return buff;
}

/**
 * Checks if a given string is a valid hexadecimal representation.
 *
 * @param hexString The input string to be validated.
 * @returns A boolean indicating whether the input string is a valid hexadecimal representation.
 */
export function isHexString(value_: string): boolean {
  // Check if string is empty
  if (value_.length == 0) {
    return false;
  }

  // Check if each character is a valid hexadecimal character
  for (let i = 0; i < value_.length; i++) {
    let charCode = value_.charCodeAt(i);
    if (
      !(
        (charCode >= 48 && charCode <= 57) || // 0-9
        (charCode >= 65 && charCode <= 70) || // A-F
        (charCode >= 97 && charCode <= 102)
      )
    ) {
      // a-f
      return false;
    }
  }

  return true;
}
