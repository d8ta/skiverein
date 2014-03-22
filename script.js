$(document).ready(function() {
<<<<<<< HEAD
=======

  // pinguin
  $("#teaser").click(function() {
    $('html, body').animate({
      scrollTop : $("#aktuelles").offset().top
    }, 1000);
  });

>>>>>>> mmtproject
	// scrolling from to the intro location
	$("#first, #firstScrolle").click(function() {
		$('html, body').animate({
			scrollTop : $("#aktuelles").offset().top
<<<<<<< HEAD
		}, 2000);
=======
		}, 1000);
>>>>>>> mmtproject
	});

	$("#second, #secondScrolle").click(function() {
		$('html, body').animate({
			scrollTop : $("#intro").offset().top
<<<<<<< HEAD
		}, 2000);
=======
		}, 1000);
>>>>>>> mmtproject
	});

	$("#third, #thirdScrolle").click(function() {
		$('html, body').animate({
			scrollTop : $("#alpin").offset().top
<<<<<<< HEAD
		}, 2000);
=======
		}, 1000);
>>>>>>> mmtproject
	});

	$("#forth, #forthScrolle").click(function() {
		$('html, body').animate({
			scrollTop : $("#board").offset().top
<<<<<<< HEAD
		}, 2000);
=======
		}, 1000);
>>>>>>> mmtproject
 	});

	$("#fifth, #fifthScrolle").click(function() {
		$('html, body').animate({
			scrollTop : $("#termin").offset().top
<<<<<<< HEAD
		}, 2000);
=======
		}, 1000);
>>>>>>> mmtproject
	});

	$("#sixth, #sixthScrolle").click(function() {
    	$('html, body').animate({
        	scrollTop: $("#foerderverein").offset().top
<<<<<<< HEAD
    	}, 2000);
=======
    	}, 1000);
>>>>>>> mmtproject
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

<<<<<<< HEAD
     var par = $('p');
      $("#g1").hide();
      $("#g2").hide();
=======
      var par = $('g');
      $("#g1").hide();
>>>>>>> mmtproject

      $('#g').click(function(e) {
      $("#g1").slideToggle('slow');
          e.preventDefault();
<<<<<<< HEAD
                $("#g2").slideToggle('slow');
          e.preventDefault();
      });

=======
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


>>>>>>> mmtproject
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
<<<<<<< HEAD
});
=======

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
>>>>>>> mmtproject
