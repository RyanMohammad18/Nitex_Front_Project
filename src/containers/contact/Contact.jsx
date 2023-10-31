import React, { useState } from "react";

import { Animate } from "react-simple-animate";
import Navbar from "../../components/navBar/Navbar";
import Footers from "../footer/Footers";

import "./style.scss";

const Contact = () => {
  return (
    <>
      <Navbar />
      <section id="contact" className="contact">
        <div className="contact__content">
          <h3 className="contact__content__header-text">Contact US</h3>

          <Animate
            play
            duration={1}
            delay={0}
            start={{
              transform: "translateX(200px)",
            }}
            end={{
              transform: "translateX(0px)",
            }}
          >
            <div className="contact__content__form">
              <form action="https://formspree.io/f/mbjvlkdn" method="POST">
                <div className="contact__content__form__controlswrapper">
                  <div>
                    <input
                      required
                      name="name"
                      className="inputName"
                      type={"text"}
                    />
                    <label htmlFor="name" className="nameLabel">
                      Name
                    </label>
                  </div>
                  <div>
                    <input
                      required
                      name="email"
                      className="inputEmail"
                      type={"text"}
                    />
                    <label htmlFor="email" className="emailLabel">
                      Email
                    </label>
                  </div>
                  <div>
                    <textarea
                      required
                      name="message"
                      className="inputDescription"
                      type={"text"}
                      rows="5"
                    />
                    <label htmlFor="description" className="descriptionLabel">
                      Description
                    </label>
                  </div>
                </div>
                <button type="submit">Send</button>
              </form>
            </div>
          </Animate>
        </div>
      </section>

      <Footers />
    </>
  );
};

export default Contact;
