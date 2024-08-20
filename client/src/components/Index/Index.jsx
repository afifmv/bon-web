import React, { useEffect, useState } from "react";
import "./Index.css";
import axios from "axios";

function Index() {
  const [information, setInformation] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/information"
        );
        setInformation(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const presidentSpeech = information.find(
    (info) => info.name === "President's Welcome Speech"
  );

  return (
    <div className="index-banner">
      <img src="https://i.postimg.cc/htbybssf/brendanC.png" alt="Brendan" />
      <div className="president-details">
        <h2>Brendan Cooper - President</h2>
        <pre className="gfs-didot-regular">
          {presidentSpeech ? presidentSpeech.information : "Loading..."}
        </pre>
      </div>
    </div>
  );
}

export default Index;
