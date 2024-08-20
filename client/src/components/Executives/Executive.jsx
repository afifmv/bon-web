import React from "react";
import ButtonContainer from "../Navbar/ButtonContainer";

function Executive(props) {
  return (
    <div className="executive">
      <img src={props.exec.imageLink} alt="" />
      <h2>{props.exec.name}</h2>
      <h3>{props.exec.role}</h3>
      <h5>Faculty of {props.exec.faculty}</h5>
    </div>
  );
}

export default Executive;
