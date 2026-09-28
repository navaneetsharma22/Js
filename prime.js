let number = Number(prompt("Enter a non-negative integer"));

function isPrime(value) {
	if (!Number.isInteger(value) || value < 2) {
		return false;
	}

	for (let divisor = 2; divisor <= Math.sqrt(value); divisor++) {
		if (value % divisor === 0) {
			return false;
		}
	}

	return true;
}

function factorial(value) {
	if (!Number.isInteger(value) || value < 0) {
		return null;
	}

	let result = 1;
	for (let current = 2; current <= value; current++) {
		result *= current;
	}

	return result;
}

if (!Number.isInteger(number) || number < 0) {
	console.log("Please enter a valid non-negative integer");
} else {
	console.log(`${number} is ${isPrime(number) ? "a prime" : "not a prime"} number`);
	console.log(`${number}! = ${factorial(number)}`);
}
