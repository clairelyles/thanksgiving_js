//Return true or false if a number is a prime number

number1 = -2;
number2 = 0;
number3 = 1;
number4 = 2;
number5 = 4;
number6 = 5;
number7 = 2209;
number8 = 397;
number9 = "test";

var prime = function(num) {
	// Checks if user input a string
	if (isNaN(num)) {
		return "NaN";
	}
	// 1 is a special case since anything <= 0 is not prime, but 2 is
	if (num <= 0 || num === 1) {
		return "false";
	}
	// Checks for composite numbers and excludes 2 (only even prime #)
	if (num % 2 === 0 && num != 2 || num % 3 === 0 && num != 3 || num % 5 === 0 && num != 5) {
		return "false";
	}
	if (num % Math.sqrt(num) === 0) {
		return "false";
	}
	return "true";
};

console.log(number1 + " is " + prime(number1));
console.log(number2 + " is " + prime(number2));
console.log(number3 + " is " + prime(number3));
console.log(number4 + " is " + prime(number4));
console.log(number5 + " is " + prime(number5));
console.log(number6 + " is " + prime(number6));
console.log(number7 + " is " + prime(number7));
console.log(number8 + " is " + prime(number8));
console.log(number9 + " is " + prime(number9));
