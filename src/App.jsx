import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import About from './pages/About';
import Institution from './pages/Institution';
import Error from './pages/Error';
import AskDisha from './pages/AskDisha';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import PricingPage from './pages/Pricing';
import RouteTracker from './components/RouteTracker';
import Error404 from './pages/Error404';

export default function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <div>
          <RouteTracker>
            <Navbar />
            <Home />
            <Footer />
          </RouteTracker>
        </div>
      )
    },
    {
      path: '/dashboard',
      element: (
        <div>
          <RouteTracker>
            <Navbar />
            <Dashboard />
            <Footer />
          </RouteTracker>
        </div>
      )
    },
    {
      path: '/ask-disha',
      element: (
        <div>
          <RouteTracker>
            <Navbar />
            <AskDisha />
            <Footer />
          </RouteTracker>
        </div>
      )
    },
    {
      path: '/pricing',
      element: (
        <div>
          <RouteTracker>
            <Navbar />
            <PricingPage />
            <Footer />
          </RouteTracker>
        </div>
      )
    },
    {
      path: '/about',
      element: (
        <div>
          <RouteTracker>
            <Navbar />
            <About />
            <Footer />
          </RouteTracker>
        </div>
      )
    },
    {
      path: '/institution',
      element: (
        <div>
          <RouteTracker>
            <Navbar />
            <Institution />
            <Footer />
          </RouteTracker>
        </div>
      )
    },
    {
      path: '/login',
      element: (
        <div>
          <RouteTracker>
            <Navbar />
            <Error />
            <Footer />
          </RouteTracker>
        </div>
      )
    },
    {
      path: '/*',
      element: (
        <div>
          <RouteTracker>
            <Navbar />
            <Error404 />
            <Footer />
          </RouteTracker>
        </div>
      )
    },
  ]);

  return (
    <RouterProvider router={router} />
  );
}