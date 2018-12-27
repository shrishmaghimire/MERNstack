import React from 'react';
import Header from './header';
import Content from './content';
import Footer from './footer';
import "./index.css";
class Loginpage extends React.Component{
    render(){
        return(
                <div className='container'>
                <Header/>
                <Content/>
                <Footer/>
                </div>
        )

    }
    
}
export default Loginpage;