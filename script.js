$(document).ready(function() {

	// scrolling from to the intro location
	$("#first, #firstScrolle").click(function() {
		$('html, body').animate({
			scrollTop : $("#intro").offset().top
		}, 2000);
	});

	$("#second, #secondScrolle").click(function() {
		$('html, body').animate({
			scrollTop : $("#alpin").offset().top
		}, 2000);
	});

	$("#third, #thirdScrolle").click(function() {
		$('html, body').animate({
			scrollTop : $("#board").offset().top
		}, 2000);
	});

	$("#forth, #forthScrolle").click(function() {
		$('html, body').animate({
			scrollTop : $("#aktuelles").offset().top
		}, 2000);
 	});
 	
	$("#fifth, #fifthScrolle").click(function() {
		$('html, body').animate({
			scrollTop : $("#termine").offset().top
		}, 2000);
	});
	
	$("#sixth, #sixthScrolle").click(function() {
    	$('html, body').animate({
        	scrollTop: $("#foerderverein").offset().top
    	}, 2000);
	});  
	 
	
	// togglefunction for the subnavigation
	// TODO soll vertikal scrollen und als default geschlossen sein
	
				$(".subheadone").click(function() {
				$(".listheadone").toggle();
				});
				
				$(".subheadtwo").click(function() {
				$(".listheadtwo").toggle();
				});
				
				$(".subheadthree").click(function() {
				$(".listheadthree").toggle();
				});
				
				$(".subheadfour").click(function() {
				$(".listheadfour").toggle();
				});				


}); 