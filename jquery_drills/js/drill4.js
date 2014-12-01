$(function(){

    var $firstDiv = $('.stage').find('#first');
    var $secondDiv = $('.stage').find('#second');
    var $firstList = $firstDiv.find('.first');
    var $secondList = $firstDiv.find('.second');
    var $thirdItem = $secondDiv.find('.first');
    var $thirdItemDiv = $thirdItem.find('.first');

 	/////////////////// Q#1 /////////////////// 
    // var rmFirstDiv = function(event) {
    // 	$(this)
    // 		.remove('#first')
    // 	console.log('test')
    // }
    // $firstDiv.on('click',rmFirstDiv);

 	/////////////////// Q#2 /////////////////// 
    // var rmFirstList = function(event) {
    // 	$(this)
    // 		.remove('.first')
    // 	console.log('test')
    // }
    // $firstList.on('click',rmFirstList);

    /////////////////// Q#3 /////////////////// 
    // var rmSecondList = function(event) {
    // 	$(this)
    // 		.remove('.second')
    // 	console.log('test')
    // }
    // $secondList.on('click',rmSecondList);

 	/////////////////// Q#4 /////////////////// 
    // var rmSecondDiv = function(event) {
    // 	$(this)
    // 		.remove('#second')
    // 	console.log('test')
    // }
    // $secondDiv.on('click',rmSecondDiv);

    /////////////////// Q#5?????? /////////////////// 
    var rmThirdItem = function(event) {
    	$(this)
    		.remove($('li').eq(2))
    	console.log('test')
    }
    $thirdItemDiv.find($('li').eq(2)).on('click',rmThirdItem);

    /////////////////// Q#6?????? /////////////////// 

 	/////////////////// Q#4 /////////////////// 

});

