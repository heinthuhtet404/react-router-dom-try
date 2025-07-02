import React from 'react'
import { Link } from 'react-router-dom'
import { useLoaderData } from 'react-router-dom';
import User from '../components/User';
import './Products.css'


const Products = () => {
  const PRODUCTS = useLoaderData();

  return (
    <section className='products-section'>
      {PRODUCTS.map((product) => (
        <Link to={`/product/${product.title}`} key={product.id}>
          <div className='products'>
            <h2>{product.title}</h2>
            <p>Price: ${product.price}</p>
            <User userId={product.userId} />
            </div>
          </Link>
          
        
      ))}
    </section>
  )
}

export default Products;

export const loader = async () => {
  const response = await fetch('https://fakestoreapi.com/products');
  
  if(!response.ok) {
    throw json({
      message: 'Failed to fetch products',
    }, {
      status: 500
    });
  } else {
    const products = await response.json();
    console.log(products);
    // Assuming the API returns an array of products
    return products;
    
  }
}
