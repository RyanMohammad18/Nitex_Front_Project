import React from "react";
import Lottie from "lottie-react";
import animation from "./animation.json";
import Button from "react-bootstrap/Button";
import Navbar from "../navBar/Navbar";
import "./style.scss";

const Lotties = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="column">
          <div className="header">
            <h2>Professional Services</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
              culpa iure itaque nisi aut dolorem perferendis ad numquam. Minus
              dolorem incidunt delectus eveniet sapiente exercitationem, debitis
              explicabo illo quisquam quidem? Our clients receive senior
              expertise through consultations targeted to support organizations
              and their specific needs.
            </p>
            <Button variant="danger">View More</Button>
          </div>
        </div>

        <div className="column">
          <Lottie
            animationData={animation}
            loop={true}
            style={{ height: "420px", width: "420px" }}
          />
        </div>
      </div>
    </>
  );
};

export default Lotties;
