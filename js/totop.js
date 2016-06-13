(function($) {
	//higher number = scroll link appears further down the page
	var upperLimit = 1000;

	//our scroll link element
	var scrollElem = $('#totop');

	//scroll to top speed
	var scrollSpeed = 500;

	//show and hide the scroll to top link based on scroll position
	scrollElem.hide();
	$(window).scroll(function (){
		var scrollTop = $(document).scrollTop();
		if(scrollTop > upperLimit){
			$(scrollElem).stop().fadeTo(300,1);//fade back in
		}
		else {
			$(scrollElem).stop().fadeTo(300,0);//fade out
		}
	});

	//scroll to top animation on click
	$(scrollElem).click(function () {
		$('html, body').animate({scrollTop:0}, scrollSpeed); return false;
	});
})(jQuery);
