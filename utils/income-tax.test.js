import utils from "./index.js";

test("tax of 0 should be 0", () => {
    expect(utils.incomeTax(0)).toBe(0);
});

test("tax of 5000 should be 0", () => {
    expect(utils.incomeTax(5000)).toBe(0);
});

test("tax of 8000 should be 90", () => {
    expect(utils.incomeTax(8000)).toBe(90);
});

test("tax of 17000 should be 990", () => {
    expect(utils.incomeTax(17000)).toBe(990);
});

test("tax of 30000 should be 3590", () => {
    expect(utils.incomeTax(30000)).toBe(3590);
});

test("tax of 40000 should be 6090", () => {
    expect(utils.incomeTax(40000)).toBe(6090);
});

test("tax of 60000 should be 12090", () => {
    expect(utils.incomeTax(60000)).toBe(12090);
});

test("tax of 85000 should be 20840", () => {
    expect(utils.incomeTax(85000)).toBe(20840);
});

test("tax of 100000 should be 27590", () => {
    expect(utils.incomeTax(100000)).toBe(27590);
});