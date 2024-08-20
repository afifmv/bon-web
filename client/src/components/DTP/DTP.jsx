import React from "react";
import ButtonContainer from "../Navbar/ButtonContainer";
import "./DTP.css";
import WhyRushInfo from "../WhyRush/WhyRushInfo";
import PhotoGrid from "./PhotoGrid";

const text1 =
  "Every year, our chapter holds an annual “Drop The Puck For Mental Health” philanthropic event with all proceeds going towards the Canadian Mental Health Association. The event is done in partnership with another fraternity on campus, Phi Delta Theta and is a friendly ice hockey match between our two fraternities.";

const text2 =
  "Nearly 500 tickets were sold in 2019 and a total of $10,313 was raised. In total, the event has raised in excess of $150,000";

const text3 =
  "The event was also backed by community partners such as Body Energy Club, Yerba Mate, Freshslice Pizza, and Abbies Sports Shop.";

const text4 =
  "On every university campus, including UBC, mental health is a prominent issue. We believed that it was time to bring this issue to light and do our part in ending the stigma surrounding it. We organize this event as a way to come together as a community, raise awareness about mental health resources, and encourage everyone to reach out if they need help.";

const texts = [text1, text2, text3, text4];

function DTP() {
  return (
    <div className="philanthrophy-banner">
      <ButtonContainer />
      <div className="dtp-banner"></div>
      <h1>Drop The Puck For Mental Health</h1>
      <hr />
      {texts.map((text) => (
        <WhyRushInfo text={text} />
      ))}
      <PhotoGrid />
    </div>
  );
}

export default DTP;
