import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { isSpecialLink, normalizePathname } from '../../utils/pathname'

const ALLOWED_PATH_PREFIXES = [
  '/',
  '/about',
  '/contact',
  '/doctor',
  '/doctor-details',
  '/service',
  '/service-details',
]

function isPrimaryNavigationClick(event) {
  return !(
    event.defaultPrevented ||
    event.button !== 0 ||
    event.metaKey ||
    event.ctrlKey ||
    event.shiftKey ||
    event.altKey
  )
}

function isStaticAssetPath(pathname) {
  return /\.[a-z0-9]+$/i.test(pathname)
}

function matchesPathPrefix(pathname, prefix) {
  if (prefix === '/') {
    return pathname === '/'
  }

  return pathname === prefix || pathname.startsWith(`${prefix}/`)
}

function isAllowedInternalPath(pathname) {
  return ALLOWED_PATH_PREFIXES.some((prefix) => matchesPathPrefix(pathname, prefix))
}

function InternalLinkHandler() {
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const handleClick = (event) => {
      if (!isPrimaryNavigationClick(event)) {
        return
      }

      const target = event.target
      if (!(target instanceof Element)) {
        return
      }

      const anchor = target.closest('a[href]')
      if (!anchor) {
        return
      }

      const href = anchor.getAttribute('href')
      if (isSpecialLink(href) || anchor.target === '_blank' || anchor.hasAttribute('download')) {
        return
      }

      const targetUrl = new URL(href, window.location.origin)
      if (targetUrl.origin !== window.location.origin) {
        return
      }

      const nextPath = normalizePathname(targetUrl.pathname)
      if (isStaticAssetPath(nextPath)) {
        return
      }

      if (!isAllowedInternalPath(nextPath)) {
        event.preventDefault()
        return
      }

      const nextUrl = `${nextPath}${targetUrl.search}${targetUrl.hash}`
      const currentPath = normalizePathname(location.pathname)
      const currentUrl = `${currentPath}${location.search}${location.hash}`

      if (nextUrl === currentUrl) {
        event.preventDefault()
        return
      }

      event.preventDefault()
      navigate(nextUrl)
    }

    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, [location.hash, location.pathname, location.search, navigate])

  return null
}

export default InternalLinkHandler
