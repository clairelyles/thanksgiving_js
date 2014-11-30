//Take two arrays, and combine them.

var artists = ["Passion Pit", "Mumford and Sons", "MGMT"];
var albums = ["Gossamer", "Sigh no more", "Time to Pretend"];

var zip = function(array1,array2) {
	result = array1.map(function(element, index) {
		return [element, array2[index]];
	})
	return result
}

console.log(zip(artists,albums));