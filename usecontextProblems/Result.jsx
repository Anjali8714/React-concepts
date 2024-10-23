import React, { useContext } from 'react'
import { userContext} from './SecondProblem';

const Result = () => {
   const {counter} = useContext(userContext)
  return (
    <div>
      <h1>Counting value : {counter}</h1>
    </div>
  )
}

export default Result
