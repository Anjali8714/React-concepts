import React from 'react'
import { useContext } from 'react'
import { userContext } from './Component1'

const Component4 = () => {
  const {user} = useContext(userContext)
  return (
    <div>
      <h1>user values : {user.name} <br/> user age : {user.age}</h1>
    </div>
  )
}

export default Component4
