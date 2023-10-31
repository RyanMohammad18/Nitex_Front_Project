import React, { useState } from "react";

import { Link } from "react-router-dom";
import { FaBars, FaReact } from "react-icons/fa";
import { HiX } from "react-icons/hi";

import "./style.scss";

const data = [
  {
    label: "HOME",
    to: "/",
  },
  {
    label: "ABOUT ME",
    to: "/about",
  },
  {
    label: "SERVICE",
    to: "/service",
  },
  {
    label: "REVIEWS",
    to: "/reviews",
  },

  {
    label: "CONTACT",
    to: "/contact",
  },
];

const Navbar = () => {
  const [toggleIcon, setToggleIcon] = useState(false);

  const handleToggleIcon = () => {
    setToggleIcon(!toggleIcon);
  };
  return (
    <div>
      <nav className="navBar">
        <div className="navBar_container">
          <Link to={"/"} className="navBar_container_logo">
            <p>Frontend Project</p>
          </Link>
        </div>
        <ul className={`navBar_container_menu ${toggleIcon ? "active" : ""}`}>
          {data.map((item, key) => (
            <li key={key} className="navBar_container_menu_item">
              <Link to={item.to} className="navBar_container_menu_item_links">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="nav-icon" onClick={handleToggleIcon}>
          {toggleIcon ? <HiX size={30} /> : <FaBars size={30} />}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
