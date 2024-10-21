import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <nav style={{backgroundColor: 'aliceblue' , padding: '16px 32px'}}>
      <Link style ={{marginRight: '16px'}}to='/'>Home</Link>
      <Link to='/about'>About</Link>
    </nav>
  )
}

export default Navbar
