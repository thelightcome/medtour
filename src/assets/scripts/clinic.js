import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';

function swiperFunc() {
  const swiperBorder = document.querySelector('.nroc-imgs-slide__border');
  const swiperCurrent = document.querySelector('.nroc-imgs-slide__current-slide');
  const swiperCount = document.querySelector('.nroc-imgs-slide__count');

  if (!swiperBorder || !swiperCurrent || !swiperCount) return

  const width = document.body.offsetWidth;
  let slidesPerView, spaceBetween;

  if (width < 780) {
    slidesPerView = 1;
    spaceBetween = 10;
  } else if (width < 1025) {
    slidesPerView = 2;
    spaceBetween = 20;
  } else {
    slidesPerView = 3;
    spaceBetween = 30;
  }

  const swiper = new Swiper('.nroc-imgs-slide-swiper', {
    // configure Swiper to use modules
    init: false,
    direction: 'horizontal',
    modules: [Navigation],
    slidesPerView: slidesPerView,
    spaceBetween: spaceBetween,
    navigation: {
      nextEl: '.nroc-imgs-slide__swiper-button-next',
      prevEl: '.nroc-imgs-slide__swiper-button-prev',
    },
  });

  swiper.on('init', () => {
    swiperBorder.style.width = 100 / (swiper.slides.length - slidesPerView) + '%';
    swiperCount.innerHTML = swiper.slides.length
  })

  swiper.on('progress', (swiper, progress) => {
    const maxW = 100 - 100 / (swiper.slides.length - slidesPerView)
    swiperBorder.style.left = progress * maxW + '%';
  })

  swiper.on('activeIndexChange', (swiper, progress) => {
    swiperCurrent.innerHTML = swiper.realIndex + slidesPerView;
  })

  swiper.init();

  swiperCurrent.innerHTML = slidesPerView;
}

document.addEventListener('DOMContentLoaded', () => {
  const doctors = document.querySelectorAll('.doctor .doctor__btn');
  const modal = document.querySelectorAll('.modal');
  const modalOverlay = document.querySelectorAll('.modal__overlay');
  const modalCloseBtn = document.querySelectorAll('.modal .modal__close');

  doctors.forEach((e) => {
    e.addEventListener('click', (e) => {
      const id = e.target.dataset.id;
      modal.forEach((e) => {
        if (e.dataset.id === id) {
          e.classList.add('active');
        }
      });
      document.body.style.overflow = 'hidden';
    });
  });

  modalCloseBtn.forEach((b) => {
    b.addEventListener('click', (e) => {
      e.target.closest('.active').classList.remove('active');
      document.body.style.overflow = 'unset';
    });
  });

  modalOverlay.forEach((m) => {
    m.addEventListener('click', (e) => {
      if (e.target.closest('.modal__content')) return;

      e.target.closest('.active').classList.remove('active');
      document.body.style.overflow = 'unset';
    });
  });

  modalOverlay.forEach((m) => {
    m.addEventListener('wheel', (e) => {
      e.stopPropagation();
    });
  });

  swiperFunc()
});
