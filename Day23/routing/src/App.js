import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import Navbar from './components/navbar';
import Error from './Error';

import './App.css';
import Contact from './Contact';
import About from './About';
import Home from './Home';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        <Switch>
        <Route path='/' exact={true} component ={Home}/>
        <Route path='/about' component ={About}/>
        <Route path='/contact' component ={Contact}/>
        <Route component ={Error}/>
        </Switch>

        
      </div>
    );
  }
}

export default App;
