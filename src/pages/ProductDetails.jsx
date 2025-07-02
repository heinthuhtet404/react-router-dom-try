import React from 'react'
import { useParams, useNavigate } from 'react-router-dom' // useParams is used to access the dynamic segments of the URL
import './ProductDetails.css' // Importing CSS for styling the ProductDetails component

const ProductDetails = () => {
  const { title } = useParams(); // Extracting the product title from the URL
  const navigate = useNavigate(); // useNavigate is used to programmatically navigate to different routes

  const navigateHandler = () => {
    navigate('/products');
  }
  return (
    <section className='product-details-section'>
      <div className='product-details'>
        <div>Product Details</div>
      <h2>product title - {title}</h2>
      <button onClick={navigateHandler}>go back to products</button>
      </div>
    </section>
  )
}

export default ProductDetails;

export const loader = async (request, params) => {
  const response = await fetch(`https://fakestoreapi.com/products/${params.title}`);

  if (!response.ok) {
    throw new Response('Failed to fetch product details', { status: 500 });
  } else {
    const product = await response.json();
    return product; // Return the product details
  }

}