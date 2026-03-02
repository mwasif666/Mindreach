import { useEffect } from 'react'

function PageLayout({ title, bodyClass, children }) {
  useEffect(() => {
    document.title = title || 'Medizen'
    document.body.className = bodyClass || ''
  }, [bodyClass, title])

  return children
}

export default PageLayout
