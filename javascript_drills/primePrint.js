// Take a number, and print all primes up to and 
// including that number.

var number = 67;
var range = [];

var numArray = function(element) {
	if (isNaN(element)) {
		return;
	}
	for (var i = 0; i <= element; i ++) {
		range.push(i);
	}
};
// creates an array from 0 to the number specified
numArray(number);

// function runs through array and checks each el at a time.
// if an el is prime, it will print it to the console.
function primePrint(element) {
	if (isNaN(element)) {
		return false;
	}
	if (element <= 0 || element === 1) {
		return false;
	}
	if (element % 2 === 0 && element != 2 || element % 3 === 0 && element != 3 || element % 5 === 0) {
		return false;
	}
	if (element % Math.sqrt(element) === 0) {
		return false;
	}
	console.log(element);
};

function addComposite(element) {
	if (element % 2 === 0) {
		range.forEach(primePrint);
		console.log(number);
		return;
	}
	range.forEach(primePrint);
	// PROBLEM: adds double the numbers!
	console.log(number);
};
// if the number was even, it adds the number to the array
addComposite(number);
