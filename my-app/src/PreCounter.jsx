import React, {useState} from 'react'

const PreCounter = () => {

const [count,setcount] = useState(0);

  return (
    <div>
      <h1>You clicked {count} times</h1>
      <button onClick={() => setcount ((prevcount) => prevcount + 1)}>Click Me</button>
    </div>
  )
}

export default PreCounter
