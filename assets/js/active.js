(function() {
    "use strict";

    jQuery(document).ready(function($) {

        /*Popover*/
        $('[data-toggle="popover"]').popover({
            html: true,
            trigger: 'focus',
            //trigger :'manual',
            content: function() {
                var content = $(this).attr("data-popover-content");
                return $(content).children(".popover-body").html();
            }
        });

        $('[data-toggle="tooltip"]').tooltip();

        //For mobile menu
        $("#navigation").clone().prependTo($(".nav-mobile"));        
        $( "#navigation2" ).clone().prependTo( $( ".mobile-nav2" ) ); 
        $('.mobile-nav2-icon').on('click', function () {
                $('.mobile-nav2').toggleClass('active');
        });

        //Banner
        $(".banner-img-slider").slick({
            slidesToShow: 1,
            arrows: true,
            dots: false,
            autoplay: true,
            infinite: true,
            prevArrow: "<button type='button' class='slick-prev'><i class='fas fa-chevron-left'></i></button>",
            nextArrow: "<button type='button' class='slick-next'><i class='fas fa-chevron-right'></i></button>",
            mouseDrag: false,
            //touchMove: false,
            animateOut: 'slide',
            adaptiveHeight: true,
            responsive: [{
                breakpoint: 480,
                settings: {
                    autoplay: false
                }
            }],

        }); //Review
        
        //Banner
        $(".learn-about-slider1").slick({
            slidesToShow: 1,
            arrows: true,
            dots: false,
            autoplay: false,
            infinite: true,
            mouseDrag: false,
            //touchMove: false,
            animateOut: 'slide',
            adaptiveHeight: true,

        }); //Review
        
        //Banner
        $(".learn-about-slider2").slick({
            slidesToShow: 1,
            arrows: true,
            dots: false,
            autoplay: false,
            infinite: true,
            mouseDrag: false,
            //touchMove: false,
            animateOut: 'slide',
            adaptiveHeight: true,

        }); //Review
        
        //Banner
        $(".learn-about-slider3").slick({
            slidesToShow: 1,
            arrows: true,
            dots: false,
            autoplay: false,
            infinite: true,
            mouseDrag: false,
            //touchMove: false,
            animateOut: 'slide',
            adaptiveHeight: true,

        }); //Review
        
        
         //Review
        $(".md-sec-items").slick({
            slidesToShow: 3,
            arrows: true,
            dots: false,
            autoplay: true,
            infinite: true,
            prevArrow: "<button type='button' class='slick-prev'><i class='fas fa-chevron-left'></i></button>",
            nextArrow: "<button type='button' class='slick-next'><i class='fas fa-chevron-right'></i></button>",
            mouseDrag: false,
            //touchMove: false,
            animateOut: 'slide',
            adaptiveHeight: true,
            responsive: [{
                breakpoint: 767,
                settings: {
                    autoplay: false,
                    slidesToShow: 2,
                }},
                {
                breakpoint: 480,
                settings: {
                    autoplay: false,
                    slidesToShow: 1,
                }
            }],

        }); //Review
        

		//WOW animation
		new WOW().init();
		
		$('.in-porta-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		fade: true,
		adaptiveHeight: true,
		infinite: true,
		useTransform: true,
		cssEase: 'cubic-bezier(0.77, 0, 0.18, 1)',
		prevArrow: $('.profile-prev'),
		nextArrow: $('.profile-next')
	 });
	 
	 $('.in-porta-slider').on('afterChange', function(event, slick, currentSlide) {
		$(".in-porta-text h3").addClass("animated fadeInLeft");
		$(".in-porta-text p").addClass("animated fadeInRight");
	  });   
	
	  $('.in-porta-slider').on('beforeChange', function(event, slick, currentSlide) {
		$(".in-porta-text h3").removeClass("animated fadeInLeft");
		$(".in-porta-text p").removeClass("animated fadeInRight");
	  });
	
	 $('.slider-nav')
		.on('init', function(event, slick) {
			$('.slider-nav .slick-slide.slick-current').addClass('in-porta-active');
		})
		.slick({
			slidesToShow: 4,
			slidesToScroll: 4,
			dots: false,
			focusOnSelect: false,
			infinite: false,
			prevArrow: "<button type='button' class='slick-prev'><i class='fa fa-angle-left'></i></button>",
			nextArrow: "<button type='button' class='slick-next'><i class='fa fa-angle-right'></i></button>",
			responsive: [{
				breakpoint: 1024,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 4,
				}
			}, {
				breakpoint: 767,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 4,
				}
			}, {
				breakpoint: 420,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 4,
			}
			}]
		});
	
	 $('.in-porta-slider').on('afterChange', function(event, slick, currentSlide) {
		$('.slider-nav').slick('slickGoTo', currentSlide);
		var currrentNavSlideElem = '.slider-nav .slick-slide[data-slick-index="' + currentSlide + '"]';
		$('.slider-nav .slick-slide.in-porta-active').removeClass('in-porta-active');
		$(currrentNavSlideElem).addClass('in-porta-active');
	 });
	
	 $('.slider-nav').on('click', '.slick-slide', function(event) {
		event.preventDefault();
		var goToSingleSlide = $(this).data('slick-index');
	
		$('.in-porta-slider').slick('slickGoTo', goToSingleSlide);
	 });
		
        
        
		//WOW animation
		new WOW().init();
		
		$('.building-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		fade: true,
		adaptiveHeight: true,
		infinite: true,
		useTransform: true,
		cssEase: 'cubic-bezier(0.77, 0, 0.18, 1)',
	 });
	 
	 $('.building-slider').on('afterChange', function(event, slick, currentSlide) {
		$(".building-text p").addClass("animated fadeInRight");
	  });   
	
	  $('.building-slider').on('beforeChange', function(event, slick, currentSlide) {
		$(".building-text p").removeClass("animated fadeInRight");
	  });
	
	 $('.building-slider-nav')
		.on('init', function(event, slick) {
			$('.building-slider-nav .slick-slide.slick-current').addClass('building-active');
		})
		.slick({
			slidesToShow: 3,
			slidesToScroll: 3,
			dots: false,
			focusOnSelect: false,
			infinite: false,
			prevArrow: "<button type='button' class='slick-prev'><i class='fa fa-angle-left'></i></button>",
			nextArrow: "<button type='button' class='slick-next'><i class='fa fa-angle-right'></i></button>",
			responsive: [{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
				}
			}, {
				breakpoint: 767,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
				}
			}, {
				breakpoint: 420,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
			}
			}]
		});
	
	 $('.building-slider').on('afterChange', function(event, slick, currentSlide) {
		$('.building-slider-nav').slick('slickGoTo', currentSlide);
		var currrentNavSlideElem = '.building-slider-nav .slick-slide[data-slick-index="' + currentSlide + '"]';
		$('.building-slider-nav .slick-slide.building-active').removeClass('building-active');
		$(currrentNavSlideElem).addClass('building-active');
	 });
	
	 $('.building-slider-nav').on('click', '.slick-slide', function(event) {
		event.preventDefault();
		var goToSingleSlide = $(this).data('slick-index');
	
		$('.building-slider').slick('slickGoTo', goToSingleSlide);
	 });
		
        
        
        
        //AOS animation
        AOS.init({
            offset: 200,
            duration: 600,
            easing: 'ease-in-sine',
            delay: 100,
            once: true
        });


        $(".scrollup").on("click", function() {
            $("body,html").stop(false, false).animate({
                scrollTop: 0
            }, 800);
            return false;
        });

        $(window).on('scroll', function() {
            if ($(this).scrollTop() > 0) {
                $('header.for-sticky').addClass("sticky");
            } else {
                $('header.for-sticky').removeClass("sticky");
            }

            if ($(this).scrollTop() > 200) {
                $('.scrollup').fadeIn();
            } else {
                $('.scrollup').fadeOut();
            }

        });


        $(window).on('scroll', function() {

            if ($(this).scrollTop() > 400 && ($(window).width() < 581)) {
                $('.start-mobile-btn').fadeIn();
            } else {
                $('.start-mobile-btn').fadeOut();
            }
        });  

    });

}(jQuery));