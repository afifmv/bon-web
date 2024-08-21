import ButtonContainer from "../Navbar/ButtonContainer";
import "./Sports.css";
import WhyRushInfo from "../WhyRush/WhyRushInfo";
import WhyRushBox from "../WhyRush/WhyRushBox";
import SportsDisplay1 from "./SportsDisplayOption1";
import SportsDisplay2 from "./SportsDisplayOption2";
import axios from "axios";
import React, { useEffect, useState } from "react";

const apiUrl = process.env.REACT_APP_API_URL;
console.log(apiUrl);
const text1 =
  "At Beta Theta Pi, we understand the importance that Sports play in our lives and have ensured that our fraternity remains the most Athletic fraternity on campus. Our achievements range from participation and domination in all intramural sports, maintaining our position as UBC's #1 intramural Hockey Team as well as  home to professional athletes. ";

function Sports() {
  const [sports, setSports] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${apiUrl}/api/sports`);
        setSports(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="sports-banner">
      <div className="img-banner"></div>
      <ButtonContainer />
      <h1>The Athletic Fraternity</h1>
      <hr />
      <div>
        <WhyRushInfo text={text1} />
        {sports.map((sport, index) =>
          index % 2 ? (
            <SportsDisplay1
              sport={sport.name}
              text={sport.information}
              image={sport.image}
            />
          ) : (
            <SportsDisplay2
              sport={sport.name}
              text={sport.information}
              image={sport.image}
            />
          )
        )}
      </div>
    </div>
  );
}

export default Sports;
