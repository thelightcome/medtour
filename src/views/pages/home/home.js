import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

document.addEventListener('DOMContentLoaded', () => {
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

  new Swiper('.clinics-swiper', {
    direction: 'horizontal',
    modules: [Navigation],
    slidesPerView: slidesPerView,
    spaceBetween: spaceBetween,
    navigation: {
      nextEl: '.clinic__swiper-button-next',
      prevEl: '.clinic__swiper-button-prev',
    },
  });

  let iframe

  function getFrame() {
    setTimeout(() => {
      iframe = document.querySelector(".location__map iframe")
      if (!iframe) getFrame()
      else {
        iframe.style.filter = 'grayscale(1)'
        iframe?.addEventListener("load", function() {})
      }
    }, 500)
  }
  getFrame()

  function setRouteClinics() {
    const svgs = document.querySelectorAll('.d-svg-g')
    svgs.forEach((e) => {
      e.addEventListener('click', () => {
        const route = e?.dataset?.route

        if (route) {
          console.log(route)

          window.location.pathname = route
        }
      })
    })
  }
  setRouteClinics()

  // myiFrame?.addEventListener("load", function() {
  //   myiFrame.contentWindow.document.body.style.backgroundColor = "lightblue"
  //   console.dir( myiFrame.contentWindow.document.body)
  // })
  // let map;

  // async function initMap() {
  //   const position = { lat: -25.344, lng: 131.031 };
  //   const { Map } = await google.maps.importLibrary('maps');

  //   map = new Map(document.getElementById('google-map'), {
  //     zoom: 4,
  //     center: position,
  //     mapId: 'DEMO_MAP_ID',
  //   });
  // }

  // initMap()
});
