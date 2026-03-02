import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

function RouteScrollManager() {
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      const targetId = location.hash.slice(1)
      if (targetId) {
        const targetElement = document.getElementById(targetId)
        if (targetElement) {
          targetElement.scrollIntoView()
          return
        }
      }
    }

    window.scrollTo({ top: 0, behavior: 'auto' })
  }, [location.hash, location.pathname])

  return null
}

export default RouteScrollManager
