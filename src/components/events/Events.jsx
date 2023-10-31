import React, { useState, useEffect } from "react";
import "./style.scss";

const Events = () => {
  const [count, setCount] = useState(0);
  const [counttwo, setCounttwo] = useState(0);

  const counter = (minimum, maximum) => {
    for (let i = minimum; i <= maximum; i++) {
      setTimeout(() => {
        setCount(i);
      }, (i - minimum) * 30);
    }
  };

  const countertwo = (minimum, maximum) => {
    for (let i = minimum; i <= maximum; i++) {
      setTimeout(() => {
        setCounttwo(i);
      }, (i - minimum) * 30);
    }
  };

  useEffect(() => {
    counter(0, 80);
    countertwo(0,60);
  }, []);

  return (
    <div>
      <div className="row">
  <h2 className="services">Events</h2>
  <div className="stats-counter">
    <h3 id="stats-number">{count} + </h3>
    <p>Events</p>
  </div>
  <div className="stats-counter">
    <h3 id="stats-number">{counttwo} + </h3>
    <p>Projects</p>
  </div>
  <div className="stats-counter">
    <h3 id="stats-number">{count} + </h3>
    <p>Reviews</p>
  </div>
</div>



    </div>
  );
};

export default Events;
