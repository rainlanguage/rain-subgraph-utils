import { MagicNumbers } from "..";

describe("Rain document utilities tests", () => {
  it("should have 8 bytes on magic number representation", () => {
    // Test against length (including the 0x prefix) since we can't test against the same string
    // It would be just repetitive and useless
    let length = 18;

    expect(MagicNumbers.RAIN_META_DOCUMENT).toHaveLength(length);
    expect(MagicNumbers.SOLIDITY_ABI_V2).toHaveLength(length);
    expect(MagicNumbers.OPS_META_V1).toHaveLength(length);
    expect(MagicNumbers.CONTRACT_META_V1).toHaveLength(length);
    expect(MagicNumbers.AUTHORING_META_V1).toHaveLength(length);
    expect(MagicNumbers.RAINLANG_V1).toHaveLength(length);
    expect(MagicNumbers.DOTRAIN_V1).toHaveLength(length);
    expect(MagicNumbers.EXPRESSION_DEPLOYER_V2_BYTECODE_V1).toHaveLength(
      length
    );
  });
});
