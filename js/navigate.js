	if (Modernizr.touch) {   
	    //no sticky	
   		jQuery('#seadragonWT').hide(); // hide interactive
		jQuery('#flickrWT').hide();

	} else {   
		jQuery(document).ready(function(){
			var headerPosition = jQuery('.menu').offset().top;

			var stickyNav = function(){
			var scrollPosition = jQuery(window).scrollTop();
			if (scrollPosition > headerPosition) {
			jQuery('.menu').addClass('stick');
			} else {
			jQuery('.menu').removeClass('stick');
				}
			};

		jQuery(window).scroll(function(){
			stickyNav();
			});
		});
	}

	if(jQuery(window).width()<401) {
		jQuery('#fbWT').hide();
		jQuery('#flickrWT').hide();
		jQuery('#seadragonWT').hide();
	}
	// sliders
	
	
	
	var next = function(){
		var id = document.body.getElementsByClassName('carousel-wrapper')[0].childNodes[1].id;
		switch(id) {
			case "main-image":
			document.body.getElementsByClassName('carousel-wrapper')[0].childNodes[1].id = 'main-image2'
			break;
			case "main-image2":
			document.body.getElementsByClassName('carousel-wrapper')[0].childNodes[1].id = 'main-image3'
			break;
			case "main-image3":
			document.body.getElementsByClassName('carousel-wrapper')[0].childNodes[1].id = 'main-image4'
			break;
			case "main-image4":
			document.body.getElementsByClassName('carousel-wrapper')[0].childNodes[1].id = 'main-image'
			break;
		}
	}
	
	var prev = function(){
		var id = document.body.getElementsByClassName('carousel-wrapper')[0].childNodes[1].id;
		switch(id) {
			case "main-image":
			document.body.getElementsByClassName('carousel-wrapper')[0].childNodes[1].id = 'main-image4'
			break;
			case "main-image2":
			document.body.getElementsByClassName('carousel-wrapper')[0].childNodes[1].id = 'main-image'
			break;
			case "main-image3":
			document.body.getElementsByClassName('carousel-wrapper')[0].childNodes[1].id = 'main-image2'
			break;
			case "main-image4":
			document.body.getElementsByClassName('carousel-wrapper')[0].childNodes[1].id = 'main-image3'
			break;
		}
	}
	


// add event listener to prev and next
	window.onload = function(){
		document.getElementById("prev").onclick = prev;
		document.getElementById("next").onclick = next;
		document.getElementById("main-image2").onclick = next;

	};
