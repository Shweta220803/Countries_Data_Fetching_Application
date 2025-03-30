import React from 'react'
import { Link, useRouteError } from 'react-router-dom'

const ErrorPage = () => {
    const error = useRouteError()
    console.log(error);
    
  return (
    <div>
    <h1>OOps an Error occur</h1>
    {error && <p>{error.data}</p>}

    <button><Link to='/'>Go Back to Home</Link></button>
      
    </div>
  )
}

export default ErrorPage
