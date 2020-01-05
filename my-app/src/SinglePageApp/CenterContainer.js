import React from 'react';
import LeftPanelComponent from './LeftPanelComponent';
import RightMenuComponent from './RightMenuComponent';

class CenterContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            inputName : ''
        };
    }

    handleClick = (inputClickName) => {
        alert(inputClickName);
        this.setState({
            inputName : inputClickName
        });
    }

    render(){
        return (
            <div>
            <LeftPanelComponent linkName={this.state.inputName}/>
            <RightMenuComponent name="sravi" callUserDefinedFn={this.handleClick}/>
            </div>
        )
    }
}

export default CenterContainer;