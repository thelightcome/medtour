/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!*****************************************!*\
  !*** ./src/views/pages/clinic/index.js ***!
  \*****************************************/
document.addEventListener('DOMContentLoaded', () => {
  const doctors = document.querySelectorAll('.doctor .doctor__btn')
  const modal = document.querySelector('.modal')
  const modalCloseBtn = document.querySelector('.modal .modal__close')

  doctors.forEach((e) => {
    e.addEventListener('click', () => {
      modal.classList.add('active')
    })
  })

  modalCloseBtn.addEventListener('click', () => {
    modal.classList.remove('active')
  })
})
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNzZXRzL2pzL2luZGV4LjQuMWIzOTk1MmEuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VicGFjay1odG1sLXNjc3MtYm9pbGVycGxhdGUvLi9zcmMvdmlld3MvcGFnZXMvY2xpbmljL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XHJcbiAgY29uc3QgZG9jdG9ycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kb2N0b3IgLmRvY3Rvcl9fYnRuJylcclxuICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbCcpXHJcbiAgY29uc3QgbW9kYWxDbG9zZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbCAubW9kYWxfX2Nsb3NlJylcclxuXHJcbiAgZG9jdG9ycy5mb3JFYWNoKChlKSA9PiB7XHJcbiAgICBlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICBtb2RhbC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxyXG4gICAgfSlcclxuICB9KVxyXG5cclxuICBtb2RhbENsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgbW9kYWwuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcclxuICB9KVxyXG59KSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==