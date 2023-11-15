import { JsonString } from "..";

describe("Number utilities tests", () => {
  it("should generate json string from basic map", () => {
    const map: Map<string, string> = new Map();
    map.set("key_1", "value_1");
    map.set("key_2", "value_2");
    map.set("key_3", "value_3");

    let json_string = new JsonString(map);
    expect(json_string.stringify()).toStrictEqual(
      '{"key_1":"value_1","key_2":"value_2","key_3":"value_3"}'
    );
  });

  it("should generate json with array from map with array numbers", () => {
    const map: Map<string, string> = new Map();
    const array = [0, 1, 2, 3, 999];

    map.set("key_1", "value_1");
    map.set("key_2", "value_2");
    map.set("key_3", `[${array.join(", ")}]`);

    let json_string = new JsonString(map);
    expect(json_string.stringify()).toStrictEqual(
      '{"key_1":"value_1","key_2":"value_2","key_3":[0, 1, 2, 3, 999]}'
    );
  });
  it("should generate json with array from map with array strings", () => {
    const map: Map<string, string> = new Map();
    const array = ["index_0", "index_1", "index_2", "index_3", "index_4"];

    map.set("key_1", "value_1");
    map.set("key_2", "value_2");
    map.set("key_3", `[${array.join(", ")}]`);

    let json_string = new JsonString(map);
    expect(json_string.stringify()).toStrictEqual(
      '{"key_1":"value_1","key_2":"value_2","key_3":[index_0, index_1, index_2, index_3, index_4]}'
    );
  });

  it("should generate json with array from map with object string", () => {
    const map: Map<string, string> = new Map();

    const obj_string = '{"index_0":"sub_value_0","index_1":99,2:"value",76:55}';

    map.set("key_1", "value_1");
    map.set("key_2", "value_2");
    map.set("key_3", obj_string);

    let json_string = new JsonString(map);
    expect(json_string.stringify()).toStrictEqual(
      '{"key_1":"value_1","key_2":"value_2","key_3":{"index_0":"sub_value_0","index_1":99,2:"value",76:55}}'
    );
  });
});
