

$(document).ready(function() {

	  var $hamburger = $(".hamburger");
	  var $menu = $(".main-nav__list");
		  $hamburger.on("click", function(e) {
		  $(this).toggleClass("is-active");
		  $menu.toggleClass("is-active");

  });
});

// $(window).load(function() {

// 	$(".loader_inner").fadeOut();
// 	$(".loader").delay(400).fadeOut("slow");

// 	$(".page-header__logo").animated("fadeInDown", "fadeOutUp");
// 	$(".page-header__tagline").animated("fadeInUp", "fadeOutDown");

// });