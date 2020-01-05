import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import CompletePanel from './layout/CompletePanel';
import DOMLayout from './SinglePageApp/DOMLayout';
import * as serviceWorker from './serviceWorker';
import ParentComponent from './ParentToChildPattern/ParentComponent';


ReactDOM.render(<DOMLayout />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
