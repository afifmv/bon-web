import React from "react";
import WhyRushBox from "./WhyRushBox";

const lifelongFriendship = {
  name: "Lifelong Friendship",
  info: "Bonded by oath and ritual, Betas form lifelong bonds of trust and friendship, which are the foundation of the Fraternity’s mission. ",
};

const cultivation = {
  name: "Cultivation of the Intellect",
  info: "Beta membership encourages individual and chapter support of the academic mission and provides opportunities for co-curricular learning and personal growth.",
};

const responsible = {
  name: "Responsible Leadership",
  info: "Betas participate in a system of self governance, bound by trust and responsibility, which nurtures the development of social and leadership skills.  ",
};

const socialConduct = {
  name: "Responsible Social Conduct ",
  info: " Beta is committed to standards of social conduct which are guided by principles of urbane, civil, courteous and responsible development.",
};

const community = {
  name: "Commitment to Community",
  info: "The experience of being a Beta encourages men to serve their university, fraternal, and local communities. ",
};

function WhyRushMission() {
  return (
    <div className="why-rush-mission">
      <WhyRushBox mission={lifelongFriendship} />
      <WhyRushBox mission={cultivation} />
      <WhyRushBox mission={socialConduct} />
      <WhyRushBox mission={responsible} />
    </div>
  );
}
export default WhyRushMission;
