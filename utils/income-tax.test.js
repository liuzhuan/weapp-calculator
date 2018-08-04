import utils from "./index.js";

test("tax of 0 should be 0", () => {
    expect(utils.incomeTax(0)).toBe(0);
});

test("tax of 3500 should be 0", () => {
    expect(utils.incomeTax(3500)).toBe(0);
});

test("tax of 5000 should be 45", () => {
    expect(utils.incomeTax(5000)).toBe(45);
});

test("tax of 8000 should be 345", () => {
    expect(utils.incomeTax(8000)).toBe(345);
});

test("tax of 12500 should be 1245", () => {
    expect(utils.incomeTax(12500)).toBe(1245);
});

test("tax of 38500 should be 7745", () => {
    expect(utils.incomeTax(38500)).toBe(7745);
});

test("tax of 58500 should be 13745", () => {
    expect(utils.incomeTax(58500)).toBe(13745);
});

test("tax of 7528.35 should be close to 297.84", () => {
    expect(utils.incomeTax(7528.35)).toBeCloseTo(297.84);
});