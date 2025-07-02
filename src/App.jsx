import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import ProductDetails from './pages/ProductDetails'
import Main from './layouts/Main'
import Error from './pages/Error'
import { loader as ProductsLoader} from './pages/Products'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main/>,
    errorElement: <Error />,
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
        loader: ProductsLoader, // Attach the loader function to the route
      },
      {
        path: '/product/:title', // Dynamic route for product details
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