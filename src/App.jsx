import { useEffect, useState } from 'react'
import { ConfigProvider } from 'antd'
import InternalLinkHandler from './components/navigation/InternalLinkHandler'
import LegacyRouteInitializer from './components/navigation/LegacyRouteInitializer'
import RouteScrollManager from './components/navigation/RouteScrollManager'
import AppBootLoader from './components/ui/AppBootLoader'
import AppRouter from './router/AppRouter'

function App() {
  const [isBooting, setIsBooting] = useState(true)

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setIsBooting(false)
    }, 2000)

    return () => window.clearTimeout(timer)
  }, [])

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#22b573',
          borderRadius: 20,
        },
      }}
    >
      <InternalLinkHandler />
      <RouteScrollManager />
      <LegacyRouteInitializer />
      <AppRouter />
      {isBooting ? <AppBootLoader /> : null}
    </ConfigProvider>
  )
}

export default App
