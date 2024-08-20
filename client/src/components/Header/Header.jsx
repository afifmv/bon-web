import React from "react";
import "./Header.css";
import HeaderLink from "./HeaderLink";
import ButtonContainer from "../Navbar/ButtonContainer";
import Navbar from "../Navbar/Navbar";

function Header() {
  console.log("Header is rendered!");
  return (
    <div>
      <Navbar />
      <div className="home-banner"></div>
      <div className="home-name">
        <h1 className="gfs-didot-regular ">BETA THETA PI</h1>
        <p className="gfs-didot-regular ">
          Beta Theta Pi is dedicated to building men of principle for a
          principled life. Our brotherhood aids the individual, builds the
          fraternity and strengthens the host academic institution through
          lifelong devotion to intellectual excellence, high standards of moral
          conduct, and responsible citizenship.
        </p>
        <hr />
      </div>
    </div>
  );
}

export default Header;
