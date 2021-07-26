function palindromeV2(str) {
	let split = str.split(" ").join("");
	let tmp = "";
	for (let i = 0; i < split.length; i++) {
		for (let j = split.length; j > i; j--) {
			let string = split.slice(i, j);
			const reverse = string.split("").reverse().join("");
			if (reverse === string && tmp.length < string.length) {
				tmp = string;
			}
		}
	}
	return tmp;
}

let a = palindromeV2("abcde edcbza");
console.log(a);
