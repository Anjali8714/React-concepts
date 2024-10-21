import React from "react";
import PropDrillingD from "./PropDrillingD";
const PropDrillingC = (props) => {
    return (
        <div className="box"> 
            <h1>PropDrillingC</h1>
            <PropDrillingD user ={props.user}/>
        </div>
    )
}

export default PropDrillingC