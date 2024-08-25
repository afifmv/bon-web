import React, { useEffect, useState } from "react";
import "./Index.css";
import axios from "axios";

const apiUrl = process.env.REACT_APP_API_URL;

function Index() {
  const [information, setInformation] = useState([]);

  useEffect(() => {
    let isMounted = true;
    const fetchData = async () => {
      try {
        const response = await axios.get(`${apiUrl}/api/information`);
        if (isMounted) {
          setInformation(response.data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();

    return () => {
      isMounted = false; // Cleanup on unmount
    };
  }, []);

  const presidentSpeech = information.find(
    (info) => info.name === "President's Welcome Speech"
  );

  return (
    <div className="index-banner">
      <img src="https://i.postimg.cc/htbybssf/brendanC.png" alt="Brendan" />
      <div className="president-details gfs-didot-regular">
        <h2>Brendan Cooper - President</h2>
        <pre className="gfs-didot-regular">
          {presidentSpeech ? presidentSpeech.information : "Loading..."}
        </pre>
      </div>
    </div>
  );
}

export default Index;
