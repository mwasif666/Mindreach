import InternalLinkHandler from './components/navigation/InternalLinkHandler'
import RouteScrollManager from './components/navigation/RouteScrollManager'
import AppRouter from './router/AppRouter'

function App() {
  return (
    <>
      <InternalLinkHandler />
      <RouteScrollManager />
      <AppRouter />
    </>
  )
}

export default App
