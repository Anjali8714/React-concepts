import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
const CreateBlog = () => {
    const navigate =useNavigate();
    const [title,settitle] = useState()
    
    const [body,setbody] = useState()
  return (
    <div>
        <label>Title </label>

    
     <input type= 'text' placeholder='Type here...' value={title} onChange={(e) => settitle( e.target.value)}></input><br/><br/>
     <label>Body </label>
     <textarea cols={10} rows={10} value={body} onChange={(e) => setbody(e.target.value)}></textarea><br/><br/>
     <button >Ok</button>
    </div>
  )
}

export default CreateBlog
