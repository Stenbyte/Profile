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
          <a
            href="https://linkedin.com/in/sten-scheifel-2b4697168/"
            target="_blank"
            rel="noreferrer"
          >
            <i
              className="fab fa-linkedin-in"
              style={{ fontSize: "25px", padding: "0 10px" }}
            ></i>
            <a
              href="https://github.com/Stenbyte"
              target="_blank"
              rel="noreferrer"
            >
              <i
                className="fab fa-github"
                style={{ fontSize: "25px", padding: "0 10px" }}
              ></i>
            </a>
          </a>
        </li>
      </ul>
    </div>
  );
}
