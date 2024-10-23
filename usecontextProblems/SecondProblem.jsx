import React,{createContext,useState} from 'react'
import {useNavigate} from 'react-router-dom'

export const userContext = createContext()
const SecondProblem = () => {
  const navigate = useNavigate()
    const [counter ,setCounter] = useState(0);
  return (
    <div>

     <userContext.Provider value={{counter , setCounter}}>
      <button onClick={() => setCounter(counter + 1)} >click</button>
      <button onClick={() => navigate('result')}>move</button>
      
     </userContext.Provider>
    </div>
  )
}

export default SecondProblem
