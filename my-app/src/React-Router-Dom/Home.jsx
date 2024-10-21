import React from 'react'
import { useNavigate } from 'react-router-dom'
const Home = () => {
  const navigate= useNavigate()
  return (
    <>
    <div>HomePage</div>
    <button onClick={() => navigate('order-summary')}>Place order</button>
    </>
    
  )
}

export default Home
