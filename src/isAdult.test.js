const isAdult = require("./isAdult.js");

test("It's age more than 18", () => {
	expect(isAdult(20)).toBe(true);
});

test("It's age less than 15", () => {
	expect(isAdult(15)).toBe(false);
});

test("It's age equl 18", () => {
	expect(isAdult(18)).toBe(true);
});
