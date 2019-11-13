import React from "react";

const Cadre = (props) => {
  return (<div className='one-white-box'>
    <img className="flagz" alt="" src={props.flag.logo}/>
    <h2 className="text">{props.flag.titre}</h2>
    <p className="Grey-Texto">{props.flag.info}</p>
    </div>
  )
}
  export default Cadre;  