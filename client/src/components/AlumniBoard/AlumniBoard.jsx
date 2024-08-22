import "../Executives/Executives.css";
import React, { useEffect, useState } from "react";
import ButtonContainer from "../Navbar/ButtonContainer";
import Executive from "../Executives/Executive";
import axios from "axios";

const apiUrl = process.env.REACT_APP_API_URL;

function AlumniBoard() {
  const [executives, setItems] = useState([]);

  return (
    <div className="executives-bg">
      <ButtonContainer />
      <div className="executives-banner">
        <h1 className="gfs-didot-regular">24/25 Alumni Board</h1>
        <p>
          A integral part of our chapter is dependent on our alumni board. Our
          Alumni Board provides insightful advice into executive roles as well
          as chapter functioning.
        </p>
        <div></div>
      </div>
    </div>
  );
}

export default AlumniBoard;
