import React,{useState,useEffect} from "react";
 function Myheader(){
    const [count, setcount] = useState(0);
    const Increment =() => {
        setcount(count + 1)
    }
    
    useEffect(() => {
        document.title =`${count} value is increased`
    },[])
    return(
        <div>
            <h1>{count} value is increased</h1>
            <button onClick={Increment}>increment</button>
        </div>
    );
 }

 export default Myheader