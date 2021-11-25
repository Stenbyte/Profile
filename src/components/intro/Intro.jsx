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
          “Success is not final; failure is not fatal: It is the courage to
          continue that counts.”
        </p>
        <span className="span">-- Winston S. Churchill</span>
      </div>
      <div className="bottom">
        <img src="assets/st.png" alt="" />
      </div>
    </div>
  );
}
