import React, { useState } from 'react'



const DivColor = () => {

    const [color1,setcolor1] = useState(0);


  return (
    <div style={{display :'flex', gap : "10px"}}>
      <div onClick={() => setcolor1(1)} style={{background : color1>=1?"red":"", width:'25px',height :"25px"}}>1</div>
      <div onClick={() => setcolor1(2)} style={{background :  color1>=2?"red":"", width:'25px',height :"25px"}}>2</div>
      <div onClick={() => setcolor1(3)} style={{background :  color1>=3?"red":"", width:'25px',height :"25px"}}>3</div>
      <div onClick={() => setcolor1(4)} style={{background :  color1>=4?"red":"", width:'25px',height :"25px"}}>4</div>
    </div>
  )
}

export default DivColor
