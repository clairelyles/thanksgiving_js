// Create a method called is_palindrome to check if a 
// string is a palindrome.

// testing different string cases
string1 = "Racecar";
string2 = "racecar";
string3 = "wow";
string4 = "woo";
string5 = "cat";
string6 = "o";
string7 = "cd";
string8 = "cc";
string9 = "543345";

var is_palindrome = function(mystring) {
	for (var i = 0; i < mystring.length; i++) {
		var j = mystring.length-1-i;
		if (mystring.toLowerCase().charAt(i) != (mystring.toLowerCase().charAt(j))) {
			return false
		}
		// ex racecar, when i = 3 or greater
		// Stops the code from re-running over itself
		if (i >= j) {
			return true;
		}
	}
}
console.log(is_palindrome(string1));
console.log(is_palindrome(string2));
console.log(is_palindrome(string3));
console.log(is_palindrome(string4));
console.log(is_palindrome(string5));
console.log(is_palindrome(string6));
console.log(is_palindrome(string7));
console.log(is_palindrome(string8));
console.log(is_palindrome(string9));