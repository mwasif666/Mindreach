import { Navigate, Route, Routes } from 'react-router-dom'
import { routeConfig } from './routeConfig'

function AppRouter() {
  return (
    <Routes>
      {routeConfig.map(({ path, element }) => (
        <Route key={path} path={path} element={element} />
      ))}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default AppRouter
