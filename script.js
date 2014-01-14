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
      $("#a1").hide();

      $('#a').click(function(e) {
      $("#a1").slideToggle('slow');
          e.preventDefault();
      });
            var par = $('p');
      $("#b1").hide();

      $('#b').click(function(e) {
      $("#b1").slideToggle('slow');
          e.preventDefault();
      });

      var par = $('p');
      $("#c1").hide();

      $('#c').click(function(e) {
      $("#c1").slideToggle('slow');
          e.preventDefault();
      });

      var par = $('p');
      $("#d1").hide();

      $('#d').click(function(e) {
      $("#d1").slideToggle('slow');
          e.preventDefault();
      });

      var par = $('p');
      $("#e1").hide();

      $('#e').click(function(e) {
      $("#e1").slideToggle('slow');
          e.preventDefault();
      });

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
      $("#g1").hide();

      $('#g').click(function(e) {
      $("#g1").slideToggle('slow');
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
      $("#i1").hide();

      $('#i').click(function(e) {
      $("#i1").slideToggle('slow');
          e.preventDefault();
      });

      var par = $('p');
      $("#j1").hide();

      $('#j').click(function(e) {
      $("#j1").slideToggle('slow');
          e.preventDefault();
      });

      var par = $('p');
      $("#k1").hide();

      $('#k').click(function(e) {
      $("#k1").slideToggle('slow');
          e.preventDefault();
      });

      var par = $('p');
      $("#l1").hide();

      $('#l').click(function(e) {
      $("#l1").slideToggle('slow');
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
