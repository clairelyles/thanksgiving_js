$(function(){











	var $ball = $('.stage').find('.ball');
	var $shape = $('.stage').find('.shape');

	var removeBall = function(event) {
		$(this)
			.removeClass('ball')
			.css('background-color', '#33cccc')
	}

	var addBall = function(event) {
		$(this)
			.addClass('ball')
			.css('background-color', '#31698a')
	}

	$ball.on('mouseover', removeBall)
	$shape.on('mouseout', addBall)

// 	var addBall = function(event) {
// 		$ball.addClass('ball')
// 		$ball
// 			.find('.shape')
// 			.add
// 		console.log('testing testing')
// 	};

// $ball.find('.shape').on('mouseout', addBall)

});

