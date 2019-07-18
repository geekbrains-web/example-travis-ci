function countingValleys(pathString) {
	let countOfValley = 0;
	const terrain = "";
	let level = 0;
	const path = pathString.split("");

	path.forEach((value) => {
		if (terrain != "valley" && value == "D" && level == 0) {
			terrain == "valley";
			countOfValley++;
		} else {
			terrain == "mountain";
		}

		if (value == "D") level--;
		else level++;
	});

	return countOfValley;
}

module.exports = countingValleys;
