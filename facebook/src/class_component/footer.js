import React from 'react';
import Footer1 from '../functional_component/footer1';
import Footer2 from '../functional_component/footer2';
class Footer extends React.Component{
    render(){
    return(
        <div className="footer_wrapper">
            <Footer1/>
            <Footer2/>
            
        </div>
    )
    }
}
export default Footer;