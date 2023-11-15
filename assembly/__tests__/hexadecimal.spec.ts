import { getEvenHexString, hexStringToArrayBuffer } from "..";

describe("Hexadecimal utilities tests", () => {
  it("should get even hexadecimal string from odd hexadecimal string with 0x prefix", () => {
    let hex_0 = "0xabbccdd";
    let response_0 = getEvenHexString(hex_0);
    expect(response_0).toBe("0x0abbccdd", "hex not converted to even hex");

    let hex_1 = "0xffccbbee";
    let response_1 = getEvenHexString(hex_1);
    expect(response_1).toBe(hex_1, "even hex changed when already even hex");
  });

  it("should get even hexadecimal string from odd hexadecimal string without 0x prefix", () => {
    let hex_0 = "abbccdd";
    let response_0 = getEvenHexString(hex_0);
    expect(response_0).toBe("0abbccdd", "hex not converted to even hex");

    let hex_1 = "ffccbbee";
    let response_1 = getEvenHexString(hex_1);
    expect(response_1).toBe(hex_1, "even hex changed when already even hex");
  });

  it("should convert correctly from even hex string and with 0x prefix", () => {
    let hex_value = "0x4039ce1220f9f21ceac1c9182421d7d2";
    let hex_bytes_length = (hex_value.length - 2) / 2;
    let buffer = hexStringToArrayBuffer(hex_value);

    expect(hex_value.length % 2).toBe(0, "not even hex value");

    expect(buffer.byteLength).toBe(
      hex_bytes_length,
      "wrong length assigned to buffer"
    );

    let u8array = Uint8Array.wrap(buffer);

    for (let i = 1; i <= u8array.length; i++) {
      let value_u8 = u8array.at(i - 1);
      let value_string = hex_value.slice(i * 2, i * 2 + 2);

      // Remove zero padding on string since parsing to string does not take in count that
      if (value_string.startsWith("0")) {
        value_string = value_string.slice(1);
      }

      expect(value_u8.toString(16)).toBe(value_string, "wrong string value");
      expect(U8.parseInt(value_string, 16)).toBe(value_u8, "wrong u8 value");
    }
  });
  it("should convert correctly from odd hex string and with 0x prefix", () => {
    let hex_value = "0xa8e3b77fe68a0223e640b6859d2decd";
    let hex_bytes_length = (hex_value.length - 2) / 2 + 1; // Since it's odd, we add 1
    let buffer = hexStringToArrayBuffer(hex_value);

    expect(hex_value.length % 2).not.toBe(0, "not odd hex value");

    expect(buffer.byteLength).toBe(
      hex_bytes_length,
      "wrong length assigned to buffer"
    );

    let u8array = Uint8Array.wrap(buffer);

    for (let i = 1; i <= u8array.length; i++) {
      let value_u8 = u8array.at(i - 1);
      let value_string = hex_value.slice(i * 2 - 1, i * 2 + 1);
      if (i == 1) {
        // Only taking the first char after 0x
        value_string = hex_value.slice(i * 2, i * 2 + 1);
      }

      // Remove zero padding on string since parsing to string does not take in count that
      if (value_string.startsWith("0")) {
        value_string = value_string.slice(1);
      }

      expect(value_u8.toString(16)).toBe(value_string, "wrong string value");
      expect(U8.parseInt(value_string, 16)).toBe(value_u8, "wrong u8 value");
    }
  });
  it("should convert correctly from even hex string and without 0x prefix", () => {
    let hex_value = "e66f307ffa84be558501ec5c8120769a";
    let hex_bytes_length = hex_value.length / 2;
    let buffer = hexStringToArrayBuffer(hex_value);

    expect(hex_value.length % 2).toBe(0, "not even hex value");

    expect(buffer.byteLength).toBe(
      hex_bytes_length,
      "wrong length assigned to buffer"
    );

    let u8array = Uint8Array.wrap(buffer);

    for (let i = 0; i < u8array.length; i++) {
      let value_u8 = u8array.at(i);
      let value_string = hex_value.slice(i * 2, i * 2 + 2);

      // Remove zero padding on string since parsing to string does not take in count that
      if (value_string.startsWith("0")) {
        value_string = value_string.slice(1);
      }

      expect(value_u8.toString(16)).toBe(value_string, "wrong string value");
      expect(U8.parseInt(value_string, 16)).toBe(value_u8, "wrong u8 value");
    }
  });
  it("should convert correctly from odd hex string and without 0x prefix", () => {
    let hex_value = "ccccec3395817461bafb855de4c731e";
    let hex_bytes_length = hex_value.length / 2 + 1; // Since it's odd, we add 1
    let buffer = hexStringToArrayBuffer(hex_value);

    expect(hex_value.length % 2).not.toBe(0, "not odd hex value");

    expect(buffer.byteLength).toBe(
      hex_bytes_length,
      "wrong length assigned to buffer"
    );

    let u8array = Uint8Array.wrap(buffer);

    for (let i = 0, j = 0; i < u8array.length; i += 2, j++) {
      let value_u8 = u8array.at(j);
      let value_string = hex_value.slice(i - 1, i + 1);
      if (i == 0) {
        value_string = hex_value.slice(i, i + 1);
      }

      // Remove zero padding on string since parsing to string does not take in count that
      if (value_string.startsWith("0")) {
        value_string = value_string.slice(1);
      }

      expect(value_u8.toString(16)).toBe(value_string, "wrong string value");
      expect(U8.parseInt(value_string, 16)).toBe(value_u8, "wrong u8 value");
    }
  });
});
