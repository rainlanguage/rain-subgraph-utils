/**
 * Constants representing magic numbers as hexadecimal strings used by Rain Protocol
 * to index information from metadata.
 *
 * For detailed information, refer to the Rain Protocol Metadata v1 spec:
 * https://github.com/rainprotocol/specs/blob/main/metadata-v1.md#magic-numbers
 */
export class MagicNumbers {
  /**
   * Prefixes every rain meta document
   */
  static RAIN_META_DOCUMENT: string = "0xff0a89c674ee7874";
  /**
   * Solidity ABIv2
   */
  static SOLIDITY_ABI_V2: string = "0xffe5ffb4a3ff2cde";
  /**
   * Ops meta v1
   */
  static OPS_META_V1: string = "0xffe5282f43e495b4";
  /**
   * Contract meta v1
   */
  static CONTRACT_META_V1: string = "0xffc21bbf86cc199b";
  /**
   * Authoring meta v1
   */
  static AUTHORING_META_V1: string = "0xffe9e3a02ca8e235";
  /**
   * Rainlang v1
   */
  static RAINLANG_V1: string = "0xff1c198cec3b48a7";
  /**
   * Dotrain v1
   */
  static DOTRAIN_V1: string = "0xffdac2f2f37be894";
  /**
   * ExpressionDeployerV2 bytecode v1
   */
  static EXPRESSION_DEPLOYER_V2_BYTECODE_V1: string = "0xffdb988a8cd04d32";
}
