import React from 'react';
import Headline from './headline';
import News from './news.js';
class Section extends React.Component{
    render(){
        return(
            
                <div>
                    <Headline/>
                    <News/>
                </div>
            
        );
    }
}
export default Section;