import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import SITE_NAV_ITEMS from '../../data/navigationLinks'
import { normalizePathname } from '../../utils/pathname'

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
  const [openMobileSubmenus, setOpenMobileSubmenus] = useState({})
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

  useEffect(() => {
    setIsMobileMenuOpen(false)
    setOpenMobileSubmenus({})
  }, [location.pathname])

  const toggleMobileSubmenu = (href) => {
    setOpenMobileSubmenus((currentValue) => ({
      ...currentValue,
      [href]: !currentValue[href],
    }))
  }

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
                        {SITE_NAV_ITEMS.map((item) => {
                          const isActive = isItemActive(currentPath, item.matchPaths, item.matchPrefixes)
                          const hasChildren = Array.isArray(item.children) && item.children.length > 0

                          return (
                            <li
                              key={item.href}
                              className={`${hasChildren ? 'has-dropdown site-header__nav-item--has-children' : ''}${isActive ? ' active' : ''}`.trim() || undefined}
                            >
                              <a
                                href={item.href}
                                aria-disabled={item.disabledInHeader ? 'true' : undefined}
                                aria-current={isActive ? 'page' : undefined}
                                tabIndex={item.disabledInHeader ? -1 : undefined}
                                onClick={item.disabledInHeader ? (event) => event.preventDefault() : undefined}
                              >
                                {item.label}
                                {hasChildren ? <i className="fas fa-angle-down" aria-hidden="true" /> : null}
                              </a>
                              {hasChildren ? (
                                <ul className="submenu site-header__submenu">
                                  {item.children.map((child) => {
                                    const isChildActive = isItemActive(
                                      currentPath,
                                      child.matchPaths ?? [child.href],
                                      child.matchPrefixes ?? [],
                                    )

                                    return (
                                      <li key={child.href} className={isChildActive ? 'active' : undefined}>
                                        <a href={child.href} aria-current={isChildActive ? 'page' : undefined}>
                                          {child.label}
                                        </a>
                                      </li>
                                    )
                                  })}
                                </ul>
                              ) : null}
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
                  href="/book-appointment"
                  className="common-btn box-style first-box d-inline-flex justify-content-center align-items-center gap-xxl-2 gap-2 fs18 fw-semibold black overflow-hidden p1-bg rounded100"
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
              {SITE_NAV_ITEMS.map((item) => {
                const isActive = isItemActive(currentPath, item.matchPaths, item.matchPrefixes)
                const hasChildren = Array.isArray(item.children) && item.children.length > 0
                const mobileSubmenuId = `mobile-submenu-${item.href.replace(/[^a-z0-9]+/gi, '-').replace(/^-|-$/g, '')}`
                const isSubmenuOpen = openMobileSubmenus[item.href] ?? isActive

                return (
                  <li
                    key={`mobile-${item.href}`}
                    className={`${hasChildren ? 'site-mobile-drawer__item--has-children' : ''}${isActive ? ' active' : ''}`.trim() || undefined}
                  >
                    <div className="site-mobile-drawer__item-row">
                      <a
                        href={item.href}
                        aria-disabled={item.disabledInHeader ? 'true' : undefined}
                        aria-current={isActive ? 'page' : undefined}
                        tabIndex={item.disabledInHeader ? -1 : undefined}
                        onClick={(event) => {
                          if (item.disabledInHeader) {
                            event.preventDefault()
                            return
                          }

                          setIsMobileMenuOpen(false)
                        }}
                      >
                        {item.label}
                      </a>
                      {hasChildren ? (
                        <button
                          type="button"
                          className={`site-mobile-drawer__submenu-toggle${isSubmenuOpen ? ' is-open' : ''}`}
                          aria-label={`${isSubmenuOpen ? 'Collapse' : 'Expand'} ${item.label} menu`}
                          aria-controls={mobileSubmenuId}
                          aria-expanded={isSubmenuOpen}
                          onClick={() => toggleMobileSubmenu(item.href)}
                        >
                          <i className="fas fa-angle-down" aria-hidden="true" />
                        </button>
                      ) : null}
                    </div>
                    {hasChildren ? (
                      <ul
                        id={mobileSubmenuId}
                        className={`site-mobile-drawer__submenu${isSubmenuOpen ? ' is-open' : ''}`}
                      >
                        {item.children.map((child) => {
                          const isChildActive = isItemActive(
                            currentPath,
                            child.matchPaths ?? [child.href],
                            child.matchPrefixes ?? [],
                          )

                          return (
                            <li key={`mobile-${child.href}`} className={isChildActive ? 'active' : undefined}>
                              <a href={child.href} aria-current={isChildActive ? 'page' : undefined}>
                                {child.label}
                              </a>
                            </li>
                          )
                        })}
                      </ul>
                    ) : null}
                  </li>
                )
              })}
            </ul>
          </nav>
          <a
            href="/book-appointment"
            className="common-btn box-style first-box d-inline-flex justify-content-center align-items-center gap-xxl-2 gap-2 fs18 fw-semibold black overflow-hidden p1-bg rounded100 site-mobile-drawer__cta"
            onClick={() => setIsMobileMenuOpen(false)}
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
