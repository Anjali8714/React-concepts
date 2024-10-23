import React from 'react'
import { useParams } from 'react-router-dom'

function UserProfile() {
    const { id } = useParams(); // Extract the 'id' from the URL
    return <h2>User Profile for ID: {id}</h2>;
  }
  
export default UserProfile
