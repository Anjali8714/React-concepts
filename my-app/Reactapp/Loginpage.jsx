import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
const Loginpage = () => {
  const navigate=useNavigate()
  return (
    <>
      <h1>Login Page</h1>
      <Link to='/login'></Link>
      <button onClick={() => navigate('/home')}>Login</button>
    
    </>
  )
}

export default Loginpage
