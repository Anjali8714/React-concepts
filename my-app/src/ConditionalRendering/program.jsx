import React from "react";
import './program.css'
function Program(props){
    return (props.LoggedIn)?<h1 className="Welcome-message">Welcome , {props.username}</h1>:
                            <h2 className="Error-login-message">Please log in to continue</h2>
}

export default Program