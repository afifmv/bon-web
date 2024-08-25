import "./Executives.css";
import React, { useEffect, useState } from "react";
import ButtonContainer from "../Navbar/ButtonContainer";
import Executive from "./Executive";
import axios from "axios";

const apiUrl = process.env.REACT_APP_API_URL;

function Executives() {
  const [executives, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${apiUrl}/api/executive`);
        setItems(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="executives-bg">
      <ButtonContainer />
      <div className="executives-banner">
        <h1 className="gfs-didot-regular">24/25 Upper Executives</h1>
        <p>
          Each year an executive committee is elected to oversee important
          chapter proceedings. Executive roles are an excellent way to give back
          to the community and to learn necessary skills for post-graduate
          endeavours.
        </p>
        <div>
          {executives.map((exec) =>
            !exec.officer ? (
              <div>
                <Executive exec={exec} />
              </div>
            ) : null
          )}
        </div>

        <hr />
        <div className="officers-banner">
          <h1 className="gfs-didot-regular">24/25 Officers</h1>
          {executives.map((exec) =>
            exec.officer ? <Executive exec={exec} /> : null
          )}
        </div>
      </div>
    </div>
  );
}

export default Executives;
