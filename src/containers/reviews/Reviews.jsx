import React from "react";
import Navbar from "../../components/navBar/Navbar";
import ProgressBar from "react-animated-progress-bar";
import "./style.scss";
import Testimonials from "../../components/testimonials/Testimonials";
import Footers from "../footer/Footers";

const Reviews = () => {
  return (
    <div>
      <Navbar />
      <div>
        <div className="headers">
          <div className="overlays"></div>
          <h2 className="header-titles">Reviews</h2>
        </div>
      </div>
      <section className="container">
        <div className="skills_content_wrapper_2">
          <h3>Overall Reviews</h3>
          <p>Excellent</p>
          <ProgressBar
            text="com"
            width="400px"
            height="14px"
            rect
            fontColor="orangered"
            percentage="85"
            rectPadding="1px"
            rectBorderRadius="20px"
            trackPathColor="yellow"
            bgColor="#A9B920"
            trackBorderColor="white"
          />

          <p>Satisfactory</p>
          <ProgressBar
            text="com"
            width="400px"
            height="14px"
            rect
            fontColor="orangered"
            percentage="75"
            rectPadding="1px"
            rectBorderRadius="20px"
            trackPathColor="yellow"
            bgColor="#A9B920"
            trackBorderColor="white"
          />

          <p>Not Good</p>
          <ProgressBar
            text="com"
            width="400px"
            height="14px"
            rect
            fontColor="orangered"
            percentage="10"
            rectPadding="1px"
            rectBorderRadius="20px"
            trackPathColor="yellow"
            bgColor="#A9B920"
            trackBorderColor="white"
          />
        </div>
        <div>
          <Testimonials />
        </div>
      </section>
      <Footers/>
    </div>
  );
};

export default Reviews;
