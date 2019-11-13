import React from "react";

const Box = props => {
  return (
    <div className={props.content.class ? "Box green-box" : "Box blue-box"}>
      <p className="patient"> {props.content.person} </p>
      <h1 className="tittre">{props.content.acts}</h1>
      <div className="picandbut">
      {props.content.country && (
        <select name="CHOOSE A COUNTRY" id="Country-Picker">
          <option value="valeur1" selected>
            CHOOSE A COUNTRY
          </option>
          <option value="valeur1">TUNISIE</option>
          <option value="valeur2">FRANCE</option>
          <option value="valeur3">CANADA</option>
        </select>
      )}
      <img className="img" alt="" src={props.content.image} />
    </div>
    </div>
  );
};

export default Box;
