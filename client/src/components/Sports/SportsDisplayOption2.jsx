import React from "react";
import WhyRushInfo from "../WhyRush/WhyRushInfo";
import "./Sports.css";

const text1 =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti placeat totam blanditiis odio pariatur mollitia voluptate voluptatum molestiae! Placeat praesentium veritatis quis enim magni, earum porro suscipit ipsa blanditiis et. Explicabo laborum blanditiis magnam veritatis quia quae et adipisci quibusdam.";

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
