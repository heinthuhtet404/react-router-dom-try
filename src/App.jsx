import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import ProductDetails from './pages/ProductDetails'
import Main from './layouts/Main'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main/>,
    children: [
      {
        index: true, // This will render the Home component when the path is exactly '/'
        path: '/',
        element: <Home />
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/products',
        element: <Products />,
      },
      {
        path: '/product/:title',
        element: <ProductDetails />,
      },
    ]
  }
])


const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App