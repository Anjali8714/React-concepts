import React from 'react'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <>
    <div>
      <h1>This is a home page </h1>
        <Link to='About'>Home</Link>
    </div>
    
    </>
  )
}

export default Home
