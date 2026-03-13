import { useEffect } from 'react'
import SiteFooter from './SiteFooter'
import SiteHeader from '../navigation/SiteHeader'

function PageLayout({ title, bodyClass, children, showSharedFooter = true }) {
  useEffect(() => {
    document.title = title || 'MindReach'
    document.body.className = bodyClass || ''
  }, [bodyClass, title])

  return (
    <>
      <SiteHeader />
      {children}
      {showSharedFooter ? <SiteFooter /> : null}
    </>
  )
}

export default PageLayout
