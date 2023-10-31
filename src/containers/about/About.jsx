import React from "react";
import Navbar from "../../components/navBar/Navbar";
import "./style.scss";

import { Animate } from "react-simple-animate";


import image3 from "./Images/3.jpg";
import Typewriter from "typewriter-effect";
import Footer from "../footer/Footers";

const About = () => {
  return (
    <div>
      <Navbar />
      <section id="about" className="about">
        <div className="header">
          <div className="background-image"></div>
          <div className="overlay"></div>
          <div className="typewriter">
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString("Welcome to")
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString("About Us Section")
                  .start();
              }}
            />
          </div>
        </div>

        <div className="about_content">
          <div className="about_content_personalWrapper">
            <Animate
              play
              duration={1}
              delay={1}
              start={{
                transform: "translateX(-800px)",
              }}
              end={{
                transform: "translateX(0px)",
              }}
            >
              <h1 className="text-red">Imagine to build something</h1>
              <p className="text-black">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
                dolorum aperiam exercitationem quia, saepe optio asperiores,
                voluptate non nam ab, molestias doloremque sed minus. Amet
                consectetur reprehenderit error aliquam reiciendis.
              </p>
            </Animate>
          </div>
          <div className="about_content_serviceWrapper">
            <Animate
              play
              duration={1}
              delay={1}
              start={{
                transform: "translateX(600px)",
              }}
              end={{
                transform: "translateX(0px)",
              }}
            >
              {" "}
              <div className="about_content_serviceWrapper_innerContents">
                <img
                  src={image3}
                  alt=""
                  width="500px"
                  height="300px"
                  className="img"
                />
              </div>
            </Animate>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
