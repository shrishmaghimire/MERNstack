import React from 'react';
import Address from './add';
import Contact from './contact'
class Footer extends React.Component{
    render(){
        return(
                <div>
                    <Address/>
                    <Contact/>
                </div>
           );
    }
}
export default Footer;