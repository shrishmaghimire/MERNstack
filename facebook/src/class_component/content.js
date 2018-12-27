import React from 'react';
import Form from '../functional_component/form';
import WorldMap from '../functional_component/wordlmap';
class Content extends React.Component{
    render(){
        return(
            <div>
                <Form/>
                <WorldMap/>
            </div>
        )
    }
}
export default Content;