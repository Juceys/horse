// SWIPER REVIEWS
let swiperTest3 = new Swiper("#swiper3", {
  slidesPerView: 1,
  centeredSlides: false,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets'
  },
  navigation: {
    nextEl: '.hero__btn-right3',
    prevEl: '.hero__btn-left3'
  },

  breakpoints: {
    480: {
      slidesPerView: 1.7
    },
    768: {
      slidesPerView: 2.3
    },
    1100: {
      slidesPerView: 3.5,
      centeredSlides: false
    }
  }
});
