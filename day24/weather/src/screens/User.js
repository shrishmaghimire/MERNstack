import React, { Component } from 'react';


export default class User extends Component {
    state={
        users : [],
    };
    showDetails = (id) =>{
        const newArr=[...this.state.users];
        const currentUser = newArr.find(user =>user.id === id);
        this.props.history.push('/details',currentUser)
    }
   async componentDidMount(){
         await fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(data => this.setState({
            users:data
        }));
    }
  render() {
    return (
      <div className="users">
          {this.state.users.map(user=><Userlist user={user} showDetails={this.showDetails}/>)}
        
      </div>
    )
  }
}

const Userlist =(props) =>(
    <div className="userlist" onClick={()=>props.showDetails(props.user.id)}> 
        <div>{props.user.name}</div>
        <div>@{props.user.username}</div>
    </div>
)
