import React, { createContext, useState } from 'react'
import Component2 from './Component2';
import Component3 from './Component3';
import Component4 from './Component4';
export const userContext = createContext()


const Component1 = () => {

    const [counter,setCounter] = useState(0);
    const [counter2,setCounter2] = useState(0)
    const arr= [1,2,3,4]
    const user=  {name:'anupama',
        age:21,
        place:'kollam'
    }
  return (
    <div>
      <userContext.Provider value={{counter , setCounter ,counter2 ,setCounter2 ,arr , user}}>
        <Component2/>
        <Component3/>
        <Component4/>
      </userContext.Provider>
    </div>
  )
}

export default Component1


