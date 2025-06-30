import React from 'react'
import { useNavigate } from 'react-router-dom'

const Error = () => {
    const navigate = useNavigate();
    const navigateHandler = () => {
        navigate('/');
    }

  return (
    <>
        <h1>page not found</h1>
        <button onClick={navigateHandler}>go back home</button>
    </>
  )
}

export default Error