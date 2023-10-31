import React from "react";

import { useNavigate } from "react-router-dom";

import "./style.scss";
import Navbar from "../../components/navBar/Navbar";
import Carousel from "../../components/carousel/Carousels";
import Footers from "../footer/Footers";
import "./style.scss";
import Cards from "../../components/card/Cards";
import Events from "../../components/events/Events";

const Homes = () => {
  const navigate = useNavigate();

  return (
    <>
      <div>
        <Navbar />
      </div>

      <div className="carousel">
        <Carousel />
      </div>
      <div>
        <h2 className="services">Services</h2>
        <Cards />
      </div>

      <div className="events">
        <Events/>
      </div>

      <div className="footer">
        <Footers />
      </div>
    </>
  );
};

export default Homes;
