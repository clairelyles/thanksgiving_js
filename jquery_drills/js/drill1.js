$(function(){

	//When the ball is clicked it should fade out, 
	//move to a new random location, and then fade back in. 
	//The new location must be within the .stage div.
	var ballMove = function(event) {
		$(this).hide.fadeOut(5000);
		// .css({
		// 	left:(Math.random()*$(window).width()-20),
  //           top:(Math.random()*$(window).height()-20),      
  //        })
	}
   console.log('The dom is ready! (drill 1)');
   $('.stage').on('click', '.shape ball', ballMove);

});

