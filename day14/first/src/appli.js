import React from 'react';
import Header from './header';
import Section from './section';
import Footer from  './footer.js';
class Appli extends React.Component{
    render(){
        return(
            <div>
                <Header/>
                <Section/>
                <Footer/>

            </div>
        );

    }
    
}export default Appli;