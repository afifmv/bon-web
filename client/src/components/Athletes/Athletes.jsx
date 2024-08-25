import ButtonContainer from "../Navbar/ButtonContainer";
import WhyRushInfo from "../WhyRush/WhyRushInfo";
import axios from "axios";
import React, { useEffect, useState } from "react";
import SportsDisplay1 from "../Sports/SportsDisplayOption1";
import SportsDisplay2 from "../Sports/SportsDisplayOption2";
import "./Athletes.css";

const text1 =
  "Our fraternity is home to professional athletes. Here at Beta Theta Pi, we motivate our brothers to push beyond their capabailities and reach the highest the world has to offer. As a result, Athletes at Beta Theta Pi go on to represent their teams on a global level. ";

const apiUrl = process.env.REACT_APP_API_URL;

function Athletes() {
  const [athletes, setInformation] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${apiUrl}/api/athletes`);
        setInformation(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="sports-banner">
      <div className="athletes-banner"></div>
      <ButtonContainer />
      <h1>Notable Athletes Of Gamma Omicron</h1>
      <hr />
      <div>
        <WhyRushInfo text={text1} />
        {athletes.map((athlete, index) =>
          index % 2 ? (
            <SportsDisplay1
              sport={athlete.name}
              text={athlete.information}
              image={athlete.image}
            />
          ) : (
            <SportsDisplay2
              sport={athlete.name}
              text={athlete.information}
              image={athlete.image}
            />
          )
        )}
        <hr />
      </div>
    </div>
  );
}

export default Athletes;
