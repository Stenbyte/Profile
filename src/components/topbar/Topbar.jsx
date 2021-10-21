import React from "react";
import "./topbar.scss";
import { Mail } from "@material-ui/icons";
import Logo from "../../img/S.png";

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            <img src={Logo} alt="logo" />
          </a>
          {/* <div className="itemContainer">
            <a
              href="https://linkedin.com/in/sten-scheifel-2b4697168/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div> */}
          {/* <div className="itemContainer">
            <a
              href="https://github.com/Stenbyte"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-github"></i>
            </a>
          </div> */}
          {/* <div className="itemContainer">
            <Mail className="icon" />
            <span>sten.scheifel@gmail.com</span>
          </div> */}
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
