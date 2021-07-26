function binToDec(binary) {
	binary = binary.toString();
	const split = binary.split("");
	let result = 0;
	for (let i = 0; i < split.length; i++) {
		if (split[i] === "1") {
			result += 1 * Math.pow(2, i);
		}
	}
	return result;
}

function decToBin(number) {
	let check = false;
	let result = "";
	while (!check) {
		if (number / 2 == 0) {
			check = true;
		} else {
			const mod = number % 2;
			result += mod.toString();
			number = Math.floor(number / 2);
		}
	}

	return result.split("").reverse().join("");
}

console.log(decToBin(50));
