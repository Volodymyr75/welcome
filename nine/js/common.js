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


});