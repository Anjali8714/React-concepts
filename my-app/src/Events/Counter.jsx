import React from "react";

class Counter extends React.Component {
state = {
    count : 0
}
OnIncrement = () => {
    this.setState ( {
        count : this.state.count + 1
    })
}

OnDecrement = () => {
    this.setState ( {
        count : this.state.count - 1
    })
}

    render () {
        return (
            <div>
                <h1>Counter Component</h1>
                <h2>{this.state.count}</h2>
                <button onClick={this.OnIncrement}>+</button>
                <button onClick={this.OnDecrement}>-</button>
            </div>
        )
    }
}

export default Counter