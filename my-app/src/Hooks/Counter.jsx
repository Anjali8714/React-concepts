import React, {useState} from "react"
import './counter.css'

const Counter = () => {
 const [count,setcount] = useState(0);

const increment = () => {
    setcount (count + 1)
}

const Decrement = () => {
    setcount (count - 1)
}

const reset = () => {

    setcount (0)             
}

return (
    <div className="counter-container">
                <p className="counter-display">{count}</p>
                <button className="counter-button" onClick={increment}>Increment</button>
                <button className="counter-button" onClick={Decrement}>Decrement</button>
                <button className="counter-button" onClick={reset}>Reset</button>

    </div>
);
}

export default Counter