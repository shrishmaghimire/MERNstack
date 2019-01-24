import React, { Component } from 'react';

import './App.css';
import {Switch,Route} from 'react-router-dom';
import User from './screens/User';
import Details from './screens/Details';

class App extends Component {
  render() {
    return (
      <div className="App">
         <Switch>
          <Route path ="/" exact component ={User}/>
          <Route path ="/details" exact component ={Details}/>
      </Switch>
      </div>
    );
  }
}

export default App;
