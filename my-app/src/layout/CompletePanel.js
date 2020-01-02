import React from 'react';
import LeftMenu from './LeftMenu';
import RightContainer from './RightContainer';

class CompletePanel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            clickReceived : ''
        };
        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
        this.renderComp = '';
    }

    handleClick = (newName) => {
        console.log('Was clicked!' + newName);
        //alert(newName);
        this.setState({
            clickReceived : newName
        });
    }

    render(){
        if (this.state.clickReceived == 'LINK1') {
             this.renderComp =  <RightContainer/>;
        }
        return (
            <div>
                <LeftMenu LINK1="link 1" handleClick={this.handleClick}/>
                {this.renderComp}
                
            </div>
        )
    }
}

export default CompletePanel;