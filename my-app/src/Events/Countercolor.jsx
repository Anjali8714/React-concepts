import React, { useState } from "react";

function Countercolor () {

const [count,setcount] = useState(0)

return (
    <div>
        <h1 style={{background : count!==0 && count%4==0 ?"red":"",width: "25px" ,height : "50px"}}>{count}</h1>
        <button onClick={() => setcount(p => p+1)}>Click Me</button>
    </div>
)
}

export default Countercolor 