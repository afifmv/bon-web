import React, { useEffect, useState } from "react";
import ButtonContainer from "../Navbar/ButtonContainer";
import "./Rush.css";
import PhotoGrid from "../DTP/PhotoGrid";
import WhyRushInfo from "../WhyRush/WhyRushInfo";
import Executive from "../Executives/Executive";
import axios from "axios";

const text1 =
  "The rush process (also known as recruitment) is one of the most exciting times at UBC. It is designed so that men interested in joining a fraternity can find the one that fits them best. Each fraternity at UBC is unique in its own way, and the Rush process is created so that these unique features can be showcased to everyone interested. It is not a competition between fraternities, and there isn't one that is the outright best in any one category. There is only the fraternity that will be the best for you.";

const text2 =
  "​In addition to our booth on campus and the private events that we throw, there are three official Rush events. At the first two Rush events, swing by our house or catch our shuttle from the Greek Village. You can tour the house and get more detailed information about our chapter and the General Fraternity. As well, you'll have a chance to meet all the chapter members and link up with other guys like yourself that are rushing, and enjoy our exciting atmosphere. The Second Rush is to show you what Beta is all about.";

const text3 =
  "​The final rush event, Formal Rush, is by invite only and is held at the house of one of our brothers. If you decide to attend another fraternity's formal rush on this night (you can only attend two), we will come and pick you up at the exchange time so that you can end off at our house. This is a suit and tie event with dinner, key note speakers, and entertainment.";

const text4 =
  "​So have fun with Rush, ask as many questions as possible, meet as many members as you can, enjoy the social events, and remember that there is a more serious side to each fraternity that can benefit you for life. Please feel free to contact us at any time with any comments or suggestions regarding Beta Theta Pi or Rush in general.";

const apiUrl = process.env.REACT_APP_API_URL || "http://localhost:3000";

const texts = [text1, text2, text3, text4];

function Rush() {
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
    <div className="rush-banner">
      <ButtonContainer />
      <div className="rush-img"></div>
      <h1>Rush</h1>
      <hr />
      {texts.map((text) => (
        <WhyRushInfo text={text} />
      ))}
      <div className="rush-interest">
        <h3>Ineterested in Rushing?</h3>
        <a href="https://forms.gle/5hKyKBHCnsRqKiCu5">Rush Interest form</a>
      </div>
      <h4>
        Got Questions or Concerns? Contact our Vice-Presidents of Recruitment:{" "}
      </h4>
      <div className="rush-exec-div">
        {executives.map((exec) =>
          exec.rush ? <Executive exec={exec} /> : null
        )}
      </div>
    </div>
  );
}

export default Rush;
