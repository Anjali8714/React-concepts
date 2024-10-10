import React, {useState} from "react";

const Mycomponent =() => {
    const  [name,setname]=useState();
    const [age,setAge] = useState(0);
    const [isEmployed,setEmployed] = useState();
    const updateName = () =>{
        setname("Anjali");
    }
    const IncrementAge = () => {
        setAge(age+1);
    }
    const ToggleIsEmployed = () => {
        setEmployed(!isEmployed);
    }
    
    return (<div>
        <p>Name: {name}</p>
        <button onClick={updateName}>Set Name</button>

        <p>Age : {age}</p>
        <button onClick={IncrementAge}>Increment Age</button>

        <p>IsEmployed : {isEmployed?"yes":"No"}</p>
        <button onClick={ToggleIsEmployed}>Set Employed</button>
    </div>)
}

export default Mycomponent