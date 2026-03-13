import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { normalizePathname } from '../../utils/pathname'

const NAV_ITEMS = [
  { label: 'Home', href: '/', matchPaths: ['/', '/home-1', '/home-2', '/home-3'] },
  { label: 'Services', href: '/service', matchPaths: ['/service', '/service-details'], matchPrefixes: ['/service-details'] },
  { label: 'About Us', href: '/about', matchPaths: ['/about'], matchPrefixes: [] },
  { label: 'Doctors', href: '/doctor', matchPaths: ['/doctor', '/doctor-details'], matchPrefixes: ['/doctor-details'] },
  { label: 'Portfolio', href: '/project', matchPaths: ['/project', '/project-details'], matchPrefixes: ['/project-details'] },
  { label: 'Contact Us', href: '/contact', matchPaths: ['/contact'], matchPrefixes: [] },
]
const DISABLED_NAV_LINKS = new Set(['/about', '/contact', '/doctor'])

function isItemActive(currentPath, matchPaths = [], matchPrefixes = []) {
  return (
    matchPaths.some((path) => normalizePathname(path) === currentPath) ||
    matchPrefixes.some((path) => {
      const prefix = normalizePathname(path)
      return currentPath === prefix || currentPath.startsWith(`${prefix}/`)
    })
  )
}

function SiteHeader() {
  const location = useLocation()
  const currentPath = normalizePathname(location.pathname)
  const isFloatingHeader = currentPath === '/' || currentPath === '/home-3'
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isSticky, setIsSticky] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1199) {
        setIsMobileMenuOpen(false)
      }
    }

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsMobileMenuOpen(false)
      }
    }

    const handleScroll = () => {
      setIsSticky(window.scrollY > 50)
    }

    window.addEventListener('resize', handleResize)
    window.addEventListener('keydown', handleKeyDown)
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : ''
    document.documentElement.style.overflow = isMobileMenuOpen ? 'hidden' : ''

    return () => {
      document.body.style.overflow = ''
      document.documentElement.style.overflow = ''
    }
  }, [isMobileMenuOpen])

  return (
    <>
      <header
        className={`header-3 site-header ${isFloatingHeader ? 'bg-transparent sticky-header1 site-header--floating' : 'site-header--standard'}${isFloatingHeader && isSticky ? ' sticky' : ''}`}
      >
        <div className="container">
          <div className="mega-menu-wrapper">
            <div className="header-main style-2">
              <div className="header-left">
                <div className="logo">
                  <a href="/" className="header-logo">
                    <img src="/assets/img/logo/logo.svg" alt="MindReach logo" />
                  </a>
                </div>
              </div>
              <div className="header-right d-flex justify-content-end align-items-center">
                <div className="mean__menu-wrapper">
                  <div className="main-menu">
                    <nav aria-label="Primary navigation">
                      <ul>
                        {NAV_ITEMS.map((item) => {
                          const isActive = isItemActive(currentPath, item.matchPaths, item.matchPrefixes)
                          const isDisabled = DISABLED_NAV_LINKS.has(item.href)

                          return (
                            <li key={item.href} className={isActive ? 'active' : undefined}>
                              <a
                                href={item.href}
                                aria-current={isActive ? 'page' : undefined}
                                aria-disabled={isDisabled ? 'true' : undefined}
                                tabIndex={isDisabled ? -1 : undefined}
                                onClick={isDisabled ? (event) => event.preventDefault() : undefined}
                              >
                                {item.label}
                              </a>
                            </li>
                          )
                        })}
                      </ul>
                    </nav>
                  </div>
                </div>
                <div className="header__hamburger d-xl-none my-auto">
                  <button
                    type="button"
                    className="site-header-mobile-toggle"
                    aria-expanded={isMobileMenuOpen}
                    aria-controls="site-mobile-drawer"
                    aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
                    onClick={() => setIsMobileMenuOpen((currentValue) => !currentValue)}
                  >
                    <img src="/assets/img/icon/menu.png" alt="" aria-hidden="true" />
                  </button>
                </div>
              </div>
              <div className="header-btn d-xl-block d-none">
                <a
                  href="/contact"
                  className="common-btn box-style first-box d-inline-flex justify-content-center align-items-center gap-xxl-2 gap-2 fs18 fw-semibold black overflow-hidden p1-bg rounded100"
                  aria-disabled="true"
                  tabIndex={-1}
                  onClick={(event) => event.preventDefault()}
                >
                  Book Appointment
                  <img src="/assets/img/icon/arrow-right-black.png" alt="" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div
        id="site-mobile-drawer"
        className={`site-mobile-drawer${isMobileMenuOpen ? ' is-open' : ''}`}
        aria-hidden={!isMobileMenuOpen}
      >
        <div className="site-mobile-drawer__panel">
          <div className="site-mobile-drawer__top">
            <a href="/" className="header-logo">
              <img src="/assets/img/logo/logo.svg" alt="MindReach logo" />
            </a>
            <button
              type="button"
              className="site-mobile-drawer__close"
              aria-label="Close navigation menu"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <i className="fas fa-times" />
            </button>
          </div>
          <nav className="site-mobile-drawer__nav" aria-label="Mobile navigation">
            <ul>
              {NAV_ITEMS.map((item) => {
                const isActive = isItemActive(currentPath, item.matchPaths, item.matchPrefixes)
                const isDisabled = DISABLED_NAV_LINKS.has(item.href)

                return (
                  <li key={`mobile-${item.href}`} className={isActive ? 'active' : undefined}>
                    <a
                      href={item.href}
                      aria-current={isActive ? 'page' : undefined}
                      aria-disabled={isDisabled ? 'true' : undefined}
                      tabIndex={isDisabled ? -1 : undefined}
                      onClick={(event) => {
                        if (isDisabled) {
                          event.preventDefault()
                          return
                        }

                        setIsMobileMenuOpen(false)
                      }}
                    >
                      {item.label}
                    </a>
                  </li>
                )
              })}
            </ul>
          </nav>
          <a
            href="/contact"
            className="common-btn box-style first-box d-inline-flex justify-content-center align-items-center gap-xxl-2 gap-2 fs18 fw-semibold black overflow-hidden p1-bg rounded100 site-mobile-drawer__cta"
            aria-disabled="true"
            tabIndex={-1}
            onClick={(event) => event.preventDefault()}
          >
            Book Appointment
            <img src="/assets/img/icon/arrow-right-black.png" alt="" aria-hidden="true" />
          </a>
        </div>
      </div>
      <button
        type="button"
        className={`site-mobile-drawer__overlay${isMobileMenuOpen ? ' is-open' : ''}`}
        aria-label="Close navigation menu"
        onClick={() => setIsMobileMenuOpen(false)}
      />
    </>
  )
}

export default SiteHeader
