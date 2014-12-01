$(function(){

	$(document).on('keyup',function(event){
		var up = 38;
		var right = 39;
		var down = 40;
		var left = 37;
		var letterS = 83;
		var randomLoc = Math.random();

		if (event.keyCode === left) {
			$('.stage')
			.find('.shape')
			.animate({
				left: 0,
			})
			console.log('left worked!');
		}
		if (event.keyCode === up) {
			$('.stage')
			.find('.shape')
			.animate({
				top: 0,
			})
			console.log('up worked!');
		}
		if (event.keyCode === right) {
			$('.stage')
			.find('.shape')
			.animate({
				left: 800,
			})
			console.log('right worked!');
		}
		if (event.keyCode === down) {
			$('.stage')
			.find('.shape')
			.animate({
				top: 400,
			})
			console.log('down worked!');
		}
		if (event.keyCode === letterS) {
			$('.stage')
			// .find('.shape')
			.effect('shake', {times: 2, direction: 'down', distance: 5}, 1000)
			console.log('S worked!');
		}
		console.log('The user pressed key: ',event.which);
	});
});


