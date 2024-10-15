import React, {useState} from "react"
import './Counter.css'

const Counter = () => {
 const [count,setcount] = useState(0);
 const [color,setcolor] = useState('purple');

const increment = () => {
    setcount (count + 1)
}

const Decrement = () => {
    setcount (count - 1)
}

const reset = () => {

    setcount (0)             
}

const toggle = () => {
    
    setcolor (p => p === "purple"? "green" : "purple") 
}

return (
    <div className="counter-container" style ={{background : color}}>
                <p className="counter-display">{count}</p>
                <button className="counter-button" onClick={increment}>Increment</button>
                <button className="counter-button" onClick={Decrement}>Decrement</button>
                <button className="counter-button" onClick={reset}>Reset</button>
                <button onClick={toggle}>change</button>
                

    </div>
);
}

export default Counter