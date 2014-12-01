// Use a pattern and consolidate the amount of characters into a simplified string
// If a character is represented more than once, append the number of occurences 
// in front of it. If a chracter is only represented once, just put that letter

				01234	
var stringIn = 'ABBB';
var length = stringIn.length;
var stringOut = '';
var counter = 0;


var stringCheck = function(string) {
	for (var i = 0; i = length; i++) {
		if (string[i] === string[i + 1]) {
			console.log(string.charAt[i]);
		}
		console.log("no!");
		return;
	}
}

console.log(stringCheck(stringIn));
