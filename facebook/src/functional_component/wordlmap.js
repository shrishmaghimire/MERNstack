import React from 'react';
import '../class_component/index.css'
import Facebook from '../images/facebookmap.png';
const WorldMap=()=>{
    return(
        <div className="div1">
            <p>Connect with the friends and the <br/> World aroud you with Facebook</p>
            <img src={Facebook} alt="Facebook" className="worldmap"/>
        </div>

    )
}
export default WorldMap;