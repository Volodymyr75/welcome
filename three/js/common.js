var navMain = document.querySelector(".main-nav");
var navToggle = document.querySelector(".main-nav__toggle");
var pageHeader = document.querySelector(".page-header");
var pagePromo = document.querySelector(".promo");

navMain.classList.remove("main-nav--nojs");
pageHeader.classList.remove("page-header--opened");
pagePromo.classList.remove("promo--short");

navToggle.addEventListener("click", function() {
  if (navMain.classList.contains("main-nav--closed")) {
    navMain.classList.remove("main-nav--closed");
    navMain.classList.add("main-nav--opened");
    if (pageHeader.classList.contains("page-header--opened")) {
      pageHeader.classList.remove("page-header--opened");
    } else {
      pageHeader.classList.add("page-header--opened");
    };
    if (pagePromo.classList.contains("promo--short")) {
      pagePromo.classList.remove("promo--short");
    } else {
      pagePromo.classList.add("promo--short");
    };
  } else {
    navMain.classList.add("main-nav--closed");
    navMain.classList.remove("main-nav--opened");
    pageHeader.classList.remove("page-header--opened");
    pagePromo.classList.remove("promo--short");
  }
});

var navPrev = document.querySelector(".s-reviews__nav--previous");
var navNext = document.querySelector(".s-reviews__nav--next");
var slides = document.querySelectorAll('.s-reviews__item');
var currentSlide = 0;

navNext.addEventListener("click", function() {
  slides[currentSlide].className = 's-reviews__item';
  currentSlide = (currentSlide+1)%slides.length;
  slides[currentSlide].className = 's-reviews__item s-reviews__item--active';


});
navPrev.addEventListener("click", function() {
  if(currentSlide == 0) {
    slides[currentSlide].className = 's-reviews__item';
    currentSlide = slides.length - 1;
    slides[currentSlide].className = 's-reviews__item s-reviews__item--active';
  }else {
    slides[currentSlide].className = 's-reviews__item';
    currentSlide = currentSlide - 1;
    slides[currentSlide].className = 's-reviews__item s-reviews__item--active';
  }
  

});

 




class Swipe {
    constructor(element) {
        this.xDown = null;
        this.yDown = null;
        this.element = typeof(element) === 'string' ? document.querySelector(element) : element;

        this.element.addEventListener('touchstart', function(evt) {
            this.xDown = evt.touches[0].clientX;
            this.yDown = evt.touches[0].clientY;
        }.bind(this), false);

    }

    onLeft(callback) {
        this.onLeft = callback;

        return this;
    }

    onRight(callback) {
        this.onRight = callback;

        return this;
    }

    onUp(callback) {
        this.onUp = callback;

        return this;
    }

    onDown(callback) {
        this.onDown = callback;

        return this;
    }

    handleTouchMove(evt) {
        if ( ! this.xDown || ! this.yDown ) {
            return;
        }

        var xUp = evt.touches[0].clientX;
        var yUp = evt.touches[0].clientY;

        this.xDiff = this.xDown - xUp;
        this.yDiff = this.yDown - yUp;

        if ( Math.abs( this.xDiff ) > Math.abs( this.yDiff ) ) { // Most significant.
            if ( this.xDiff > 0 ) {
                this.onLeft();
            } else {
                this.onRight();
            }
        } else {
            if ( this.yDiff > 0 ) {
                this.onUp();
            } else {
                this.onDown();
            }
        }

        // Reset values.
        this.xDown = null;
        this.yDown = null;
    }

    run() {
        this.element.addEventListener('touchmove', function(evt) {
            this.handleTouchMove(evt).bind(this);
        }.bind(this), false);
    }
}

// Use class to get element by string.
var swiper = new Swipe('.s-reviews__item');



swiper.onLeft(function() { slides[currentSlide].className = 's-reviews__item';
  currentSlide = (currentSlide+1)%slides.length;
  slides[currentSlide].className = 's-reviews__item s-reviews__item--active'; });
swiper.run();


function initialize() {
      var mapCanvas = document.getElementById('map');   
      var myLatLng = new google.maps.LatLng(48.4635524, 35.0232428);
      var mapOptions = {
        center: myLatLng,
        zoom: 16,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
    // disableDefaultUI: true
      }
      var map = new google.maps.Map(mapCanvas, mapOptions); 
    
    var image = 'img/icon-map-marker.svg';
      var beachMarker = new google.maps.Marker({
      position: myLatLng,
      map: map,
      icon: image
  });
    }
    google.maps.event.addDomListener(window, 'load', initialize);
