import React from "react";
import "./menu.scss";

export default function Menu({ menuOpen, setMenuOpen }) {
  return (
    <div className={"menu " + (menuOpen && "active")}>
      <div className="card">
        <ul>
          <li onClick={() => setMenuOpen(!menuOpen)}>
            <a href="#intro">Home</a>
          </li>
          <li onClick={() => setMenuOpen(!menuOpen)}>
            <a href="#about">About</a>
          </li>
          <li onClick={() => setMenuOpen(!menuOpen)}>
            <a href="#portfolio">Projects</a>
          </li>
          <li onClick={() => setMenuOpen(!menuOpen)}>
            <a href="#works">Skills</a>
          </li>
          <li onClick={() => setMenuOpen(!menuOpen)}>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <div className="box"></div>
      </div>
    </div>
  );
}
