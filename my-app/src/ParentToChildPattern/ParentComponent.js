import React from 'react';
import ChildComponent from './ChildComponent';

class ParentComponent extends React.Component {

    
    render(){
        return (
            <div>
                <ChildComponent name="test"/>
            </div>
        )
    }
}

export default ParentComponent;