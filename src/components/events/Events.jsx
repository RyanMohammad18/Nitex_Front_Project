import React, { useState, useEffect, useRef } from "react";
import "./style.scss";

const Events = () => {
  const [count, setCount] = useState(0);
  const [counttwo, setCounttwo] = useState(0);
  const statsCounterRef = useRef(null);

  const counter = (minimum, maximum) => {
    let i = minimum;
    const interval = setInterval(() => {
      setCount(i);
      if (i >= maximum) {
        clearInterval(interval);
      }
      i++;
    }, 30);
  };

  const countertwo = (minimum, maximum) => {
    let i = minimum;
    const interval = setInterval(() => {
      setCounttwo(i);
      if (i >= maximum) {
        clearInterval(interval);
      }
      i++;
    }, 30);
  };

  const handleIntersection = (entries) => {
    if (entries[0].isIntersecting) {
      counter(0, 80);
      countertwo(0, 60);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection);
    if (statsCounterRef.current) {
      observer.observe(statsCounterRef.current);
    }
  }, []);

  return (
    <div>
      <div className="row">
        <h2 className="services">Events</h2>
        <div className="stats-counter" ref={statsCounterRef}>
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
