import ButtonContainer from "../Navbar/ButtonContainer";
import WhyRushInfo from "../WhyRush/WhyRushInfo";
import WhyRushBox from "../WhyRush/WhyRushBox";
import axios from "axios";
import React, { useEffect, useState } from "react";
import SportsDisplay1 from "../Sports/SportsDisplayOption1";
import SportsDisplay2 from "../Sports/SportsDisplayOption2";
import "./Athletes.css";

const text1 =
  "Our fraternity is home to professional athletes. Here at Beta Theta Pi, we motivate our brothers to push beyond their capabailities and reach the highest the world has to offer. As a result, Athletes at Beta Theta Pi go on to represent their teams on a global level. ";

function Athletes() {
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

  const carsonMiller = information.find((info) => info.name === "Carson Info");
  const carsonMillerImage = information.find(
    (info) => info.name === "Carson Image"
  );

  const lucasRobertson = information.find((info) => info.name === "Lucas Info");
  const lucasRobertsonImage = information.find(
    (info) => info.name === "Lucas Image"
  );

  return (
    <div className="sports-banner">
      <div className="athletes-banner"></div>
      <ButtonContainer />
      <h1>Notable Athletes Of Gamma Omicron</h1>
      <hr />
      <div>
        <WhyRushInfo text={text1} />
        {carsonMiller ? (
          <SportsDisplay1
            sport="Carson Miller"
            text={carsonMiller.information}
            image={carsonMillerImage.information}
          />
        ) : (
          <SportsDisplay1
            sport="Carson Miller"
            text="Kindly Refresh The Page"
            image="#"
          />
        )}

        <hr />
        {carsonMiller ? (
          <SportsDisplay2
            sport="Lucas Robertson"
            text={lucasRobertson.information}
            image={lucasRobertsonImage.information}
          />
        ) : (
          <SportsDisplay2
            sport="Lucas Robertson"
            text="Kindly Refresh The Page"
            image="#"
          />
        )}
        <hr />
      </div>
    </div>
  );
}

export default Athletes;
