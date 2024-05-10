import bubble_sort from "../../src/sorting/bubble_sort";

describe("should sort the array", () => {
  it("", () => {
    const arr = [1, 5, 6, 8, 4, 5, 3, 1, 5];
    expect(bubble_sort(arr));
  });
});
