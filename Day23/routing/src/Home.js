

import React, { Component } from 'react'

export default class Home extends Component {
  navigate =() => {
    this.props.history.push('/about');//about?search={$id}
  }
  render() {
      // console.log(this.props);
    return (
      <div className="home">
        <button onClick={this.navigate}>
        
        </button>
      </div>
    )
  }
}
