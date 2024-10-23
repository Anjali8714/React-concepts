import React, { useContext } from 'react'
import { userContext } from './Component1'
const Component3 = () => {
    const {counter ,arr} = useContext(userContext)
  return (
    <div>
      <h1>counter value in third component :{counter}</h1>
      <h1>{arr}</h1>
    </div>
  )
}

export default Component3
