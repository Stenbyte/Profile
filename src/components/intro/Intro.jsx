import React from "react";
import "./intro.scss";

export default function Intro() {
  return (
    <div className="intro" id="intro">
      <div className="top">
        <div className="top1">
          <h3>
            Hi, I'm <span>Sten Scheifel.</span> Frontend Developer
          </h3>
        </div>
        <p>
          “Let your unique awesomeness and positive energy inspire confidence in
          others.”
        </p>
        <span className="span">Anonymous</span>
      </div>
      <div className="bottom">
        <img src="assets/st.png" alt="" />
      </div>
    </div>
  );
}
