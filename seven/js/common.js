$(document).ready(function() {

	var $navMain = $(".main-nav");
	$navMain.removeClass("main-nav--nojs");

	  var $hamburger = $(".hamburger");
		  $hamburger.on("click", function(e) {
		  $(this).toggleClass("is-active");
    // Do something else, like open/close menu
    	$navMain.toggleClass("main-nav--closed main-nav--opened");

  });
});
// $(window).load(function() {

// 	$(".loader_inner").fadeOut();
// 	$(".loader").delay(400).fadeOut("slow");

// 	$(".page-header__logo").animated("fadeInDown", "fadeOutUp");
// 	$(".page-header__tagline").animated("fadeInUp", "fadeOutDown");

// });