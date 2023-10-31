import React, { useState } from "react";
import "./style.scss";
import imageone from "./Images/1.jpg";
import imagetwo from "./Images/2.jpg";

const testimonials = [
  {
    id: 1,
    name: "Jennifer",
    text: " Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    imageUrl: imageone,
  },
  {
    id: 2,
    name: "John",
    text: " Suspendisse nec metus at felis viverra volutpat.",
    imageUrl: imagetwo,
  },
  {
    id: 3,
    name: "Benjamin",
    text: " Suspendisse nec metus at felis viverra volutpat.",
    imageUrl: imageone,
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <div>
      <h2>Testimonial</h2>
      <div className="testimonial-slider">
        <div className="testimonial">
          <img
            src={testimonials[activeIndex].imageUrl}
            alt={`Testimonial ${activeIndex + 1}`}
            className="testimonial-image"
          />
          <h2 className="testimonial-text">{testimonials[activeIndex].name}</h2>
          <p className="testimonial-text">{testimonials[activeIndex].text}</p>
        </div>
        <div className="navigation">
          <button onClick={prevSlide}>&lt;</button>
          <button className="next" onClick={nextSlide}>
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
