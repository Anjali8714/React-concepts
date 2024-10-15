import React, { useState } from 'react'

const Countcolorchange = () => {

const [count,setcount] = useState(0)


  return (
    <div>
      <h1>{count}</h1>
      <button onClick={incre}>Increment</button>
      <button onClick={decre}>Decrement</button>
    </div>
  )
}

export default Countcolorchange
