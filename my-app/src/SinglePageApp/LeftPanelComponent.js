import React from 'react';
import HelloWorldComponent from './HelloWorld/HelloWorldComponent';
import JSXComponent from './jsx/JSXComponent';
import RenderComponent from './rc/RenderComponent';

class LeftComponent extends React.Component {

    constructor(props) {
        super(props);
        this.renderContent = "";
    }

    render(){
        if(this.props.linkName == "HELLOWORLD"){
            this.renderContent = <HelloWorldComponent/>
        } else if (this.props.linkName == "JSX") {
            this.renderContent = <JSXComponent/>
        } else if (this.props.linkName == "RENDERING") {
            this.renderContent =  <RenderComponent/>
        }
        return (
            <div style={{'border':'1px solid black', 'width' : '78%', 'display': 'inline-block'}}>
                {this.props.linkName}
            </div>
        )
    }
}

export default LeftComponent;