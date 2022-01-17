import React from "react";
import "./intro.scss";
import cloud from "../../img/cloud.svg";
import plus from "../../img/plus.svg";
import dots from "../../img/dots.svg";
import star from "../../img/star.svg";
import st from "../../img/st.svg";

export default function Intro() {
  return (
    <div className="intro" id="intro">
      <div className="left">
        <img src={cloud} alt="" className="cloud" />
        <img src={plus} alt="" className="plus" />
        <img src={dots} alt="" className="dots" />
        <div className="leftTop">
          <h1>
            I'm <span>Sten Scheifel</span>.
            <br />
            I'm Frontend Developer.
          </h1>
          <p>
            I like to create, animate frontend products with great user
            experiences.
          </p>
        </div>
        <div className="leftBottom">
          <p>I specialise in React, Javascript and Typescript</p>
          <p>
            Highly motivated to become <br />
            Full-Stack Developer
          </p>
        </div>
      </div>
      <div className="center">
        <img src={st} alt="" className="me" />
      </div>
      <div className="right">
        <img src={plus} alt="" className="plus1" />
        <img src={dots} alt="" className="dots1" />
        <img src={star} alt="" className="star" />
      </div>
    </div>
  );
}
