import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Helloworld from './helloworld'
import Homepage from './class_component/Homepage';

class App extends Component {
  render() {
    return (
      <div className="App">
     <Homepage/>
     </div>
    
    );
  }
}

export default App;
