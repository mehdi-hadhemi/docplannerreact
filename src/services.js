import React from 'react';
import Box from './Box';
const Services= (props)=> {
    return(<div className="two-boxes">
       {props.Boxs.map(el => <Box content={el} /> )}
            
    </div>
    
    )
    }
    export default Services;