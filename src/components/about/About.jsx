import React from "react";
import "./about.scss";
import shortLine from "../../img/shortLine.svg";
import longLine from "../../img/longLine.svg";
import snake from "../../img/snake.svg";

export default function About({ num }) {
  const style = {
    transform: `translateY(${num >= 220 ? 1 : 10}rem)`,
  };
  const style1 = {
    transform: `translateY(${num >= 220 ? 1 : -3}rem)`,
  };

  return (
    <div className="about" id="about">
      <img
        src={longLine}
        alt=""
        className="long"
        style={{ left: `${num >= 220 ? 5 : 0}%` }}
      />
      <img
        src={shortLine}
        alt=""
        className="short"
        style={{ left: `${num >= 220 ? 8 : 0}%` }}
      />
      <h1 className="me">About me</h1>
      <div className="parallax" style={style}></div>
      <div className="container" style={style1}>
        <div>
          <p>
            • Since 2018, I knew my calling was in Software Development
            <br />
            • Last year I have completed full-time 17-months Full Stack Web
            Development Program(React and Nodejs majors) at Business College
            Helsinki
            <br />• During my studies, I gained a vast knowledge of software
            development and teamwork
            <br />• All these skills were refined during my 6-months full-time
            internship as a Frontend developer
            <br />
            • I was converting Figma wireframes into React components, fixing
            complex bugs, and improving department processes
            <br />• Software Development - is my biggest passion, which I spare
            no effort. I am a self-disciplined, organized, and open-minded
            person with a desire to improve who is looking to become a valuable
            part of a team
          </p>
        </div>
        <a href="/">
          <button>Download CV</button>
        </a>
      </div>
      <img
        src={snake}
        alt=""
        className="snake"
        style={{ right: `${num >= 220 ? 5 : 0}%` }}
      />
      <img
        src={longLine}
        alt=""
        className="long1"
        style={{ right: `${num >= 220 ? 5 : 0}%` }}
      />
      <img
        src={shortLine}
        alt=""
        className="short1"
        style={{ right: `${num >= 220 ? 8 : 0}%` }}
      />
    </div>
  );
}
