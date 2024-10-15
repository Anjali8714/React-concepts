import React from 'react'

class ClassComponent extends React.Component{

    state = {
        mystring : 'Hello'
    }

    render (){
        return (
            <div>
                <h1>Welcome 1</h1>
                <h2>{this.state.mystring}</h2>
            </div>
        )
    }
}
export default ClassComponent

