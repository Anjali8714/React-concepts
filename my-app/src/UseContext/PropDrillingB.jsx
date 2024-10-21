import React from "react";
import PropDrillingC from "./PropDrillingC";


const PropDrillingB = (props) => {
    return (
        <div className="box"> 
            <h1>PropDrillingB</h1>
            <PropDrillingC user={props.user}/>
        </div>
    )
}

export default PropDrillingB