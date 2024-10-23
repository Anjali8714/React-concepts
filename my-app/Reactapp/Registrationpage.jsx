import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
const Registrationpage = () => {
  const navigate=useNavigate()
  return (
    <>
    <nav>
      <h1>Registration Page</h1>
      <Link to='/'></Link>
      <button onClick={() => navigate('/login')}>Submit</button>
    </nav>
    </>
  )
}

export default Registrationpage
