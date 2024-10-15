import React from "react";

class Forms extends React.Component {

state = {
    inputvalue : ""
}

    onHandleChange = (event) => {

this.setState ({
    inputvalue : event.target.value
})

    }

    inputsubmit = () => {
        
console.log(this.state.inputvalue);

        
    }

    render () {
        return (
        <div>
            <h1>Form Component</h1>
            <input type="text" value={this.state.inputvalue} onChange={this.onHandleChange}/>
            <button type="button" onClick={this.inputsubmit}>Submit</button>
        </div>
        )
    }
}

export default Forms