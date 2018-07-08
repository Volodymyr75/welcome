$(document).ready(function() {


	$(".main-nav__toggle").click(function() {
		$(".main-nav__sandwich").toggleClass("active");
	});

	

    $(".btn--all").bind('click', function(e){
        e.preventDefault();
        $('body,html').animate({
        	scrollTop: $(".s-main__wrapper").offset().top}, 800);    
    });

 
	
	$(".btn--order").on("click", function(event) {
		  event.preventDefault();
		  $(".modal-wrapper").addClass("modal-wrapper--show");
		  $(".modal-overlay").addClass("modal-overlay--show");
	});

	

	$(".modal-call__close, .modal-overlay").on("click", function(event) {
		  event.preventDefault();
		  $(".modal-wrapper--show").removeClass("modal-wrapper--show");
		  $(".modal-overlay--show").removeClass("modal-overlay--show");
	});

	$(".b-viewbox__item--slider").on("click", function(event) {
		  event.preventDefault();
		  $(".b-viewbox__slider").show();
		  $(".b-viewbox__panoram").hide();
		  $(".b-viewbox__map").hide();

	});

	$(".b-viewbox__item--panoram").on("click", function(event) {
		  event.preventDefault();
		  $(".b-viewbox__slider").hide();
		  $(".b-viewbox__panoram").show();
		  $(".b-viewbox__map").hide();

	});

	$(".b-viewbox__item--map").on("click", function(event) {
		  event.preventDefault();
		  $(".b-viewbox__slider").hide();
		  $(".b-viewbox__panoram").hide();
		  $(".b-viewbox__map").show();

	});



});