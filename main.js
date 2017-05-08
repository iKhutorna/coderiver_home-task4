$(document).ready(function() {

	function getRandomArbitrary(min, max) {
	  return Math.random() * (max - min) + min;
	}

	const tl = new TimelineLite();
	tl.staggerFromTo("i", 1, {
	    y: -window.innerHeight / 2 - 100,
	    x: -window.innerHeight / 2 - 100,
	}, {
	    y: 0,
	    x: 0,
	    ease: Power1.easeOut,
	}, 0.05, "stagger"); 
	

	tl.play();


	$(".btn").click(function(event){
		$("i" ).each(function( index ) {
			TweenLite.to($(this), 1, {x:getRandomArbitrary(-150, 150), y:getRandomArbitrary(-150, 150), rotation:getRandomArbitrary(-360, 360), opacity:getRandomArbitrary(1, 0.1)});
		});
	});
});


