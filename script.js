$(document).ready(function() {

  // pinguin
  $("#teaser").click(function() {
    $('html, body').animate({
      scrollTop : $("#aktuelles").offset().top
    }, 1000);
  });

	// scrolling from to the intro location
	$("#first, #firstScrolle").click(function() {
		$('html, body').animate({
			scrollTop : $("#aktuelles").offset().top
		}, 1000);
	});

	$("#second, #secondScrolle").click(function() {
		$('html, body').animate({
			scrollTop : $("#intro").offset().top
		}, 1000);
	});

	$("#third, #thirdScrolle").click(function() {
		$('html, body').animate({
			scrollTop : $("#alpin").offset().top
		}, 1000);
	});

	$("#forth, #forthScrolle").click(function() {
		$('html, body').animate({
			scrollTop : $("#board").offset().top
		}, 1000);
 	});

	$("#fifth, #fifthScrolle").click(function() {
		$('html, body').animate({
			scrollTop : $("#termin").offset().top
		}, 1000);
	});

	$("#sixth, #sixthScrolle").click(function() {
    	$('html, body').animate({
        	scrollTop: $("#foerderverein").offset().top
    	}, 1000);
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

      var par = $('g');
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

      // Navigatonsslider für Mobilansicht
      var par = $('#hide');
      $("nav").hide();

        $("#hide").click(function(){
          $("nav").slideToggle('slow');
        });
        $("#show").click(function(){
          $("nav").slideToggle('slow');
        });


      // Slideshow für Bilder in Ski und Snowboard
      $("#skishow1 > div:gt(0)").hide();
        setInterval(function() {
          $('#skishow1 > div:first')
            .fadeOut(2000)
            .next()
            .fadeIn(2000)
            .end()
            .appendTo('#skishow1');
        },  3000);

      $("#skishow2 > div:gt(0)").hide();
        setInterval(function() {
          $('#skishow2 > div:first')
            .fadeOut(2000)
            .next()
            .fadeIn(2000)
            .end()
            .appendTo('#skishow2');
        },  3000);

      $("#skishow3 > div:gt(0)").hide();
        setInterval(function() {
          $('#skishow3 > div:first')
            .fadeOut(2000)
            .next()
            .fadeIn(2000)
            .end()
            .appendTo('#skishow3');
        },  3000);
});