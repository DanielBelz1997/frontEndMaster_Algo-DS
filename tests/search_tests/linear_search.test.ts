import linearSearch from "../../src/linear_search"; // Assuming your function is in linearSearch.js

describe("linearSearch", () => {
  it("should return true if the needle is found in the array", () => {
    const arr = [1, 9, 2, 8, 8, 4, 4, 6, 6, 5];
    const needle = 5;
    expect(linearSearch(arr, needle)).toBe(true);
  });
  it("should return false if the needle isnt in the array", () => {
    const arr = [1, 2, 3, 4, 5, 6, 6, 7, 7, 7, 8];
    const needle = 9;
    expect(linearSearch(arr, needle)).toBe(false);
  });
});
