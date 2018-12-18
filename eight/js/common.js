$(document).ready(function() {

	$(".main-nav__submenu").before("<span class='menu-span'></span>");

	var $hamburger = $(".hamburger");
			  $hamburger.on("click", function(e) {
			  $(this).toggleClass("is-active");
			  $(".page-header").toggleClass("active");
			  $(".page-header__group-menu").toggleClass("active");
			  // $(".page-header__second-menu").toggleClass("active");
			  // $(".main-nav").toggleClass("active");
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






$("#popup-call, #popup-call-up, #popup-call-down").on("click", function(event) {
		  event.preventDefault();
		  $('#overlay').addClass('open');
		  $('#overlay-content1').addClass('open');
	});

$("#popup-send, #popup-send-up, #popup-send-down").on("click", function(event) {
		  event.preventDefault();
		  $('#overlay').addClass('open');
		  $('#overlay-content2').addClass('open');
	});



$("#popup-ex").on("click", function(event) {
		  event.preventDefault();
		  $('#overlay').addClass('open');
		  $('#overlay-content3').addClass('open');
	});
$("#popup-cl").on("click", function(event) {
		  event.preventDefault();
		  $('#overlay').addClass('open');
		  $('#overlay-content4').addClass('open');
	});
$("#popup-buy").on("click", function(event) {
		  event.preventDefault();
		  $('#overlay').addClass('open');
		  $('#overlay-content5').addClass('open');
	});

$('#overlay-background,#overlay-close-call, #overlay-close-mail, #overlay-close-ex, #overlay-close-cl, #overlay-close-buy').click(function() {
      $('#overlay').removeClass('open');
      $('#overlay-content1').removeClass('open');
      $('#overlay-content2').removeClass('open');
      $('#overlay-content3').removeClass('open');
      $('#overlay-content4').removeClass('open');
      $('#overlay-content5').removeClass('open');
    });


	var $calculateHeight;

  $calculateHeight = function() {
    var $content, contentHeight, finalHeight, windowHeight;
    $content = $('#overlay-content1');
    contentHeight = parseInt($content.height());
    windowHeight = $(window).height();
    finalHeight = windowHeight > contentHeight ? windowHeight : contentHeight;
    return finalHeight;
  };



function heightDetect() {
		$("#overlay-background").height($calculateHeight);
	};
	heightDetect();
	$(window).resize(function() {
		heightDetect();
	});


});

// $(window).load(function() {

// 	$(".loader_inner").fadeOut();
// 	$(".loader").delay(400).fadeOut("slow");

// 	$(".page-header__logo").animated("fadeInDown", "fadeOutUp");
// 	$(".page-header__tagline").animated("fadeInUp", "fadeOutDown");

// });