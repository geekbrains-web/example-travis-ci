const isAdult = require("./isAdult");

test("isAdult: check age less than 18", () => {
	expect(isAdult(14)).toBe(false);
});

test("isAdult: check age more than 18", () => {
	expect(isAdult(25)).toBe(true);
});


test("isAdult: check age equal 18", () => {
	expect(isAdult(18)).toBe(true);
});
