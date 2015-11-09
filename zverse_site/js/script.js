/* js file */

(function( window, undefined ){


	//This makes the available buttons change fill --
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


	$( function(){

		var projectbuttons = $( ".project_buttons a" );
		var projectselect      = $( ".projectselect" );
		var pages          = $( ".page" );
		
		projectbuttons.on( "click", function( e ){

			var atag      = $( this );
			var classname = atag.data( "page" );

			//changes the tab colors from gray to white when clicked
	        projectselect.addClass( "graybackground" );
	        atag.parent().removeClass( "graybackground" );

	        //hide the pages
			pages.hide();
			//show the page related to the button clicked
			$( classname ).show();

			//prevents the page from reloading
	        e.preventDefault();
	    });

	    $( ".current_projects a" ).trigger( "click" );
	} );


	// this is to display or hide details on the projects page

	$(document).ready(function(){
    	
    	$('.additionalinformation').hide();
		
		$("#show").click(function(){
	        $(".additionalinformation").show();
	    });

	    $("#hide").click(function(){
	        $(".additionalinformation").hide();
	    });
    
	});

	$(document).ready(function(){
    	
    	$('.currentinformation').hide();
		
		$("#showcurrent").click(function(){
	        $(".currentinformation").show();
	    });

	    $("#hide_current").click(function(){
	        $(".currentinformation").hide();
	    });
    
	});

	$(document).ready(function(){
    	
		
		$("#declineTwo").click(function(){
	        $("#projectTwo").hide();
	    });

		$("#declineThree").click(function(){
	        $("#projectThree").hide();
	    });
	   
    
	});




	// **********************
	$(document).ready(function(){
    	
		$("#burger").hide();
		$("#logo").click(function(){
	        $("#logo").hide();
	        $("#burger").show();

	    });

    
	});
	
	


})( window, undefined );