import React from "react";
import "./Navbar.css";
import onClick from "../animation";

function ButtonContainer() {
  return (
    <div className="foo-div gfs-didot-regular">
      <div className="button-container d-none d-lg-grid">
        <a href="/#" className="click-button">
          Home
        </a>
        <a href="/executives" className="click-button">
          Executives
        </a>
        <div className="dropdown-div">
          <a href="/#">What is Beta?</a>
          <ul>
            <li>
              <a href="/whyrush">Our Values</a>
            </li>
            <hr />
            <li>
              <a href="/sports">Sports</a>
            </li>
            <hr />
            <li>
              <a href="/athletes">Athletes</a>
            </li>
            <hr />
          </ul>
        </div>
        <img
          src="https://upload.wikimedia.org/wikipedia/en/6/68/Beta_Theta_Pi_Coat_of_Arms.png"
          alt=""
        />
        <div className="dropdown-div">
          <a href="/#">Social Media</a>
          <ul>
            <li>
              <a href="https://www.instagram.com/betaubc/?hl=en">Instagram</a>
            </li>
            <hr />
            <li>
              <a href="https://www.facebook.com/betathetapi">Facebook</a>
            </li>
            <hr />
          </ul>
        </div>
        <a href="/dtp" className="click-button">
          Philanthrophy
        </a>
        <a href="/rush" className="click-button">
          Recruitment
        </a>
      </div>
      {/* TOp Nav Menu */}
      <div className="topnav d-lg-none fixed-top">
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        ></link>
        <a href="/#" className="active">
          BETA UBC
        </a>
        {/* <!-- Navigation links (hidden by default) --> */}
        <div id="myLinks" className="align-links">
          <a href="/">Home</a>
          <a href="/executives">Executives</a>
          <a href="/whyrush">Values</a>
          <a href="/rush">Rush</a>
          <a href="/dtp">Philanthrophy</a>
          <a href="/sports">Sports</a>
          <a href="/athletes">Athletes</a>
          <a href="https://www.instagram.com/betaubc/?hl=en">Instagram</a>
        </div>
        {/* <!-- "Hamburger menu" / "Bar icon" to toggle the navigation links --> */}
        <a href="#/" className="icon" onClick={onClick}>
          <i className="fa fa-bars"></i>
        </a>
      </div>
    </div>
  );
}

export default ButtonContainer;
