import React from 'react';
import Logo from './Grey lol.png';
const Sponsors = (props)=>{
    return(
         <div className='Global-Companies'>
            <p className='texto'>we are a global <br/>company <br/> with local culture</p>
            <div className='sponsor'>
                {props.spons.map(el=>
                    <div className='single'>
                        <img  className='star' alt=''  src={Logo}/>
                        <p className='spnsorname'>{el}</p>
                    </div>)}
                </div>
            
    </div>
               )
            }
export default Sponsors;