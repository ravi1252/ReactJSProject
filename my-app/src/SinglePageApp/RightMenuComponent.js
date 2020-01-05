import React from 'react';

class RightMenuComponent extends React.Component {

    render(){
        return (
            <div style={{'border':'1px solid black', 'width' : '20%', 'display': 'inline-block'}}>
                <a onClick={this.props.callUserDefinedFn.bind(this, 'HELLOWORLD')}>
                    1 . Hello World Example
                </a>
                <br/>
                <a onClick={this.props.callUserDefinedFn.bind(this, 'JSX')}>
                    2 . Introducing JSX
                </a>
                <br/>
                <a onClick={this.props.callUserDefinedFn.bind(this, 'RENDERING')}>
                    3 . Rendering Elements
                </a>
            </div>
        )
    }
}

export default RightMenuComponent;