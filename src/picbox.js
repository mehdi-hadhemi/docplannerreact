import React from 'react';
 const  Picbox=(props)=>{
     return (<div className='dest'>
        <img  alt='' src={props.destination.pic}/>
        <div className='pied'>
        <p className='mytext' >{props.destination.txt}</p>
        <button className='boutton'>{props.destination.boutton}</button>
        </div>
        </div>

     )
 }
 export default Picbox;