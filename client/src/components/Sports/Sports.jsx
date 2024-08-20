import ButtonContainer from "../Navbar/ButtonContainer";
import "./Sports.css";
import WhyRushInfo from "../WhyRush/WhyRushInfo";
import WhyRushBox from "../WhyRush/WhyRushBox";
import SportsDisplay1 from "./SportsDisplayOption1";
import SportsDisplay2 from "./SportsDisplayOption2";
import axios from "axios";
import React, { useEffect, useState } from "react";

const text1 =
  "At Beta Theta Pi, we understand the importance that Sports play in our lives and have ensured that our fraternity remains the most Athletic fraternity on campus. Our achievements range from participation and domination in all intramural sports, maintaining our position as UBC's #1 intramural Hockey Team as well as  home to professional athletes. ";

function Sports() {
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

  const storm = information.find((info) => info.name === "Storm Info");
  const stormImage = information.find((info) => info.name === "Storm Image");

  const bestHockey = information.find(
    (info) => info.name === "BestHockey Info"
  );
  const bestHockeyImage = information.find(
    (info) => info.name === "BestHockey Image"
  );

  const flag = information.find((info) => info.name === "flag info");
  const flagImage = information.find((info) => info.name === "flag Image");

  return (
    <div className="sports-banner">
      <div className="img-banner"></div>
      <ButtonContainer />
      <h1>The Athletic Fraternity</h1>
      <hr />
      <div>
        <WhyRushInfo text={text1} />
        {bestHockey ? (
          <SportsDisplay1
            sport="Hockey"
            text={bestHockey.information}
            image={bestHockeyImage.information}
          />
        ) : (
          <SportsDisplay1
            sport="Hockey"
            text="Kindly Refresh The Page"
            image="#"
          />
        )}
        <hr />
        {storm ? (
          <SportsDisplay2
            sport="Storm the Wall"
            text={storm.information}
            image={stormImage.information}
          />
        ) : (
          <SportsDisplay2
            sport="Storm the Wall"
            text="Kindly Refresh The Page"
            image="#"
          />
        )}
        <hr />
        {flag ? (
          <SportsDisplay1
            sport="Flag Football"
            text={flag.information}
            image={flagImage.information}
          />
        ) : (
          <SportsDisplay1
            sport="Flag Football"
            text="Kindly Refresh The Page"
            image="#"
          />
        )}
      </div>
    </div>
  );
}

export default Sports;
