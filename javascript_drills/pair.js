// Construct array pairs from Objects.
// You can grab all keys using Object.keys(obj) 
// and iterate over it like any other array.

var obj = {
    "Anil": "Bridgpal",
    "Sarah": "Hanley",
    "Lenny": "Urbanowski",
}


// function of an object because our var obj is an object!
var pair = function(object) {
	var arrayOfKeys = Object.keys(object);
	result = arrayOfKeys.map(function (element, index) {
	return [element, object[element]];
	})
return result;
}




console.log(pair(obj));
