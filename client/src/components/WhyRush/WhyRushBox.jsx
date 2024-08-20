import React from "react";

function WhyRushBox(props) {
  return (
    <div className="why-rush-box">
      <h2>{props.mission.name}</h2>
      <p>{props.mission.info}</p>
    </div>
  );
}

export default WhyRushBox;
