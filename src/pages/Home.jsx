import React from 'react'
import './Baby.css'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate();

    const navigateToAbout = () => {
        setTimeout(() => {
            navigate('/about');
        }, 2000);

    }

    const navigateToProducts = () => {
        setTimeout(() => {
            navigate('/products');
        }, 2000);
    }

  return (
    <>
        <div className="home">I am home page</div><br />
        <button className='about-btn' onClick={navigateToAbout}>Go to About</button>
        <button className='products-btn' onClick={navigateToProducts}>Go to Products</button><br />
        <p className='note'>Note: The navigation will happen after 2 seconds</p>
    </>
    
  )
}

export default Home