import React from 'react';
import HeaderComponent from './HeaderComponent';
import CenterContainer from './CenterContainer';

class DOMLayout extends React.Component {

    
    render(){
        return (
            <div>
                <HeaderComponent/>
                <CenterContainer/>
            </div>
        )
    }
}

export default DOMLayout;