import React from "react";
import "./WhyRush.css";
import WhyRushInfo from "./WhyRushInfo";
import WhyRushMission from "./WhyRushMission";
import VideoPlayer from "./VideoPlayer";
import ButtonContainer from "../Navbar/ButtonContainer";

const text1 =
  "Overall, Beta Theta Pi holds one of the most impressive alumni of any fraternity. The Beta tradition has produced some of North America’s most outstanding men. The rolls of Beta Theta Pi include more than 80 Rhode scholars, 197 members of the United States Congress, 23 state governors, six Congressional Medal of Honour winners and 11 current CEOs of Fortune 500 companies.";

const text2 =
  "Beta Theta Pi is one of the top fraternities on campus, excelling in academics, sports, philanthropy, and campus involvement. Founded in 1936, our fraternity is the only one on campus that owns its own house and land. We have won the IFC Sports Trophy 37 times in the last 50 years, and we have produced the most Rhodes scholars (eight) of any Beta chapter worldwide. Our chapter has also had two of our members serve the role of Interfraternity Council President two years in a row, along with many other members holding other important positions on the Interfraternity Council. With a membership roll of over 2000 members and a strong alumni association, Beta Theta Pi holds a strong presence in the Vancouver business community.";

function WhyRush() {
  return (
    <div className="why-rush-banner">
      <ButtonContainer />
      <div className="banner-img">
        <img
          src="https://www.beta.org/wp-content/uploads/2022/05/Housing-Hero-Image.jpg"
          alt=""
        />
      </div>
      <hr />
      <div className="why-rush-info">
        <WhyRushInfo text={text1} />
        <WhyRushInfo text={text2} />
      </div>
      <hr />
      <WhyRushMission />
      <hr />
      <div className="video-player">
        <VideoPlayer />
      </div>
    </div>
  );
}

export default WhyRush;
