import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Pricing from './pages/Pricing'
import About from './pages/About'
import Institution from './pages/Institution'
import Error from './pages/Error'
import AskDisha from './pages/AskDisha'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

export default function App() {
  const router = createBrowserRouter(
    [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/dashboard',
        element: <Dashboard />
      },
      {
        path: '/askdisha',
        element: <AskDisha />
      },
      {
        path: '/pricing',
        element: <Pricing />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/institution',
        element: <Institution />
      },
      {
        path: '/*',
        element: <Error />
      },

    ]
  )
  return (
    <div>
      <Navbar />
      <RouterProvider router={router} />
      <Footer />
    </div>
  )
}