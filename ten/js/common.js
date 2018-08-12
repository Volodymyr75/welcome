$(document).ready(function() {

	// var $navMain = $(".main-nav");
	// $navMain.removeClass("main-nav--nojs");

	//   var $hamburger = $(".hamburger");
	// 	  $hamburger.on("click", function(e) {
	// 	  $(this).toggleClass("is-active");
 //    // Do something else, like open/close menu
 //    	$navMain.toggleClass("main-nav--closed main-nav--opened");

 //  });


	$(".main-nav__toggle").click(function() {
		$(".main-nav__sandwich").toggleClass("active");
		$(".main-nav__items").toggleClass("main-nav__items--no");
	});

	$(".btn--get").on("click", function(event) {
		  event.preventDefault();
		  $(".modal-wrapper-mail").addClass("modal-wrapper-mail--show");
		  $(".modal-overlay").addClass("modal-overlay--show");
	});
	
	$(".btn--form-order, .btn--ask").on("click", function(event) {
		  event.preventDefault();
		  $(".modal-wrapper-call").addClass("modal-wrapper-call--show");
		  $(".modal-overlay").addClass("modal-overlay--show");
	});

	$(".modal-mail__close, .modal-overlay").on("click", function(event) {
		  event.preventDefault();
		  $(".modal-wrapper-mail--show").removeClass("modal-wrapper-mail--show");
		  $(".modal-overlay--show").removeClass("modal-overlay--show");
	});

	$(".modal-call__close, .modal-overlay").on("click", function(event) {
		  event.preventDefault();
		  $(".modal-wrapper-call--show").removeClass("modal-wrapper-call--show");
		  $(".modal-overlay--show").removeClass("modal-overlay--show");
	});



	


    $(".s-contacts__up").bind('click', function(e){
        e.preventDefault();
        $('body,html').animate({scrollTop: 0}, 800);    
    });

    $(".social__link--phone, .social__link--mail, .page-header__item").bind('click', function(e){
        e.preventDefault();
        $('html, body').animate({
	        scrollTop: $("#contacts").offset().top
	    }, 800);  
    });

});


// $(window).load(function() {

// 	$(".loader_inner").fadeOut();
// 	$(".loader").delay(400).fadeOut("slow");

// 	$(".page-header__logo").animated("fadeInDown", "fadeOutUp");
// 	$(".page-header__tagline").animated("fadeInUp", "fadeOutDown");

// });