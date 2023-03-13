/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/components/burger.js":
/*!*************************************!*\
  !*** ./src/js/components/burger.js ***!
  \*************************************/
/***/ (() => {

// BURGER
document.getElementById("burger").addEventListener('click', () => {
  document.querySelector('.header').classList.toggle('open');
});
document.querySelectorAll('.nav__link').forEach(el => {
  el.addEventListener('click', () => {
    document.querySelector('.header').classList.remove('open');
  });
});

/***/ }),

/***/ "./src/js/components/form.js":
/*!***********************************!*\
  !*** ./src/js/components/form.js ***!
  \***********************************/
/***/ (() => {

//SEND FORM

document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('form');
  form.addEventListener('submit', formSend);
  async function formSend(e) {
    e.preventDefault();
    let error = formValidation(form);
    // if (error !== 0) {
    // alert("обязательное поле")
    // }

    // console.log(error)
  }

  function formValidation(form) {
    let error = 0;
    let formReq = document.querySelectorAll('._req');
    for (let i = 0; i < formReq.length; i++) {
      const input = formReq[i];
      removeError(input);
      if (input.classList.contains('_email')) {
        if (emailTest(input)) {
          addError(input);
          error++;
        }
      } else if (input.getAttribute("type") === "checkbox" && input.checked === false) {
        addError(input);
        error++;
      } else {
        if (input.value === "") {
          addError(input);
          error++;
        }
      }
    }
    console.log(error);
    return error;
  }
  function addError(input) {
    input.parentElement.classList.add('_error');
    input.classList.add('_error');
  }
  function removeError(input) {
    input.parentElement.classList.remove('_error');
    input.classList.remove('_error');
  }
  // проверка email
  function emailTest(input) {
    return !/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu.test(input.value);
  }
});

/***/ }),

/***/ "./src/js/components/interObs.js":
/*!***************************************!*\
  !*** ./src/js/components/interObs.js ***!
  \***************************************/
/***/ (() => {

// Intersection Observer API
var options = {
  root: null,
  rootMargin: '5px',
  threshold: 0.8
};
let callback = function (entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
      observer.unobserve(entry.target);
    }
  });
};
let observer = new IntersectionObserver(callback, options);
let targets = document.querySelectorAll('.anim');
targets.forEach(target => {
  observer.observe(target);
});

/***/ }),

/***/ "./src/js/components/modal.js":
/*!************************************!*\
  !*** ./src/js/components/modal.js ***!
  \************************************/
/***/ (() => {

// MODAL
const buttons = document.querySelectorAll('.btn__singup');
const modalOverlay = document.querySelector('.modal__overlay');
const modal = document.querySelector('.modal');
const body = document.querySelector('.page__body');
const modalExit = document.querySelector('.modal__exit');
buttons.forEach(button => {
  button.addEventListener('click', e => {
    modalOverlay.classList.add('modal__overlay--visible');
    modal.classList.add('modal--visible');
    body.classList.add('scroll--block');
  });
});
modalOverlay.addEventListener('click', e => {
  if (e.target == modalOverlay) {
    modalOverlay.classList.remove('modal__overlay--visible');
    modal.classList.remove('modal--visible');
    body.classList.remove('scroll--block');
  }
});
modalExit.addEventListener('click', () => {
  modalOverlay.classList.remove('modal__overlay--visible');
  modal.classList.remove('modal--visible');
  body.classList.remove('scroll--block');
});

/***/ }),

/***/ "./src/js/components/swiper_horse.js":
/*!*******************************************!*\
  !*** ./src/js/components/swiper_horse.js ***!
  \*******************************************/
/***/ (() => {

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
      spaceBetween: 30
    },
    768: {
      slidesPerView: 3
    },
    1100: {
      slidesPerView: 5
    }
  }
});

/***/ }),

/***/ "./src/js/components/swiper_reviews.js":
/*!*********************************************!*\
  !*** ./src/js/components/swiper_reviews.js ***!
  \*********************************************/
/***/ (() => {

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

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/form */ "./src/js/components/form.js");
/* harmony import */ var _components_form__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_components_form__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_swiper_horse__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/swiper_horse */ "./src/js/components/swiper_horse.js");
/* harmony import */ var _components_swiper_horse__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_components_swiper_horse__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_swiper_reviews__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/swiper_reviews */ "./src/js/components/swiper_reviews.js");
/* harmony import */ var _components_swiper_reviews__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_components_swiper_reviews__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_burger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/burger */ "./src/js/components/burger.js");
/* harmony import */ var _components_burger__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_components_burger__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_interObs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/interObs */ "./src/js/components/interObs.js");
/* harmony import */ var _components_interObs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_components_interObs__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/modal */ "./src/js/components/modal.js");
/* harmony import */ var _components_modal__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_components_modal__WEBPACK_IMPORTED_MODULE_5__);






})();

/******/ })()
;
//# sourceMappingURL=main.js.map