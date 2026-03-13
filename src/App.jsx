import InternalLinkHandler from './components/navigation/InternalLinkHandler'
import LegacyRouteInitializer from './components/navigation/LegacyRouteInitializer'
import RouteScrollManager from './components/navigation/RouteScrollManager'
import AppRouter from './router/AppRouter'

function App() {
  return (
    <>
      <InternalLinkHandler />
      <RouteScrollManager />
      <LegacyRouteInitializer />
      <AppRouter />
    </>
  )
}

export default App
