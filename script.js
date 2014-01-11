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

  
      var par = $('p');
      $(".listheadone").hide();

      $('.subheadone').click(function(e) {
      $(".listheadone").slideToggle('slow');
          e.preventDefault();
      });
 
      var par = $('p');
      $(".listheadtwo").hide();

      $('.subheadtwo').click(function(e) {
      $(".listheadtwo").slideToggle('slow');
          e.preventDefault();
      });

      var par = $('p');
      $(".listheadthree").hide();

      $('.subheadthree').click(function(e) {
      $(".listheadthree").slideToggle('slow');
          e.preventDefault();
      });
      
      var par = $('p');
      $(".listheadfour").hide();

      $('.subheadfour').click(function(e) {
      $(".listheadfour").slideToggle('slow');
          e.preventDefault();
      });
	
				
});
    	