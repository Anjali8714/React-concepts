import React, { useState } from 'react'

const Event = () => {
    const [input,setinput] = useState("")
    const HandlingEvent = (e) =>  {
        setinput(e.target.value)
 console.log(input);
 
 
 
}

  return (
    <div>
      <input type="text" onChange={HandlingEvent}/>
      <h1>{input}</h1>
    </div>
  )
}

export default Event
