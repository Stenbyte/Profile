import React from "react";
import "./menu.scss";

export default function Menu({ menuOpen, setMenuOpen }) {
  return (
    <div className={"menu " + (menuOpen && "active")}>
      <ul>
        <li onClick={() => setMenuOpen(!menuOpen)}>
          <a href="#intro">HOME</a>
        </li>
        <li onClick={() => setMenuOpen(!menuOpen)}>
          <a href="#about">ABOUT ME</a>
        </li>
        <li onClick={() => setMenuOpen(!menuOpen)}>
          <a href="#portfolio">ACHIEVEMENTS</a>
        </li>
        <li onClick={() => setMenuOpen(!menuOpen)}>
          <a href="#works">SKILLS</a>
        </li>
        <li onClick={() => setMenuOpen(!menuOpen)}>
          <a href="#contact">CONTACT ME</a>
        </li>
      </ul>
    </div>
  );
}
