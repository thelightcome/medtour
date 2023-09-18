import Swiper from 'swiper'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'

document.addEventListener('DOMContentLoaded', () => {
  const width = document.body.offsetWidth
  let slidesPerView, spaceBetween

  if (width < 780) {
    slidesPerView = 1
    spaceBetween = 10
  } else if (width < 1025) {
    slidesPerView = 2
    spaceBetween = 20
  } else {
    slidesPerView = 3
    spaceBetween = 30
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
  })

  let map

  async function initMap() {
    const position = { lat: -25.344, lng: 131.031 }
    const { Map } = await google.maps.importLibrary("maps")

    map = new Map(document.getElementById("google-map"), {
      zoom: 4,
      center: position,
      mapId: "DEMO_MAP_ID",
    })
  }

  initMap()
})
