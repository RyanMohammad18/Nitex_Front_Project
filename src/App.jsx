import { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import About from "./containers/about/About";
import Contact from "./containers/contact/Contact";
import Homes from "./containers/home/Homes";
import Reviews from "./containers/reviews/Reviews";
import Service from "./containers/services/Service";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homes />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
