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
var slides = document.querySelectorAll('.s-reviews__toggle');
var tableToggle = document.querySelectorAll('.s-tarrifs__toggle');

var currentSlide = 0;
function left() {
  slides[currentSlide].removeAttribute('checked'); 
  currentSlide = (currentSlide+1)%slides.length;
  slides[currentSlide].setAttribute('checked', 'checked');
}
navNext.addEventListener("click", left);

function right() {
  if(currentSlide == 0) {
    slides[currentSlide].removeAttribute('checked');
    currentSlide = slides.length - 1;
    slides[currentSlide].setAttribute('checked', 'checked');
  }else {
    slides[currentSlide].removeAttribute('checked');
    currentSlide = currentSlide - 1;
    slides[currentSlide].setAttribute('checked', 'checked');
  }
}
navPrev.addEventListener("click", right);

var currentToggle = 1;
function leftTable() {
  tableToggle[currentToggle].removeAttribute('checked'); 
  currentToggle = (currentToggle+1)%tableToggle.length;
  tableToggle[currentToggle].setAttribute('checked', 'checked');
}
function rightTable() {
  if(currentToggle == 0) {
    tableToggle[currentToggle].removeAttribute('checked');
    currentToggle = tableToggle.length - 1;
    tableToggle[currentToggle].setAttribute('checked', 'checked');
  }else {
    tableToggle[currentToggle].removeAttribute('checked');
    currentToggle = currentToggle - 1;
    tableToggle[currentToggle].setAttribute('checked', 'checked');
  }
}
  var devBr = {};


        devBr.prepareForTouches = function () {

           
            function initTouchListeners (touchableElement) {
                var touchControl = new Hammer(touchableElement);
                touchControl.on('swipeleft', left);
                touchControl.on('swiperight', right);
            };
             function initTouchListenersTable (touchableElement) {
                var touchControl1 = new Hammer(touchableElement);
                touchControl1.on('swipeleft', leftTable);
                touchControl1.on('swiperight', rightTable);
            };

            var listItems = document.querySelectorAll('.s-reviews__slide');
                for (var i = 0; i < listItems.length; i += 1) {
                    initTouchListeners(listItems[i]);
                }
            var table = document.querySelector('.s-tarrifs__table');
            initTouchListenersTable(table);
        }

        devBr.prepareForTouchesWhenReady = function () {
          document.addEventListener('DOMContentLoaded', devBr.prepareForTouches);
        }
        devBr.prepareForTouchesWhenReady();
 // var devBr = {};

// var hammer = new Hammer(document.querySelector('.s-reviews__item'));


// hammer.get("swipe");
// hammer.on("swipeleft", function(){
//     hammer.element.classList.remove('s-reviews__item--active');
//     hammer.element.nextElementSibling.classList.add('s-reviews__item--active')
// });
// hammer.on("swiperight", function(){
//     alert('swipe right');
// });

// function swipeElement (event) {
//   var elementToSwip = event.target;
//   elementToSwip.parentNode.classList.remove('s-reviews__item--active');
//   elementToSwip.parentNode.nextElementSibling.classList.add('s-reviews__item--active');
// }

// devBr.prepareForTouches = function () {
//   function initTouchListeners (touchableElement) {
//     var touchControl = new Hammer(touchableElement);
//     touchControl.on('swipeleft', function () {
//       console.log(touchControl.element.nextElementSibling);
//       if(touchControl.element.nextElementSibling.className == 's-reviews__item') {
//         touchControl.element.classList.remove('s-reviews__item--active');
//         touchControl.element.nextElementSibling.classList.add('s-reviews__item--active');
//       }
      
//     });
//   };

//   var listItems = document.querySelectorAll('.s-reviews__item');
//   for (var i = 0; i < listItems.length; i += 1) {
//     initTouchListeners(listItems[i]);
//   }
// }

// devBr.prepareForTouchesWhenReady = function () {
//   document.addEventListener('DOMContentLoaded', devBr.prepareForTouches);
// }
// devBr.prepareForTouchesWhenReady();


function initMap() {
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
    // google.maps.event.addDomListener(window, 'load', initMap);
