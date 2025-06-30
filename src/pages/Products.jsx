import React from 'react'
import { Link } from 'react-router-dom'

const PRODUCTS = [
    {id: 1, title: 'Product1', description: 'Description of Product 1'},
    {id: 2, title: 'Product2', description: 'Description of Product 2'},
    {id: 3, title: 'Product3', description: 'Description of Product 3'},
    {id: 4, title: 'Product4', description: 'Description of Product 4'},
    {id: 5, title: 'Product5', description: 'Description of Product 5'},
    {id: 6, title: 'Product6', description: 'Description of Product 6'},
    {id: 7, title: 'Product7', description: 'Description of Product 7'},
    {id: 8, title: 'Product8', description: 'Description of Product 8'},
    {id: 9, title: 'Product9', description: 'Description of Product 9'},
    {id: 10, title: 'Product10', description: 'Description of Product 10'},
]

const Products = () => {
  return (
    <>
      {PRODUCTS.map((product) => (
        <Link to={`/product/${product.title}`}>
            <div key={product.id} className="product">
              <h2>{product.title}</h2>
              <p>{product.description}</p>
            </div>
        </Link>
        ))
      }
    </>
  )
}

export default Products