function palindrome(str) {
	let split = str.split(" ").reverse().join("");
	console.log(split);
}

palindrome("aku suka makan nasi");
