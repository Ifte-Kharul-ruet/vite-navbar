import React from "react";
import logo from "../assets/Logo-left.png";

function Footer() {
  return (
    <>
      <footer className="footer">
        <div>
          <img src={logo} alt="Logo"></img>
        </div>
        <div className="footLinks">
          Important Links
          <ul>
            <li>
              <a href="#">FAQ</a>
            </li>
            <li>
              <a href="#">Team</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}

export default Footer;
