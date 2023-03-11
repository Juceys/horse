// SWIPER HORSE
let swiperTest2 = new Swiper("#swiper2", {
  slidesPerView: 1.2,
  centeredSlides: true,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets'
  },
  navigation: {
    nextEl: '.hero__btn-right2',
    prevEl: '.hero__btn-left2'
  },

  breakpoints: {
    480: {
      slidesPerView: 2,
      centeredSlides: false,
      spaceBetween: 30,

    },
    768: { slidesPerView: 3 },
    1100: { slidesPerView: 5 }

  }
});
