/**
 * Represents a utility class for converting a Map to a JSON string representation.
 *
 * @example
 * ```typescript
 * export class ExtendedJsonStringExample extends JsonString {
 *  constructor(name: string, age: i32) {
 *    const map: Map<string, string> = new Map();
 *    map.set("name", name);
 *    map.set("age", age.toString());
 *    super(map);
 *  }
 *}
 * ```
 */
export class JsonString {
  private _obj: Map<string, string>;

  /**
   * Initializes a new instance of the JsonString class with the given Map.
   *
   * @param map_ The Map to be converted to JSON string.
   */
  constructor(map_: Map<string, string>) {
    this._obj = map_;
  }

  /**
   * Converts the internal Map to a JSON string representation.
   *
   * @returns A JSON string representation of the Map.
   */
  stringify(): string {
    const keys = this._obj.keys();
    const objs: string[] = new Array<string>(keys.length);

    for (let i: i32 = 0; i < keys.length; i++) {
      const key = keys[i];
      const value = this._obj.get(key);

      // Check if the value represents an array or object
      if (
        (value.startsWith("[") && value.endsWith("]")) ||
        (value.startsWith("{") && value.endsWith("}"))
      ) {
        // If it's an array or object, include it as is in the JSON
        objs[i] = `"${key}":${value}`;
      } else {
        // If it's not an array or object, include it with quotes in the JSON
        objs[i] = `"${key}":"${value}"`;
      }
    }

    // Combine individual objects into a JSON object and return as a string
    return `{${objs.join(",")}}`;
  }
}
