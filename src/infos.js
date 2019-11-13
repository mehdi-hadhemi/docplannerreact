import React from "react";
import Back from "./BackgroundCover.png";
import Cadre from "./Cadre";

function Infos(props) {
  return (
    <div className="Giant-Green-Box">
        <div className="container">

      <div className="text-star">
        <p className="Green-Text">
          The world's <br /> biggest healthcare platform
        </p>
        <p className="Grey-Text">
          We work from 6 offices all over the world, bringing Docplanner <br />{" "}
          Group to life in almost 20 countries
        </p>
        <img src={Back} width="500px" height="500px" id="Giant-Logo" />
      </div>
      <div className="white-box">
        {props.advg.map(el => (
            <Cadre flag={el} />
            ))}
      </div>
    </div>
    </div>
  );
}
export default Infos;
