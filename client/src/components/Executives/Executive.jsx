import React from "react";

function Executive(props) {
  return (
    <div className="executive">
      <img src={props.exec.imageLink} alt="" />
      <h2 className="gfs-didot-regular">{props.exec.name}</h2>
      <h3 className="gfs-didot-regular">{props.exec.role}</h3>
      <h5>Faculty of {props.exec.faculty}</h5>
    </div>
  );
}

export default Executive;
