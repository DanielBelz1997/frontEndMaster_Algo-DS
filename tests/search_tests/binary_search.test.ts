import bs_list from "../../src/binary_search";

describe("binary search test", () => {
  it("should return true. needle is there", () => {
    const needle = 5;
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    expect(bs_list(arr, needle)).toBe(true);
  });
  it("should return false, needle isnt there", () => {
    const needle = 4;
    const arr = [1, 2, 3, 5, 6, 7];
    expect(bs_list(arr, needle)).toBe(false);
  });
});
