import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'


const ProductDetails = () => {
  const { title } = useParams();
  const navigate = useNavigate();

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