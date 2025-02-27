import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import About from './pages/about'
import Home from './pages/home'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/about',
    element: <About />
  }
])

export default function App() {
  return <RouterProvider router={router} />
}
