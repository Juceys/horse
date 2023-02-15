import './_vendor';
import vars from './_vars';
import './_functions';
import './_components';



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
      slidesPerView:  1.7
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


//scroll animation

// ждём когда всё загрузиться
// document.addEventListener('DOMContentLoaded', () => {
// });

// Intersection Observer API

var options = {
  root: null,
  rootMargin: '5px',
  threshold: 0.8
}

let callback = function (entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // console.log('find', entry);
      entry.target.classList.add('active');
      observer.unobserve(entry.target);
    }
  })
};
let observer = new IntersectionObserver(callback, options);

let targets = document.querySelectorAll('.anim')
targets.forEach(target => {
  observer.observe(target);
})

