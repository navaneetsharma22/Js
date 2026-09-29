let numbers = [45, 65, 35, 25, 15, 5];
let maxNumber = numbers[0];

for (let number of numbers) {
	if (number > maxNumber) {
		maxNumber = number;
	}
}

console.log("The maximum number is:", maxNumber);