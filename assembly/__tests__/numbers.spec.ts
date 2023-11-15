import { getZeros } from "..";

describe("Number utilities tests", () => {
  it("should get default value from negative arguments", () => {
    let value_0 = getZeros(-1);
    expect(value_0).toBe("1");

    let value_1 = getZeros(-9999);
    expect(value_1).toBe("1");
  });
  it("should get default value from zero value argument", () => {
    let value = getZeros(0);
    expect(value).toBe("1");
  });

  it("should get correct values from the argument", () => {
    let value_0 = getZeros(5);
    expect(value_0).toBe("100000");

    let value_1 = getZeros(18);
    expect(value_1).toBe("1000000000000000000");
  });
});
