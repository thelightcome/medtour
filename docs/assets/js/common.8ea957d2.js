/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/images/bg-form-1.png":
/*!*****************************************!*\
  !*** ./src/assets/images/bg-form-1.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/img/bg-form-1..png";

/***/ }),

/***/ "./src/assets/images/bg-form-2.png":
/*!*****************************************!*\
  !*** ./src/assets/images/bg-form-2.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/img/bg-form-2..png";

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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**************************************!*\
  !*** ./src/assets/scripts/common.js ***!
  \**************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _images_bg_form_1_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @images/bg-form-1.png */ "./src/assets/images/bg-form-1.png");
/* harmony import */ var _images_bg_form_2_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @images/bg-form-2.png */ "./src/assets/images/bg-form-2.png");



function navigation() {
  const navigationControl = document.querySelector('#navigation-control')
  const navigationBody = document.querySelector('#navigation-body')
  const navigationClose = document.querySelector('#navigation-close')

  navigationControl?.addEventListener('click', () => {
    navigationBody?.classList.add('active')
  })

  navigationClose?.addEventListener('click', () => {
    navigationBody?.classList.remove('active')
  })
}

function scrollBody() {
  const header = document.querySelector('#header')

  let show = true
  let whiteType = false
  window.addEventListener('wheel', (e) => {
    if (e.wheelDelta < 0 && show) {
      show = false
      header.classList.add('hide')
    } else if (e.wheelDelta > 0 && !show) {
      show = true
      header.classList.remove('hide')
    }
  })
  window.addEventListener('scroll', (e) => {
    if (!whiteType && window.scrollY > 100) {
      whiteType = true
      header.classList.add('white-type')
    } else if (whiteType && window.scrollY < 100) {
      whiteType = false
      header.classList.remove('white-type')
    }
  })

  document.addEventListener('DOMContentLoaded', () => {
    if (window.location.pathname !== '/') {
      whiteType = true
      header.classList.add('white-type')
    }
    if (!whiteType && window.scrollY > 100) {
      whiteType = true
      header.classList.add('white-type')
    }
  })
}

function breadCrumbsInit() {
  const breadcrumbs = document.querySelector('#breadcrumbs')

  document.addEventListener('DOMContentLoaded', () => {
    if (window.location.pathname !== '/') {
      breadcrumbs.classList.add('active')
    }
  })
}

function backgroundInit() {
  document.addEventListener('DOMContentLoaded', () => {
    const count = getRandom(2, 4)

    const urls = [`url(${_images_bg_form_1_png__WEBPACK_IMPORTED_MODULE_0__})`, `url(${_images_bg_form_2_png__WEBPACK_IMPORTED_MODULE_1__})`]

    let bg = ''

    for (let i = 0; i < count; i++) {
      const width = getRandom(10, 40)
      const posX = getRandom(-10, 90)
      const posY = getRandom(-10, 90)
      const url = urls[getRandom(0, urls.length - 1)]

      if (bg.length) bg += ', '
      bg += `${posX}% ${posY}% / ${width}% auto no-repeat ${url}`
    }

    document.body.style.background = bg
  })
}

function getRandom(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1) + min)
}

navigation()
scrollBody()
breadCrumbsInit()
backgroundInit()
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNzZXRzL2pzL2NvbW1vbi44ZWE5NTdkMi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7OztBQ0F3QztBQUNBOztBQUV4QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSx5QkFBeUIsa0RBQUksQ0FBQyxXQUFXLGtEQUFJLENBQUM7O0FBRTlDOztBQUVBLG9CQUFvQixXQUFXO0FBQy9CO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZUFBZSxLQUFLLElBQUksS0FBSyxNQUFNLE1BQU0sbUJBQW1CLElBQUk7QUFDaEU7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnQiIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYnBhY2staHRtbC1zY3NzLWJvaWxlcnBsYXRlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYnBhY2staHRtbC1zY3NzLWJvaWxlcnBsYXRlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VicGFjay1odG1sLXNjc3MtYm9pbGVycGxhdGUvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vd2VicGFjay1odG1sLXNjc3MtYm9pbGVycGxhdGUvLi9zcmMvYXNzZXRzL3NjcmlwdHMvY29tbW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiOyIsImltcG9ydCBpbWcxIGZyb20gJ0BpbWFnZXMvYmctZm9ybS0xLnBuZydcbmltcG9ydCBpbWcyIGZyb20gJ0BpbWFnZXMvYmctZm9ybS0yLnBuZydcblxuZnVuY3Rpb24gbmF2aWdhdGlvbigpIHtcbiAgY29uc3QgbmF2aWdhdGlvbkNvbnRyb2wgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmF2aWdhdGlvbi1jb250cm9sJylcbiAgY29uc3QgbmF2aWdhdGlvbkJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmF2aWdhdGlvbi1ib2R5JylcbiAgY29uc3QgbmF2aWdhdGlvbkNsb3NlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25hdmlnYXRpb24tY2xvc2UnKVxuXG4gIG5hdmlnYXRpb25Db250cm9sPy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBuYXZpZ2F0aW9uQm9keT8uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcbiAgfSlcblxuICBuYXZpZ2F0aW9uQ2xvc2U/LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIG5hdmlnYXRpb25Cb2R5Py5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKVxuICB9KVxufVxuXG5mdW5jdGlvbiBzY3JvbGxCb2R5KCkge1xuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaGVhZGVyJylcblxuICBsZXQgc2hvdyA9IHRydWVcbiAgbGV0IHdoaXRlVHlwZSA9IGZhbHNlXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd3aGVlbCcsIChlKSA9PiB7XG4gICAgaWYgKGUud2hlZWxEZWx0YSA8IDAgJiYgc2hvdykge1xuICAgICAgc2hvdyA9IGZhbHNlXG4gICAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZCgnaGlkZScpXG4gICAgfSBlbHNlIGlmIChlLndoZWVsRGVsdGEgPiAwICYmICFzaG93KSB7XG4gICAgICBzaG93ID0gdHJ1ZVxuICAgICAgaGVhZGVyLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKVxuICAgIH1cbiAgfSlcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIChlKSA9PiB7XG4gICAgaWYgKCF3aGl0ZVR5cGUgJiYgd2luZG93LnNjcm9sbFkgPiAxMDApIHtcbiAgICAgIHdoaXRlVHlwZSA9IHRydWVcbiAgICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKCd3aGl0ZS10eXBlJylcbiAgICB9IGVsc2UgaWYgKHdoaXRlVHlwZSAmJiB3aW5kb3cuc2Nyb2xsWSA8IDEwMCkge1xuICAgICAgd2hpdGVUeXBlID0gZmFsc2VcbiAgICAgIGhlYWRlci5jbGFzc0xpc3QucmVtb3ZlKCd3aGl0ZS10eXBlJylcbiAgICB9XG4gIH0pXG5cbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgICBpZiAod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lICE9PSAnLycpIHtcbiAgICAgIHdoaXRlVHlwZSA9IHRydWVcbiAgICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKCd3aGl0ZS10eXBlJylcbiAgICB9XG4gICAgaWYgKCF3aGl0ZVR5cGUgJiYgd2luZG93LnNjcm9sbFkgPiAxMDApIHtcbiAgICAgIHdoaXRlVHlwZSA9IHRydWVcbiAgICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKCd3aGl0ZS10eXBlJylcbiAgICB9XG4gIH0pXG59XG5cbmZ1bmN0aW9uIGJyZWFkQ3J1bWJzSW5pdCgpIHtcbiAgY29uc3QgYnJlYWRjcnVtYnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYnJlYWRjcnVtYnMnKVxuXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gICAgaWYgKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSAhPT0gJy8nKSB7XG4gICAgICBicmVhZGNydW1icy5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxuICAgIH1cbiAgfSlcbn1cblxuZnVuY3Rpb24gYmFja2dyb3VuZEluaXQoKSB7XG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gICAgY29uc3QgY291bnQgPSBnZXRSYW5kb20oMiwgNClcblxuICAgIGNvbnN0IHVybHMgPSBbYHVybCgke2ltZzF9KWAsIGB1cmwoJHtpbWcyfSlgXVxuXG4gICAgbGV0IGJnID0gJydcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY291bnQ7IGkrKykge1xuICAgICAgY29uc3Qgd2lkdGggPSBnZXRSYW5kb20oMTAsIDQwKVxuICAgICAgY29uc3QgcG9zWCA9IGdldFJhbmRvbSgtMTAsIDkwKVxuICAgICAgY29uc3QgcG9zWSA9IGdldFJhbmRvbSgtMTAsIDkwKVxuICAgICAgY29uc3QgdXJsID0gdXJsc1tnZXRSYW5kb20oMCwgdXJscy5sZW5ndGggLSAxKV1cblxuICAgICAgaWYgKGJnLmxlbmd0aCkgYmcgKz0gJywgJ1xuICAgICAgYmcgKz0gYCR7cG9zWH0lICR7cG9zWX0lIC8gJHt3aWR0aH0lIGF1dG8gbm8tcmVwZWF0ICR7dXJsfWBcbiAgICB9XG5cbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmQgPSBiZ1xuICB9KVxufVxuXG5mdW5jdGlvbiBnZXRSYW5kb20obWluLCBtYXgpIHtcbiAgbWluID0gTWF0aC5jZWlsKG1pbilcbiAgbWF4ID0gTWF0aC5mbG9vcihtYXgpXG4gIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkgKyBtaW4pXG59XG5cbm5hdmlnYXRpb24oKVxuc2Nyb2xsQm9keSgpXG5icmVhZENydW1ic0luaXQoKVxuYmFja2dyb3VuZEluaXQoKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==