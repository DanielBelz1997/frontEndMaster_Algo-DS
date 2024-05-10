import two_crystal_balls from "../../src/search/two_crystal_balls";

describe("should catch the breaking point", () => {
  it("in the 118 floor", () => {
    const floors = [];
    for (let i = 0; i < 200; ++i) {
      if (i < 118) {
        floors.push(false);
      } else {
        floors.push(true);
      }
    }
    expect(two_crystal_balls(floors)).toBe(118);
  });
});
