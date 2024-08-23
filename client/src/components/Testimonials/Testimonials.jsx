import React, { useEffect, useState } from "react";
import ButtonContainer from "../Navbar/ButtonContainer";
import "./Testimonials.css";
import WhyRushInfo from "../WhyRush/WhyRushInfo";
import Testimonial from "./Testimonial";
import axios from "axios";

const apiUrl = process.env.REACT_APP_API_URL;

const text1 =
  "Beta is forever. A testament to that is our ever strong presence of alumni who actively participate and contribute to our fraternity, even years after they have graduated. Here's what our alumni have to say about the Gamma Omicron Chapter at UBC.";

function Testimonials() {
  const [testimonials, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${apiUrl}/api/testimonial`);
        setItems(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="testimonial-banner">
      <ButtonContainer />
      <h1>Alumni Testimonials</h1>
      <hr />
      <div>
        <WhyRushInfo text={text1} />
        {testimonials.map((testimonial) => (
          <div>
            <Testimonial
              sport={testimonial.name}
              job={testimonial.job}
              text={testimonial.testimonial}
              image={testimonial.imageLink}
            />
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonials;
