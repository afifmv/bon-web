import React from "react";
import WhyRushInfo from "../WhyRush/WhyRushInfo";
import "./Sports.css";

function SportsDisplay2(props) {
  return (
    <div className="sports-display">
      <div>
        <h2>{props.sport}</h2>
        <hr />
        <WhyRushInfo text={props.text} />
      </div>
      <img src={props.image} alt="" srcset="" />
    </div>
  );
}

export default SportsDisplay2;
