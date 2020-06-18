
/* 
var slideIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1}
  x[slideIndex-1].style.display = "block";
  setTimeout(carousel, 3000); // Change image every 2 seconds
} */

var eachSlide = 1;
showSlides(eachSlide);

function plusSlides(n) {
  showSlides(eachSlide += n);
}

function currentSlide(n) {
  showSlides(eachSlide = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {eachSlide = 1}
    if (n < 1) {eachSlide = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
  slides[eachSlide-1].style.display = "block";
  dots[eachSlide-1].className += " active";
} 