import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';

class Details extends Component {
    state={
     user:[],
     posts:{}

    }
    async componentDidMount(){
        if(this.props.location.state){
            this.setState({user:this.props.location.state})
        }
            else{
                this.property.history.replace('/')
            }
            loadPosts = (id)=>{
                fetch(`https.//jsonplaceholder.typicode.posts?userId=%$
                {id}`).then(res=>res.json()).then(posts=>this.setState({posts}))
                }
                    
    }
  render() {
    return (
      <div className="userdetails">
            <div>Name: {this.state.user.name}</div>
            <div>Username: {this.state.user.username}</div>
            <div>email: {this.state.user.email}</div>
            <div>Street: {`${state.address.city},${state.address.street}`}</div>
            <div>Website:<a href ={`http://www.${state.website}`}>Website</a></div>
<hr/>
            <div className= 'posts'>
            <h3>Posts</h3>
                      {this.state.posts.map(post=>(<Post post ={post}/>))}  
                </div>
      </div>
    )
  }
}

export default withRouter(Details);
