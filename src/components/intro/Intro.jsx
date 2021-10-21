import React, { useEffect, useRef } from "react";
import "./intro.scss";
import { init } from "ityped";

export default function Intro() {
  const text = useRef();
  // useEffect(() => {
  //   init(text.current, {
  //     showCursor: true,
  //     startDelay: 1000,
  //     backDelay: 1500,
  //     backSpeed: 100,
  //     typeSpeed: 100,
  //     strings: ["Developer"],
  //   });
  // }, []);
  return (
    <div className="intro" id="intro">
      <div className="top">
        <div className="top1">
          <h3>
            Hi, I'm <span>Sten Scheifel.</span> Frontend Developer
          </h3>
          {/* <h3>Hi there, I'm</h3>
          <h2>Sten Scheifel</h2>
          <h3>
            Frontend <span ref={text}></span>
          </h3> */}
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
