import React from "react";
import "./Navbar.css";
import onClick from "../animation";

function ButtonContainer() {
  return (
    <div className="foo-div">
      <div className="button-container d-none d-lg-grid">
        <a href="/" className="click-button">
          Home
        </a>
        <a href="/executives" className="click-button">
          Executives
        </a>
        <div className="dropdown-div">
          <a href="#">What is Beta?</a>
          <ul>
            <li>
              <a href="/sports">Sports</a>
            </li>
            <hr />
            {/* <li>
              <a href="/alumni">Alumni Board</a>
            </li> */}
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
          <a href="/whyrush">Why Beta?</a>
          <ul>
            <li>
              <a href="/whyrush">Values</a>
            </li>
            <hr />
            <li>
              <a href="/testimonials">Testimonials</a>
            </li>
            <hr />
            <li>
              <a href="https://www.beta.org/">BETA HQ</a>
            </li>
            <hr />
          </ul>
        </div>
        <a href="/dtp" className="click-button">
          Philanthrophy
        </a>
        <div className="dropdown-div">
          <a href="#">Recruitment</a>
          <ul>
            <li>
              <a href="/rush">Rush</a>
            </li>
            <hr />
            <li>
              <a href="https://www.instagram.com/betaubc/?hl=en">Instagram</a>
            </li>
            <hr />
            <hr />
          </ul>
        </div>
      </div>
      {/* TOp Nav Menu */}
      <div className="topnav d-lg-none fixed-top">
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        ></link>
        <a href="/" className="active">
          BETA UBC
        </a>
        {/* <!-- Navigation links (hidden by default) --> */}
        <div id="myLinks">
          <a href="/">Home</a>
          <a href="/executives">Executives</a>
          <a href="/whyrush">Values</a>
          <a href="/testimonials">Testimonials</a>
          <a href="/rush">Rush</a>
          <a href="/dtp">Philanthrophy</a>
          <a href="/sports">Sports</a>
        </div>
        {/* <!-- "Hamburger menu" / "Bar icon" to toggle the navigation links --> */}
        <a href="javascript:void(0);" className="icon" onClick={onClick}>
          <i className="fa fa-bars"></i>
        </a>
      </div>
    </div>
  );
}

export default ButtonContainer;
