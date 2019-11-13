import React from 'react';
import Picbox from './picbox'


 const Pictures=(props)=>{
     return (<div className=''>
         <div className='Sum-Up'>
 <h3 >Improve the lives of millions.</h3><h3>Change yours forever</h3>
 <p className='team'>More than 1000 team mates share our same vision, goals and passion.<br/> With offices in Warsaw, Barcelona, Istanbul, Rome, Mexico City and <br/>Curitiba, our search for great talent never stops</p>
     </div>
     <div className='onepic'>
       {props.photo.map(el=><Picbox destination={el}/>)}
     </div>
     </div>

     
 )
 }
 export default Pictures;