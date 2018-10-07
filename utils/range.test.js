import range from "./range.js";

test("range(0,1) should be [0]", () => {
    expect(range(0, 1)).toEqual([0]);
})

test("range(1,5) should be [1, 2, 3, 4]", () => {
    expect(range(1, 5)).toEqual([1, 2, 3, 4]);
})

test("range(1, 5, .5) should be [1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5]", () => {
    expect(range(1, 5, .5)).toEqual([1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5]);
})