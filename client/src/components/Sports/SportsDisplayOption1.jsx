import React from "react";
import WhyRushInfo from "../WhyRush/WhyRushInfo";
import "./Sports.css";

function SportsDisplay1(props) {
  return (
    <div className="sports-display">
      <img src={props.image} alt="" srcset="" />
      <div>
        <h2>{props.sport}</h2>
        <hr />
        <WhyRushInfo text={props.text} />
      </div>
    </div>
  );
}

export default SportsDisplay1;
