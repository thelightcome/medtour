import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger.js'
import img1 from '@images/bg-form-1.png'
import img2 from '@images/bg-form-2.png'

gsap.registerPlugin(ScrollTrigger)

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
  let whiteType = true

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
    if (window.location.pathname === '/' || window.location.pathname === '/medtour/') {
      if (!whiteType && window.scrollY > 100) {
        whiteType = true
        header.classList.add('white-type')
      } else if (whiteType && window.scrollY < 100) {
        whiteType = false
        header.classList.remove('white-type')
      }
    } else {
      const height = header.getBoundingClientRect().height
      if (!whiteType && window.scrollY > 100) {
        whiteType = true
        header.classList.remove('static')
        document.body.style.paddingTop = height + 'px'
      } else if (whiteType && window.scrollY < 100) {
        whiteType = false
        header.classList.add('static')
        document.body.style.paddingTop = 'unset'
      }
    }
  })

  if (window.location.pathname === '/' || window.location.pathname === '/medtour/') {
    whiteType = false
    header.classList.remove('white-type')
    header.classList.remove('static')
  }
  if (!whiteType && window.scrollY > 100) {
    whiteType = true
    header.classList.add('white-type')
  }
}

function breadCrumbsInit() {
  const breadcrumbs = document.querySelector('#breadcrumbs')

  if (window.location.pathname === '/' || window.location.pathname === '/medtour/') {
    breadcrumbs.classList.remove('active')
  }
}

function backgroundInit() {
  const container = document.querySelector('.bg-container')
  const getBlock = document.querySelector('[data-bg-id]')

  const urls = [img1, img2, img1, img2, img1, img1, img2, img1, img2, img2]
  const classes = [`circle-right`, `circle-right-1`, `circle-right-2`, `circle-left`, `circle-left-1`, `circle-left-2`]
  const pageOptions = {
    home: [
      {
        src: img1,
        anim: classes[0],
        width: '42%',
        top: '10%',
        left: '-10%',
        zIndex: '-10'
      },
      {
        src: img2,
        anim: classes[1],
        width: '30%',
        top: '25%',
        left: '30%',
        zIndex: '-10'
      },
      {
        src: img1,
        anim: classes[2],
        width: '60%',
        top: '40%',
        left: '60%',
        zIndex: '-10'
      },
    ]
  }

  if (getBlock) {
    const name = getBlock.dataset.bgId
    pageOptions[name]?.forEach((opt) => {
      const bgBlock = document.createElement('img')
      bgBlock.src = `${opt.src}`
      bgBlock.classList.add('bg-block')
      bgBlock.classList.add(opt.anim)
      bgBlock.style.width = opt.width
      bgBlock.style.top = opt.top
      bgBlock.style.left = opt.left
      bgBlock.style.zIndex = opt.zIndex
      container.appendChild(bgBlock)
    })
  } else {
    const count = getRandom(2, 5)

    for (let i = 0; i < count; i++) {
      const url = urls[getRandom(0, urls.length - 1)]
      const animInd = classes[getRandom(0, classes.length - 1)]

      const bgBlock = document.createElement('img')
      bgBlock.src = `${url}`
      bgBlock.classList.add('bg-block')
      bgBlock.classList.add(animInd)
      bgBlock.style.width = `${getRandom(10, 40)}%`
      bgBlock.style.top = `${getRandom(-5, 95)}%`
      bgBlock.style.left = `${getRandom(-5, 95)}%`
      bgBlock.style.zIndex = `-${getRandom(10, 40)}`
      container.appendChild(bgBlock)
    }
  }
}

function getRandom(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1) + min)
}

function gsapAnim() {
  gsap.utils.toArray('.gsap-reveal').forEach(function (elem) {
    gsap.set(elem, {
      autoAlpha: 0
    })

    let duration = 0.8,
      delay = 0,
      pos = 100

    if (elem.dataset.gsapDuration) duration = elem.dataset.gsapDuration / 1000
    if (elem.dataset.gsapDelay) delay = +elem.dataset.gsapDelay / 1000
    if (elem.dataset.gsapY) pos = elem.dataset.gsapY

    ScrollTrigger.create({
      trigger: elem,
      start: 'top 90%',
      once: true,
      onEnter: function () {
        elem.style.transform = `translateY(${pos}px)`
        elem.style.opacity = '0'
        gsap.fromTo(
          elem, {
          y: pos,
          autoAlpha: 0
        }, {
          duration: duration,
          delay: delay,
          y: 0,
          autoAlpha: 1,
          ease: 'sine',
          overwrite: 'auto',
        }
        )
      },
    })
  })
}

const paths = {
  '/whyus/': [{
    name: 'Почему Астана',
    src: '/whyus'
  }],
  '/info/': [{
    name: 'Информация для туристов',
    src: '/info'
  }],
  '/foreign/': [{
    name: 'Отзывы пациентов',
    src: '/foreign'
  }],
  '/visa/': [{
    name: 'Визовый режим',
    src: '/visa'
  }],
  '/clinics/': [{
    name: 'Клиники Астаны',
    src: '/clinics'
  }],
  '/sanatories/': [{
    name: 'Санатории',
    src: '/sanatory'
  }],
  '/check-up/': [{
    name: 'Check-up',
    src: '/check-up'
  }],
  '/kamt/': [{
    name: 'О КАМТ',
    src: '/kamt'
  }],
  '/news/': [{
    name: 'Новости',
    src: '/news'
  }],
  '/news-id/': [{
    name: 'Новости',
    src: '/news'
  }],
  '/amg/': [{
    name: 'AMG',
    src: '/amg'
  }],
  '/info/placement/': [{
    name: 'Информация для туристов',
    src: '/info'
  }, {
    name: 'Прямые авиарейсы Астаны по 30 направлениям',
    src: '/placement'
  }],
}

function breadcrumbs() {
  const breadcrumbs = document.getElementById('breadcrumbs')
  const breadcrumbsContainer = document.querySelector('.breadcrumbs__container')
  
  const breadcrumbsWrap = document.createElement('div')
  breadcrumbsWrap.classList.add('breadcrumbs__childs')

  if (!breadcrumbsWrap || !breadcrumbs) return

  if (window.location.pathname.includes('404')) {
    breadcrumbs.style.display = 'none'
    return
  }

  const path = paths[window.location.pathname] || paths[window.location.pathname + '/']
  if (path && path.length) {
    for (let i = 0; i < path.length; i += 1) {
      const a = document.createElement('a')
      a.href = path[i].src
      a.textContent = path[i].name
      breadcrumbsWrap.append(a)
    }
    breadcrumbsContainer.append(breadcrumbsWrap)
  } else {
    breadcrumbsWrap.style.display = 'none'
  }
}

function langControllerInit() {
  const langWrap = document.querySelector('.lang')
  const langBtn = langWrap.querySelector('.lang__current')

  document.addEventListener('click', (e) => {
    const target = e.target

    if (target.closest('.lang__current')) langWrap.classList.toggle('active')
    else if (langWrap.classList.contains('active')) langWrap.classList.remove('active')
  })
}

document.addEventListener('DOMContentLoaded', function () {
  navigation()
  scrollBody()
  breadCrumbsInit()
  gsapAnim()
  breadcrumbs()
  backgroundInit()
  // langControllerInit()
})
