import React from 'react'
import { RouterProvider } from 'react-router-dom'
import { createBrowserRouter } from 'react-router-dom'
import Main from './layouts/Main.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Products from './pages/Products.jsx'
import Error from './pages/Error.jsx'
import Product from './pages/Product.jsx'

const router = createBrowserRouter([
  {
    path: '',
    element: <Main />,
    errorElement: <Error/>,
    // This is the default route, it will be used if no path is specified
    children: [
      { path: '/', element: <Home /> },
      { path: '/about', element: <About /> },
      { path: '/products', element: <Products /> },
      { path: '/product/:id', element: <Product/> },
        // This is a dynamic route, it will match any path like /product/1,
    ]
  }
])

const App = () => {
  return (
    <RouterProvider router={router}/>
  )
}

export default App