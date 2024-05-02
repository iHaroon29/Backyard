import { router } from './features/Routing/router.tsx'
import { RouterProvider } from 'react-router-dom'

export const App = () => {
  return <RouterProvider router={router} />
}

export default App
