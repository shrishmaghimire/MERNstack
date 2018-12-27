import React from 'react';
import ReactDOM from 'react-dom';
import './class_component/index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Loginpage from './class_component/loginpage';

ReactDOM.render(<Loginpage/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
