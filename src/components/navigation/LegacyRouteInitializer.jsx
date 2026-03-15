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
        pauseOnMouseEnter: true,
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

function bindTickerHoverAutoplay(sliderElement, swiperInstance) {
  if (!sliderElement || !swiperInstance?.autoplay || sliderElement.dataset.tickerHoverBound === 'true') {
    return
  }

  const pauseTicker = () => {
    if (swiperInstance.destroyed) {
      return
    }

    if (typeof swiperInstance.autoplay.pause === 'function') {
      swiperInstance.autoplay.pause()
      return
    }

    if (typeof swiperInstance.autoplay.stop === 'function') {
      swiperInstance.autoplay.stop()
    }
  }

  const resumeTicker = () => {
    if (swiperInstance.destroyed) {
      return
    }

    if (typeof swiperInstance.autoplay.resume === 'function' && swiperInstance.autoplay.paused) {
      swiperInstance.autoplay.resume()
      return
    }

    if (typeof swiperInstance.autoplay.start === 'function' && !swiperInstance.autoplay.running) {
      swiperInstance.autoplay.start()
      return
    }

    if (typeof swiperInstance.autoplay.run === 'function') {
      swiperInstance.autoplay.run()
    }
  }

  sliderElement.dataset.tickerHoverBound = 'true'
  sliderElement.addEventListener('mouseenter', pauseTicker)
  sliderElement.addEventListener('mouseleave', resumeTicker)
}

function initializeBoxStyleButtons() {
  const buttonElements = document.querySelectorAll('.box-style')

  buttonElements.forEach((element) => {
    if (!(element instanceof HTMLElement)) {
      return
    }

    element.style.setProperty('--x', '50%')
    element.style.setProperty('--y', '50%')

    if (element.dataset.boxStyleBound === 'true') {
      return
    }

    const updateButtonOrigin = (event) => {
      const rect = element.getBoundingClientRect()
      const x = `${event.clientX - rect.left}px`
      const y = `${event.clientY - rect.top}px`

      element.style.setProperty('--x', x)
      element.style.setProperty('--y', y)
    }

    const centerButtonOrigin = () => {
      element.style.setProperty('--x', `${element.clientWidth / 2}px`)
      element.style.setProperty('--y', `${element.clientHeight / 2}px`)
    }

    element.dataset.boxStyleBound = 'true'
    element.addEventListener('mousemove', updateButtonOrigin)
    element.addEventListener('mouseenter', centerButtonOrigin)
  })
}

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

      const swiperInstance = new SwiperConstructor(sliderElement, buildSwiperOptions(sliderElement, options))

      if (selector === '.sponsor-text-slide') {
        bindTickerHoverAutoplay(sliderElement, swiperInstance)
      }

      return swiperInstance
    })
  })
}

function initializeLegacyRoutePlugins() {
  initializeBoxStyleButtons()
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
    let animationFrame = 0

    animationFrame = window.requestAnimationFrame(() => {
      initializeBoxStyleButtons()
    })

    return () => {
      window.cancelAnimationFrame(animationFrame)
    }
  }, [location.pathname])

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
