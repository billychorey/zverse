/* js file */

(function( window, undefined ){


	//This is for -- page to do --
	$( function(){

		$(".availablebutton").click(function(){
	        $(".onoff").toggleClass("orangefill");
	    });
	} );



	//this is to toggle the billing button page
	$( function(){

		var billingbuttons = $( ".billingbuttons a" );
		var payselect      = $( ".payselect" );
		var pages          = $( ".page" );
		
		billingbuttons.on( "click", function( e ){

			var atag      = $( this );
			var classname = atag.data( "page" );

			//changes the tab colors from gray to white when clicked
	        payselect.addClass( "graybackground" );
	        atag.parent().removeClass( "graybackground" );

	        //hide the pages
			pages.hide();
			//show the page related to the button clicked
			$( classname ).show();

			//prevents the page from reloading
	        e.preventDefault();
	    });

	    $( ".echeckbutton a" ).trigger( "click" );
	} );



	// var detailsButton = $(".moreinfo")

	// var projectInfo = $(".additionalinformation")

	// detailsButton.on("click", function( e ){

	// var className = $( this ).data( "page");

	// projectInfo.hide();
	
	// $( projectInfo ).fadeIn( 200 );

	// $( className ).show();

	// e.preventDefault();
	// });

	// divName.hide();
	


})( window, undefined );