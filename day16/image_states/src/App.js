import React from 'react';
import img1 from './images/right.png';
import img2 from './images/wha.png';
import './index.css';


class Images extends React.Component{
  constructor(){
    super();
    this.changeImage=this.changeImage.bind(this);
  }
  state={
    imgshow:img1,
    flag:0
  }
  changeImage(){
    if(this.state.flag){
        this.setState({
          
          imgshow:img1,
          flag:!this.state.flag
        })
      }else{
        this.setState({
          
          imgshow:img2,
           flag:!this.state.flag
        })
      }
    }

  render(){
    return(
      <div className="container">
        <img src ={this.state.imgshow}/> <br/>
        <button onClick={this.changeImage} className="button">Change motion</button>
            </div>
      
    )
  }

}
export default Images;