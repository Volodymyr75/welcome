$(document).ready(function() {


	var $hamburger = $(".hamburger");
			  $hamburger.on("click", function(e) {
			  $(this).toggleClass("is-active");
			  $(".page-header").toggleClass("active");
	    // Do something else, like open/close menu
	  });
	// $(".main-nav__toggle").click(function() {
	// 	$(".main-nav__sandwich").toggleClass("active");
	// 	$(".page-header").toggleClass("active");
	// });

	$(".btn--send, .social__link--mail").on("click", function(event) {
		  event.preventDefault();
		  $(".modal-wrapper-mail").addClass("modal-wrapper-mail--show");
		  $(".modal-overlay").addClass("modal-overlay--show");
	});
	
	$(".btn--call, .social__link--phone").on("click", function(event) {
		  event.preventDefault();
		  $(".modal-wrapper-call").addClass("modal-wrapper-call--show");
		  $(".modal-overlay").addClass("modal-overlay--show");
	});

	$(".btn--ask").on("click", function(event) {
		  event.preventDefault();
		  $(".modal-wrapper-clarify").addClass("modal-wrapper-clarify--show");
		  $(".modal-overlay").addClass("modal-overlay--show");
	});

	$(".btn--excur").on("click", function(event) {
		  event.preventDefault();
		  $(".modal-wrapper-excur").addClass("modal-wrapper-excur--show");
		  $(".modal-overlay").addClass("modal-overlay--show");
	});

	$(".btn--buy").on("click", function(event) {
		  event.preventDefault();
		  $(".modal-wrapper-buy").addClass("modal-wrapper-buy--show");
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

	$(".modal-clarify__close, .modal-overlay").on("click", function(event) {
		  event.preventDefault();
		  $(".modal-wrapper-clarify--show").removeClass("modal-wrapper-clarify--show");
		  $(".modal-overlay--show").removeClass("modal-overlay--show");
	});

	$(".modal-excur__close, .modal-overlay").on("click", function(event) {
		  event.preventDefault();
		  $(".modal-wrapper-excur--show").removeClass("modal-wrapper-excur--show");
		  $(".modal-overlay--show").removeClass("modal-overlay--show");
	});

	$(".modal-buy__close, .modal-overlay").on("click", function(event) {
		  event.preventDefault();
		  $(".modal-wrapper-buy--show").removeClass("modal-wrapper-buy--show");
		  $(".modal-overlay--show").removeClass("modal-overlay--show");
	});



	// 	$(".menu-span").on("click", function(event) {
	// 	  event.preventDefault();
	// 	  $(this).next().toggle();

	// });

	$(".menu-span").on('click', function(e) { 
    e.preventDefault();

    var menu = $(this).next();
    var isClosed = menu.is(':hidden'); // закрыто ли подменю, по которому кликнули 
 
    $('.main-nav__submenu').slideUp(100); // закрываем все подменю
    $(".menu-span").removeClass("active");
 
    // если меню было закрыто, то открываем его 
    if (isClosed) { 
      menu.slideDown(200);
      $(this).addClass("active");
    } 
  }); 


	// $(".page-header__item").bind('click', function(e){
    //     e.preventDefault();
    //     $('html, body').animate({
	//         scrollTop: $("#order").offset().top
	//     }, 800);  
    // });
	


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