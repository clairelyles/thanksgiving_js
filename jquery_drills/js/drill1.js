$(function(){

// function sets all the jQuery methods to be applied on '.ball' once the element is clicked
$('.stage').on('click', function() {
	var randomLoc = Math.floor(Math.random());
	$('.ball')
		.fadeOut(500, function() {
			$('.ball').css({
				marginTop: (Math.floor(Math.random() * ($('.stage').width()-$('.shape').width()))),
				marginLeft: (Math.floor(Math.random() * ($('.stage').height()-$('.shape').height()))),
				})
			.fadeIn(500)
		})
})

// When the ball is clicked, pass the .ball css selector through the ballMove function


});
