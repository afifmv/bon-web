import React from "react";
import WhyRushInfo from "../WhyRush/WhyRushInfo";
import "./Testimonials.css";

function Testimonial(props) {
  return (
    <div className="testimonial-display">
      <img src={props.image} alt="" srcset="" />
      <div>
        <h2>{props.sport}</h2>
        <h5>{props.job}</h5>
        <hr />
        <WhyRushInfo text={props.text} />
      </div>
    </div>
  );
}

export default Testimonial;
