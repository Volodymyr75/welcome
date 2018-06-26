$(document).ready(function() {


	$(".main-nav__toggle").click(function() {
		$(".main-nav__sandwich").toggleClass("active");
	});

	$(".btn--send, .social__link--mail").on("click", function(event) {
		  event.preventDefault();
		  $(".modal-mail").addClass("modal-mail--show");
		  $(".modal-overlay").addClass("modal-overlay--show");
	});
	
	$(".btn--call, .social__link--phone").on("click", function(event) {
		  event.preventDefault();
		  $(".modal-call").addClass("modal-call--show");
		  $(".modal-overlay").addClass("modal-overlay--show");
	});

	$(".modal-mail__close, .modal-overlay").on("click", function(event) {
		  event.preventDefault();
		  $(".modal-mail--show").removeClass("modal-mail--show");
		  $(".modal-overlay--show").removeClass("modal-overlay--show");
	});

	$(".modal-call__close, .modal-overlay").on("click", function(event) {
		  event.preventDefault();
		  $(".modal-call--show").removeClass("modal-call--show");
		  $(".modal-overlay--show").removeClass("modal-overlay--show");
	});


    $(".s-order__up").bind('click', function(e){
        e.preventDefault();
        $('body,html').animate({scrollTop: 0}, 800);    
    });

});

// $(window).load(function() {

// 	$(".loader_inner").fadeOut();
// 	$(".loader").delay(400).fadeOut("slow");

// 	$(".page-header__logo").animated("fadeInDown", "fadeOutUp");
// 	$(".page-header__tagline").animated("fadeInUp", "fadeOutDown");

// });