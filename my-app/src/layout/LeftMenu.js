import React from 'react';

class LeftMenu extends React.Component {

    constructor(props) {
        super(props);
    
        // This binding is necessary to make `this` work in the callback
        // this.handleClick = this.props.handleClick.bind(this);
    }

    render(){
        return (
            <div style={{border:'1px solid black', width:'20%'}}>
                <button onClick={this.props.handleClick.bind(this, 'LINK1')}>
                    {this.props.LINK1}
                </button>
            </div>
        )
    }
}

export default LeftMenu;