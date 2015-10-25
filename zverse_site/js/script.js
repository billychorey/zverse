/* js file */

(function( window, undefined ){


	$(".availablebutton").click(function(){
        $(".onoff").toggleClass("orangefill");
    });




    var billingbuttons = $(".billingbuttons a")

	var divName = $(".options div")

	billingbuttons.on("click", function( e ){

	var className = $( this ).data( "page");

	divName.hide();
	$( className ).fadeIn( 200 );

	$( className ).show();

	e.preventDefault();
	});

	divName.hide();



	var detailsButton = $(".moreinfo a")

	var projectInfo = $(".projectsadditionalinformation div")

	detailsButton.on("click", function( e ){

	var className = $( this ).data( "page");

	projectInfo.hide();
	$( className ).fadeIn( 1000 );

	$( className ).show();

	e.preventDefault();
	});

	divName.hide();
	


})( window, undefined );