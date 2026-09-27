let firstNumber = Number(prompt("Enter the first number"));
let operator = prompt("Enter an operator: +, -, *, or /");
let secondNumber = Number(prompt("Enter the second number"));
let result;

if (Number.isNaN(firstNumber) || Number.isNaN(secondNumber)) {
	console.log("Please enter valid numbers");
} else if (operator === "+") {
	result = firstNumber + secondNumber;
} else if (operator === "-") {
	result = firstNumber - secondNumber;
} else if (operator === "*") {
	result = firstNumber * secondNumber;
} else if (operator === "/" && secondNumber !== 0) {
	result = firstNumber / secondNumber;
} else if (operator === "/" && secondNumber === 0) {
	console.log("Cannot divide by zero");
} else {
	console.log("Please enter a valid operator");
}

if (result !== undefined) {
	console.log(`${firstNumber} ${operator} ${secondNumber} = ${result}`);
}
