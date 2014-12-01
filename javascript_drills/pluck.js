// Using map construct a function called Pluck that will input 
// array, and grab all matching keys. The function should return 
// the value of keys in an array

var albums = [
    {'name': 'Gossamer', 'artist': 'Passion Pit'},
    {'name': 'Sigh no more', 'artist': 'Mumford and Sons'},
    {'name': 'Time to Pretend', 'artist': 'MGMT'}
];

// albums[0]['name'] 
// albums[0].name

var pluck = function (array, anyKey) {
	var result = array.map(function(currentValue) {
	return currentValue[anyKey];
	})
	return result
}

// var pluck2 = function(array, anyKey) {
// 	var result1 = array.map(function(currentValue) {
// 	return currentValue[anyKey];
// 	})
// 	return result1
// }


plucked = pluck(albums,'artist');
// plucked1 = pluck2(albums,'name');
console.log(plucked);
// console.log(plucked1);
