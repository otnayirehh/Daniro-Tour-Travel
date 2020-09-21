// aos
  AOS.init({
    duration: 1000,
    once: true
  });

(function($) {

	'use strict';

  $('.site-menu-toggle').click(function(){
    var $this = $(this);
    if ( $('body').hasClass('menu-open') ) {
      $this.removeClass('open');
      $('.js-site-navbar').fadeOut(400);
      $('body').removeClass('menu-open');
    } else {
      $this.addClass('open');
      $('.js-site-navbar').fadeIn(400);
      $('body').addClass('menu-open');
    }
  });

//   navigate
    $(".animsition-link-contact").click(function() {
        var $this = $('.site-menu-toggle');
        if ( $('body').hasClass('menu-open') ) {
            $this.removeClass('open');
            $('.js-site-navbar').fadeOut(400);
            $('body').removeClass('menu-open');
        } else {
            $this.addClass('open');
            $('.js-site-navbar').fadeIn(400);
            $('body').addClass('menu-open');
        }
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#contact-page").offset().top
        }, 2000);
    });

    $(".animsition-link-gallery").click(function() {
        var $this = $('.site-menu-toggle');
        if ( $('body').hasClass('menu-open') ) {
            $this.removeClass('open');
            $('.js-site-navbar').fadeOut(400);
            $('body').removeClass('menu-open');
        } else {
            $this.addClass('open');
            $('.js-site-navbar').fadeIn(400);
            $('body').addClass('menu-open');
        }
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#gallery-page").offset().top
        }, 2000);
    });

    $(".animsition-link-recent-article").click(function() {
        var $this = $('.site-menu-toggle');
        if ( $('body').hasClass('menu-open') ) {
            $this.removeClass('open');
            $('.js-site-navbar').fadeOut(400);
            $('body').removeClass('menu-open');
        } else {
            $this.addClass('open');
            $('.js-site-navbar').fadeIn(400);
            $('body').addClass('menu-open');
        }
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#recent-article-page").offset().top
        }, 2000);
    });

    /*Scroll to top when arrow up clicked BEGIN*/
    $(window).scroll(function() {
        var height = $(window).scrollTop();
        if (height > 100) {
            $('#back2Top').fadeIn();
        } else {
            $('#back2Top').fadeOut();
        }
    });
    $(document).ready(function() {
        $("#back2Top").click(function(event) {
            event.preventDefault();
            $("html, body").animate({ scrollTop: 0 }, "slow");
            return false;
        });

    });
    /*Scroll to top when arrow up clicked END*/



  var $root = $('html, body');

  $('a.smoothscroll[href^="#"]').click(function () {
      $root.animate({
          scrollTop: $( $.attr(this, 'href') ).offset().top
      }, 500);

      return false;
  });



	$('nav .dropdown').hover(function(){
		var $this = $(this);
		$this.addClass('show');
		$this.find('> a').attr('aria-expanded', true);
		$this.find('.dropdown-menu').addClass('show');
	}, function(){
		var $this = $(this);
			$this.removeClass('show');
			$this.find('> a').attr('aria-expanded', false);
			$this.find('.dropdown-menu').removeClass('show');
	});



	$('#dropdown04').on('show.bs.dropdown', function () {
	  console.log('show');
	});



	// home slider
	$('.home-slider').owlCarousel({
    loop:true,
    autoplay: true,
    margin:10,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    nav:true,
    autoplayHoverPause: true,
    items: 1,
    autoheight: true,
    navText : ["<span class='ion-chevron-left'></span>","<span class='ion-chevron-right'></span>"],
    responsive:{
      0:{
        items:1,
        nav:false
      },
      600:{
        items:1,
        nav:false
      },
      1000:{
        items:1,
        nav:true
      }
    }
	});

	// owl carousel
	var majorCarousel = $('.js-carousel-1');
	majorCarousel.owlCarousel({
    loop:true,
    autoplay: true,
    stagePadding: 7,
    margin: 20,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    nav: true,
    autoplayHoverPause: true,
    items: 3,
    navText : ["<span class='ion-chevron-left'></span>","<span class='ion-chevron-right'></span>"],
    responsive:{
      0:{
        items:1,
        nav:false
      },
      600:{
        items:2,
        nav:false
      },
      1000:{
        items:3,
        nav:true,
        loop:false
      }
  	}
	});

	// owl carousel
	var major2Carousel = $('.js-carousel-2');
	major2Carousel.owlCarousel({
    loop:true,
    autoplay: true,
    stagePadding: 7,
    margin: 20,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    nav: true,
    autoplayHoverPause: true,
    items: 4,
    navText : ["<span class='ion-chevron-left'></span>","<span class='ion-chevron-right'></span>"],
    responsive:{
      0:{
        items:1,
        nav:false
      },
      600:{
        items:3,
        nav:false
      },
      1000:{
        items:4,
        nav:true,
        loop:false
      }
  	}
	});



  $(".animsition").animsition();

})(jQuery);
