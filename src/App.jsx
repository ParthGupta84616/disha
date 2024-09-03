import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import About from './pages/About'
import Institution from './pages/Institution'
import Error from './pages/Error'
import AskDisha from './pages/AskDisha'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import PricingPage from './pages/Pricing'

export default function App() {
  const router = createBrowserRouter(
    [
      {
        path: '/',
        element: <div><Navbar /><Home /><Footer /></div>
      },
      {
        path: '/dashboard',
        element: <div><Navbar /><Dashboard /><Footer /></div>
      },
      {
        path: '/ask-disha',
        element: <div><Navbar /><AskDisha /><Footer /></div>
      },
      {
        path: '/pricing',
        element: <div><Navbar /><PricingPage /><Footer /></div>
      },
      {
        path: '/about',
        element: <div className=""><Navbar /><About /><Footer /></div>
      },
      {
        path: '/institution',
        element: <div><Navbar /><Institution /><Footer /></div>
      },
      {
        path: '/*',
        element: <div className=""><Navbar /><Error /><Footer /></div>
      },

    ]
  )
  return (
    <RouterProvider router={router} />
  )
}