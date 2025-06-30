import React from 'react'
import { useParams } from 'react-router-dom'

const Product = () => {
  const { id } = useParams();
  return (
    <>
        <h1>Dynamic route</h1>
        <p>This is a product page for product : {id}</p>
    </>
  )
}

export default Product