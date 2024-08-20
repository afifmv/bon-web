import React from "react";
import "./Header.css";

function HeaderLink(props) {
  return (
    <li>
      <a className="header-link" href={props.name}>
        {props.name}
      </a>
    </li>
  );
}

export default HeaderLink;
