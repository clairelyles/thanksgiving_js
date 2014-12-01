$(function(){

// function sets all the jQuery methods to be applied on '.ball' once the element is clicked
var ballMove = function(event) {
	var randomLoc = Math.random();
	// applies jQuery methods to '.ball', once the 'click' event listener is triggered
	$(this)
		.fadeOut('5000')
		.animate({
			top: randomLoc * 300,
			right: randomLoc * 300,
			}, 500)
		.fadeIn('5000')
		console.log('test');
}

// When the ball is clicked, pass the .ball css selector through the ballMove function
$('.stage').on('click', '.ball', ballMove);

});
