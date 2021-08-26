$(function() {
  console.log('Hello Bootstrap5');
});

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  768: {
      slidesPerView: 3,
  }
});