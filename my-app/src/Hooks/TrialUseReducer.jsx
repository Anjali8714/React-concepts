import React, { useReducer } from 'react';
import TrialReducer from '../Reducer/TrialReducer';

const initialState = {
    value : 0,
    color: 'white'
};

const TrialUseReducer = () => {
    const [state, dispatch] = useReducer(TrialReducer,initialState );

    const increment = () => {
        dispatch({
            type : 'change-value',
            payload : 1
        }); 
    };

    const decrement = () => {
        dispatch({
            type : 'change-value',
            payload : -1
        }); 
    };

    const purple = () => {
        dispatch({
            type : 'change-color',
            payload : 'purple'
        });  
    };

    const blue = () => {
        dispatch({
            type : 'change-color',
            payload : 'blue'
        });  
    };

    return (
        <div>
            <button onClick={increment}>Increment</button>

            <h1   style={{ background: state.color, width: "50px", height: "50px", margin : '10px'}}>{state.value}</h1>

            <button onClick={decrement}>Decrement</button>

            <button onClick={purple}>Purple</button>

            <button onClick={blue} >Blue</button>
        </div>
    );
};

export default TrialUseReducer;
