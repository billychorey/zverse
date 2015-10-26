/* js file */

(function( window, undefined ){


	$(".availablebutton").click(function(){
        $(".onoff").toggleClass("orangefill");
    });



	$(".billingbuttons").click(function(){
        $(".payselect").toggleClass("graybackground");
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



	var detailsButton = $(".moreinfo")

	var projectInfo = $(".additionalinformation")

	detailsButton.on("click", function( e ){

	var className = $( this ).data( "page");

	projectInfo.hide();
	
	$( projectInfo ).fadeIn( 200 );

	$( className ).show();

	e.preventDefault();
	});

	divName.hide();
	


})( window, undefined );