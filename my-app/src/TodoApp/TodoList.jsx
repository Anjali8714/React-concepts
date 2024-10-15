 import React, { useState } from 'react'
 
 const TodoList = () => {
  const [input,setInput] = useState("");
  const [todos,setTodos] = useState([]);

  const HandleChange = (e) => {
    setInput(e.target.value)
  }

  const AddInput = () => {
    if(input.trim() !== ""){
      setTodos([...todos,input]);
      setInput ("");
    }
  }

  const DeleteInput = (index) => {
    const newtodos = todos.filter((_,i) => i !== index);
    setTodos(newtodos);
  }
   return (
     <div>
       <input type="text" onChange={HandleChange} value={input} placeholder='Enter items'/>

       <button onClick={AddInput}>Add</button>

       <ul style={{listStyle : "none" ,marginTop: "20px",gap :"5"}}>{todos.map((todo,index) => (
        <li key={index} style={{marginTop : "10px"}}>
          {todo}

        <button onClick={() => DeleteInput(index)}>Delete</button>
        </li>
      
       ))}
        
       </ul>
     </div>
   )
 }
 
 export default TodoList
 