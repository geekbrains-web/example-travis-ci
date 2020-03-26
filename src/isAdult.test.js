const isAdult = require("./isAdult");

test("Is age > 18 is true", () => {
	expect(isAdult(35)).toBe(true);
});

test("Is age < 18 is false", () => {
	expect(isAdult(14)).toBe(false);
});


test("Is age = 18 is false", () => {
	expect(isAdult(18)).toBe(true);
});
