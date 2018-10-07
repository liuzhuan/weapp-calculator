import round from "./round.js";

test("round(1.245, 2) should be 1.25", () => {
    expect(round(1.245, 2)).toBe(1.25);
})

test("round(1.245, 1) should be 1.2", () => {
    expect(round(1.245, 1)).toBe(1.2);
})