function findSameNumbers(numbers) {
	let seenNumbers = new Set();
	let sameNumbers = new Set();

	for (let number of numbers) {
		if (seenNumbers.has(number)) {
			sameNumbers.add(number);
		} else {
			seenNumbers.add(number);
		}
	}

	return [...sameNumbers];
}

let numbers = [10, 5, 8, 10, 3];
let sameNumbers = findSameNumbers(numbers);

console.log(sameNumbers);
