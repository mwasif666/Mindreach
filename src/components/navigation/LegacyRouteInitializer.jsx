import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'

const SWIPER_CONFIGS = [
  {
    selector: '.testimonial-slider1',
    options: {
      spaceBetween: 30,
      speed: 500,
      loop: true,
      breakpoints: {
        1199: { slidesPerView: 1 },
        767: { slidesPerView: 1 },
        575: { slidesPerView: 1 },
        0: { slidesPerView: 1 },
      },
      usePagination: true,
      useNavigation: true,
    },
  },
  {
    selector: '.sponsor-text-slide',
    options: {
      speed: 6000,
      loop: true,
      slidesPerView: 'auto',
      centeredSlides: false,
      freeMode: true,
      freeModeMomentum: false,
      allowTouchMove: false,
      autoplay: {
        delay: 0,
        disableOnInteraction: false,
      },
      breakpoints: {
        991: { spaceBetween: 30 },
        600: { spaceBetween: 20 },
        400: { spaceBetween: 16 },
        0: { spaceBetween: 14 },
      },
    },
  },
  {
    selector: '.testimonial-slider',
    options: {
      spaceBetween: 30,
      speed: 500,
      loop: true,
      breakpoints: {
        1199: { slidesPerView: 1 },
        767: { slidesPerView: 1 },
        575: { slidesPerView: 1 },
        0: { slidesPerView: 1 },
      },
      usePagination: true,
      useNavigation: true,
    },
  },
  {
    selector: '.testimonial-slider3',
    options: {
      spaceBetween: 30,
      speed: 500,
      loop: true,
      breakpoints: {
        1199: { slidesPerView: 1 },
        767: { slidesPerView: 1 },
        575: { slidesPerView: 1 },
        0: { slidesPerView: 1 },
      },
      usePagination: true,
      useNavigation: true,
    },
  },
  {
    selector: '.lastes-project__wrapper',
    options: {
      spaceBetween: 24,
      speed: 500,
      loop: true,
      breakpoints: {
        1199: { slidesPerView: 3 },
        767: { slidesPerView: 3, spaceBetween: 14 },
        500: { slidesPerView: 2, spaceBetween: 14 },
        0: { slidesPerView: 1, spaceBetween: 14 },
      },
      usePagination: true,
      useNavigation: true,
    },
  },
  {
    selector: '.latest-project3__wrapper',
    options: {
      spaceBetween: 24,
      speed: 500,
      loop: true,
      breakpoints: {
        1199: { slidesPerView: 4 },
        767: { slidesPerView: 2, spaceBetween: 14 },
        500: { slidesPerView: 2, spaceBetween: 14 },
        0: { slidesPerView: 1, spaceBetween: 14 },
      },
      usePagination: true,
      useNavigation: true,
    },
  },
  {
    selector: '.testimonial-slider-3',
    options: {
      spaceBetween: 30,
      speed: 1500,
      loop: true,
      autoplay: {
        delay: 1000,
        disableOnInteraction: false,
      },
      useNavigation: true,
    },
  },
]

function findScopedControls(sliderElement) {
  const roots = [
    sliderElement.closest('.testimonail-wrapper-style1'),
    sliderElement.closest('.testimonial-wrapper3'),
    sliderElement.closest('.latest-project3'),
    sliderElement.closest('.testimonial-sectio2'),
    sliderElement.closest('.container'),
    sliderElement.closest('section'),
  ].filter(Boolean)

  let prevEl = null
  let nextEl = null
  let paginationEl = null

  for (const root of roots) {
    prevEl ||= root.querySelector('.array-prev')
    nextEl ||= root.querySelector('.array-next')
    paginationEl ||= root.querySelector('.dot')

    if ((prevEl && nextEl) || paginationEl) {
      break
    }
  }

  return { prevEl, nextEl, paginationEl }
}

function buildSwiperOptions(sliderElement, config) {
  const { useNavigation, usePagination, ...options } = config
  const resolvedOptions = { ...options }
  const { prevEl, nextEl, paginationEl } = findScopedControls(sliderElement)

  if (useNavigation && prevEl && nextEl) {
    resolvedOptions.navigation = { nextEl, prevEl }
  }

  if (usePagination && paginationEl) {
    resolvedOptions.pagination = { el: paginationEl, clickable: true }
  }

  return resolvedOptions
}

function initializeSwipers() {
  const SwiperConstructor = window.Swiper
  if (!SwiperConstructor) {
    return []
  }

  return SWIPER_CONFIGS.flatMap(({ selector, options }) => {
    return Array.from(document.querySelectorAll(selector)).map((sliderElement) => {
      if (sliderElement.swiper && !sliderElement.swiper.destroyed) {
        sliderElement.swiper.destroy(true, true)
      }

      return new SwiperConstructor(sliderElement, buildSwiperOptions(sliderElement, options))
    })
  })
}

function initializeLegacyRoutePlugins() {
  const swiperInstances = initializeSwipers()

  if (window.ScrollTrigger?.refresh) {
    window.ScrollTrigger.refresh()
  }

  return () => {
    swiperInstances.forEach((instance) => {
      if (!instance.destroyed) {
        instance.destroy(true, true)
      }
    })
  }
}

function LegacyRouteInitializer() {
  const location = useLocation()
  const isInitialRender = useRef(true)

  useEffect(() => {
    if (isInitialRender.current) {
      isInitialRender.current = false
      return undefined
    }

    let cleanup = () => {}
    let animationFrameOne = 0
    let animationFrameTwo = 0

    animationFrameOne = window.requestAnimationFrame(() => {
      animationFrameTwo = window.requestAnimationFrame(() => {
        cleanup = initializeLegacyRoutePlugins()
      })
    })

    return () => {
      window.cancelAnimationFrame(animationFrameOne)
      window.cancelAnimationFrame(animationFrameTwo)
      cleanup()
    }
  }, [location.pathname])

  return null
}

export default LegacyRouteInitializer
