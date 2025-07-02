import React from 'react'
import { Link, useRouteError } from 'react-router-dom'

const Error = () => {
    const error = useRouteError();

    let title = "Unknown error occurred";

    if(error.status === 500) {
        title = error.data.message;
    }

  return (
    <>
      <h1>{title}</h1>
      <Link to="/">
        <button>Go back to Home</button>
      </Link>
    </>
  )
}

export default Error    