export function normalizePathname(pathname) {
  if (!pathname) {
    return '/'
  }

  let value = pathname.trim().toLowerCase()

  if (!value.startsWith('/')) {
    value = `/${value}`
  }

  value = value.replace(/\/+$/, '')

  return value || '/'
}

export function isSpecialLink(href) {
  if (!href) {
    return true
  }

  const value = href.trim()

  return (
    !value ||
    value.startsWith('#') ||
    value.startsWith('javascript:') ||
    value.startsWith('mailto:') ||
    value.startsWith('tel:')
  )
}
