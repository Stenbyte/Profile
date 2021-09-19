import React, { useEffect, useRef } from "react";
import "./intro.scss";
import { init } from "ityped";

export default function Intro() {
  const text = useRef();
  useEffect(() => {
    init(text.current, {
      showCursor: true,
      startDelay: 1000,
      backDelay: 1500,
      backSpeed: 100,
      typeSpeed: 100,
      strings: ["Developer"],
    });
  }, []);
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/me.jpg" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi there, I'm</h2>
          <h1>Sten Scheifel</h1>
          <h3>
            Frontend <span ref={text}></span>
          </h3>
        </div>
        <a href="#about">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
  );
}
