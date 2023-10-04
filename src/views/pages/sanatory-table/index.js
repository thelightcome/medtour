import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';

document.addEventListener('DOMContentLoaded', () => {
  const swiperBorder = document.querySelector('.sanatory-slide__border');
  const swiperCurrent = document.querySelector('.sanatory-slide__current-slide');
  const swiperCount = document.querySelector('.sanatory-slide__count');

  const swiper = new Swiper('.sanatory-swiper', {
    // configure Swiper to use modules
    init: false,
    direction: 'horizontal',
    modules: [Navigation],
    slidesPerView: 1,
    spaceBetween: 30,
    navigation: {
      nextEl: '.sanatory-slide__swiper-button-next',
      prevEl: '.sanatory-slide__swiper-button-prev',
    },
  });

  swiper.on('init', () => {
    swiperBorder.style.width = 100 / (swiper.slides.length) + '%';
    swiperCount.innerHTML = swiper.slides.length
  })

  swiper.on('progress', (swiper, progress) => {
    const maxW = 100 - 100 / (swiper.slides.length)
    swiperBorder.style.left = progress * maxW + '%';
  })

  swiper.on('activeIndexChange', (swiper, progress) => {
    swiperCurrent.innerHTML = swiper.realIndex + 1;
  })

  swiper.init();
})