$(document).ready(function() {
	// scrolling from to the intro location
	$("#first, #firstScrolle").click(function() {
		$('html, body').animate({
			scrollTop : $("#aktuelles").offset().top
		}, 2000);
	});

	$("#second, #secondScrolle").click(function() {
		$('html, body').animate({
			scrollTop : $("#intro").offset().top
		}, 2000);
	});

	$("#third, #thirdScrolle").click(function() {
		$('html, body').animate({
			scrollTop : $("#alpin").offset().top
		}, 2000);
	});

	$("#forth, #forthScrolle").click(function() {
		$('html, body').animate({
			scrollTop : $("#board").offset().top
		}, 2000);
 	});

	$("#fifth, #fifthScrolle").click(function() {
		$('html, body').animate({
			scrollTop : $("#termin").offset().top
		}, 2000);
	});

	$("#sixth, #sixthScrolle").click(function() {
    	$('html, body').animate({
        	scrollTop: $("#foerderverein").offset().top
    	}, 2000);
	});

	// togglefunction for the subnavigation
      var par = $('p');
      $("#f1").hide();
      $("#f2").hide();

      $('#f').click(function(e) {
      $("#f1").slideToggle('slow');
          e.preventDefault();
                $("#f2").slideToggle('slow');
          e.preventDefault();
      });

      var par = $('p');
      $("#h1").hide();
      $("#h2").hide();

      $('#h').click(function(e) {
      $("#h1").slideToggle('slow');
          e.preventDefault();
                $("#h2").slideToggle('slow');
          e.preventDefault();
      });

      var par = $('p');
      $("#g1").hide();

      $('#g').click(function(e) {
      $("#g1").slideToggle('slow');
          e.preventDefault();
      });

      var par = $('i');
      $("#i1").hide();

      $('#i').click(function(e) {
      $("#i1").slideToggle('slow');
          e.preventDefault();
      });
});