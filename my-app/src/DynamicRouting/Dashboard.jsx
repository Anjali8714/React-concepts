import React from 'react'
import { Link, Outlet } from 'react-router-dom'
const Dashboard = () => {
  return (
    <div>
      <h1>DashBoard</h1>
      <nav>
        <Link to="Profile">Profile</Link>
        <Link to="Settings">Settings</Link>
      </nav>
      <Outlet/>
    </div>
  )
}

export default Dashboard
