import React, { useState,useReducer } from "react";

function valueReducer(state,action) {
   if(action==='increment'){
    return state + 1
   }else {
    return state - 1
   }
}

function UseReducer(){

// const [count,setCount] = useState(0)
const [value,dispatch] = useReducer(valueReducer,0)
const [color,setColor] = useState('white')

const increment = () => {
    // setCount(
    //     count+1
    // )
    dispatch('increment');
}

const decrement = () => {
    // setCount(
    //     count-1
    // )
    dispatch('decrement');
}

const purple = () => {
    setColor(
        'purple'
    )
}

const blue = () => {
    setColor(
        'blue'
    )
}

    return (
        <div>
            <button onClick={increment}>Increment</button>
            <h1 style={{background :color , width :"25px"}}>{value}</h1>
            <button onClick={decrement}>Decrement</button>
            <button onClick={purple} >purple</button>
            <button onClick={blue} >Blue</button>
        </div>
    )
}

export default UseReducer