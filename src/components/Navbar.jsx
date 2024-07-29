import React, { useState } from "react";
import logo from "../assets/Logo-left.png";
import "./NavbarStyle.css";

function Navbar() {
  const [clicked, setClicked] = useState(false);
  // const [navOpened,setNav] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };
  return (
    <>
      <nav>
        <a href="index.html">
          <img src={logo} alt="Logo" id="logo" />
        </a>
        <div>
          <ul id="navbar" className={clicked ? "#navbar active" : "navbar"}>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#" id="about">
                About Us
              </a>
              <ul className="about-drop">
                <li>
                  <a href="#">Vission</a>
                </li>
                <li>
                  <a href="#">Mission</a>
                </li>
                <li>
                  <a href="#">Team</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">Product & Solution</a>
            </li>
            <li>
              <a href="#">Projects</a>
            </li>
            <li>
              <a href="#">Awards & Certificates</a>
            </li>
            <li>
              <a href="#">Gallery</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
        <div id="mobile" onClick={handleClick}>
          <i id="bar" className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
