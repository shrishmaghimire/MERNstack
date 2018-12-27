import React from 'react';
import Itglance from './Itglance'


import logo from './logo.svg';
import './App.css';

class Hello extends React.Component { //class component naame extends  ReactComponennt
  render() { //displays the html code
    return (//returning html on render method
     <div>
       Hello world
       <Itglance/> 
       {/* //include itglance class component */}
       </div>
    );
  }
}

export default Hello; //export default class-name
