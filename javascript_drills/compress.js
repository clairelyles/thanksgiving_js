// Use a pattern and consolidate the amount of characters into a simplified string
// If a character is represented more than once, append the number of occurences 
// in front of it. If a chracter is only represented once, just put that letter


var stringIn = 'AAAA';
var length = stringIn.length;
var stringOut = '';


var stringCheck = function(string) {
	var prev = string.charAt(i);
	var next = string.charAt(i - 1);
	for (var i = 1; i = length; i++) {
		if (prev === next) {
			console.log("Match!");
		}
		return;
	}
}

console.log(stringCheck(stringIn));
