import React from 'react'

const Functiononchange = () => {
   const handeled = (e)=>{
    console.log(e.target.value);
    
   }
    return (
    <div>
    <input type="text" onChange={handeled}/>
      
    </div>
  )
}

export default Functiononchange
