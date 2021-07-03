	
	$(document).ready(function() {
		"use strict";
	
	//  HOME CAROUSEL
	$('.home-inner').owlCarousel({
		loop: true,
		margin: -1,
		autoplay: true,
		dots: true,
		autoplayTimeout: 7000,
		smartSpeed: 1200,
		responsive: {
			0: {
				items: 1
			},
			768: {
				items: 1
			},
			1170: {
				items: 1
			}
		}
	});

	//  TESTIMONIALS CAROUSEL HOOK
	$('.inner-testimonial').owlCarousel({
		loop: true,
		center: true,
		margin: 0,
		autoplay: true,
		dots: true,
		autoplayTimeout: 2000,
		smartSpeed: 450,
		responsive: {
			0: {
				items: 1
			},
			768: {
				items: 1
			},
			1170: {
				items: 1
			}
		}
	});


	// gallery 
	jQuery(window).on('load',function() {	
		//Isotope activation js codes
		var $gellary_img = $('.gallery-items').isotope({
		  itemSelector: '.gallery-item',
		  percentPosition: true,
		  transitionDuration: '0.5s',
		  masonry: {
			// use outer width of grid-sizer for columnWidth
			columnWidth: '.gallery-item',
			gutter:0
		  },
		  getSortData: {
			name: '.name',
			symbol: '.symbol',
			number: '.number parseInt',
			category: '[data-category]',
			weight: function( itemElem ) {
			  var weight = $( itemElem ).find('.weight').text();
			  return parseFloat( weight.replace( /[\(\)]/g, '') );
			}
		  }
		});
	

		// filter functions
		var filterFns = {
		  // show if number is greater than 50
		  numberGreaterThan50: function() {
			var number = $(this).find('.number').text();
			return parseInt( number, 10 ) > 50;
		  },
		  // show if name ends with -ium
		  ium: function() {
			var name = $(this).find('.name').text();
			return name.match( /ium$/ );
		  }
		};

		// bind filter button click
		$('.gallery-menu').on( 'click', 'li', function() {
		  var filterValue = $( this ).attr('data-filter');
		  // use filterFn if matches value
		  filterValue = filterFns[ filterValue ] || filterValue;
		  $gellary_img.isotope({ filter: filterValue });
		});


		// change is-checked class on buttons
		$('.gallery-menu').each( function( i, liList ) {
		  var $liList = $( liList );
		  $liList.on( 'click', 'li ', function() {
			$liList.find('.active').removeClass('active');
			$( this ).addClass('active');
		  });
		});	
	});


// Video - popup - js

	$(function() {
		$('.video-popup').magnificPopup({
			disableOn: 700,
			type: 'iframe',
			mainClass: 'mfp-fade',
			removalDelay: 160,
			preloader: false,
			fixedContentPos: false
		});
	});
		
		
		
});
// END JQUERY