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

function findNumber(numbers, target) {
	return numbers.find((number) => number === target);
}

function sumNumbers(numbers) {
	return numbers.reduce((sum, number) => sum + number, 0);
}

let numbers = [10, 5, 8, 10, 3];
let sameNumbers = findSameNumbers(numbers);
let foundNumber = findNumber(numbers, 8);
let total = sumNumbers(numbers);

console.log(sameNumbers);
console.log(foundNumber);
console.log(total);
