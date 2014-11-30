// Write a method to return the Nth number of Fibonacci sequence.

// Fib sequence begins in 0 or 1. 
// Each consecutive number is the sum of the previous two.
// e.g.  0,1,1,2,3,5,8,13,21,34,55,89,144...
// index 0,1,2,3,4,5,6,7,8,9,10,11,12,13....


var n = 10;
var fibArray = [0,1];

var nthFibArray = function(n) {
	for (var i = 2; i <= n; i ++) {
		// next el in the array is the sum of the prev two
		fibArray[i] = fibArray[i-1] + fibArray[i-2];
	}
	return fibArray;
};

// specify the length of the array based on the Nth el desired
console.log(nthFibArray(n));

// since the Nth el is desired, all we need to do is pop it off! Fibs be poppn'!
var fibPopped = fibArray.pop(n);
console.log(fibPopped);

