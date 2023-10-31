import React from "react";
import "./style.scss";
import image1 from "./Images/1.jpg";
import image2 from "./Images/2.jpg";
import image3 from "./Images/3.jpg";

const Cards = () => {
  return (
    <>
      <div className="container">
        <div className="card-container">
          <div className="card">
            <img src={image1} alt="Mountains" />
            <h1>Domain Hosting</h1>
          </div>
          <div className="card">
            <img src={image2} alt="Mountains" />
            <h1>SEO</h1>
          </div>
          <div className="card">
            <img src={image3} alt="Mountains" />
            <h1>App </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
