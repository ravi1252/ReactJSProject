import React from 'react';

class ChildComponent extends React.Component {
    render(){
        return (
            <div>
                Child component
                <br/> data from parent : {this.props.name}
                <button> Notify Parent </button>
            </div>
        )
    }
}

export default ChildComponent;