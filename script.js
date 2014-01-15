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
      $("#skitrainwinter").hide();
      $("#skitrainsummer").hide();

      $('#skitrain').click(function(e) {
      $("#skitrainwinter").slideToggle('slow');
          e.preventDefault();
                $("#skitrainsummer").slideToggle('slow');
          e.preventDefault();
      });


      var par = $('p');
      $("#snowboardtrainingwinter").hide();
      $("#snowboardtrainingsummer").hide();

      $('#snowboardtraining').click(function(e) {
      $("#snowboardtrainingwinter").slideToggle('slow');
          e.preventDefault();
                $("#snowboardtrainingsummer").slideToggle('slow');
          e.preventDefault();
      });



});
