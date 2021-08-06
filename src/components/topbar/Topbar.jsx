import React from "react";
import "./topbar.scss";
import { Person, Mail } from "@material-ui/icons";
import Logo from "../../img/logo.png";

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            <img src={Logo} alt="logo" />
          </a>
          <div className="itemContainer">
            <Person className="icon" />
            <span>+358406687250</span>
          </div>
          <div className="itemContainer">
            <Mail className="icon" />
            <span>sten.scheifel@gmail.com</span>
          </div>
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
