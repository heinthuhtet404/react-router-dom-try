import React from 'react'
import { useParams, useNavigate } from 'react-router-dom' // useParams is used to access the dynamic segments of the URL


const ProductDetails = () => {
  const { title } = useParams(); // Extracting the product title from the URL
  const navigate = useNavigate(); // useNavigate is used to programmatically navigate to different routes

  const navigateHandler = () => {
    navigate('/products');
  }
  return (
    <>
      <div>Product Details</div>
      <h2>product title - {title}</h2>
      <button onClick={navigateHandler}>go back to products</button>
    </>
  )
}

export default ProductDetails