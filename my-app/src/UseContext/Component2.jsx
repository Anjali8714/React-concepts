import React, { useContext } from 'react'
import { userContext } from './Component1'

const Component2 = () => {
  const {counter,setCounter,counter2,setCounter2} = useContext(userContext)

  return (
    <div>
        <h1>Counter value : {counter}</h1>
      <button onClick={() => setCounter( counter + 1)}>click counter{counter}</button>
      <h1>2nd counter value : {counter2}</h1>
      <button onClick={ () => setCounter2 (counter2 + 1)}>click counter2 : {counter2}</button>
    </div>
  )
}

export default Component2



