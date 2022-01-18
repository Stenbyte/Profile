import React from "react";
import "./about.scss";
import shortLine from "../../img/shortLine.svg";
import longLine from "../../img/longLine.svg";
import snake from "../../img/snake.svg";
import pdf from "../../img/ScheifelCV.pdf";

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
            • I'm a creator with solid React & Javascript knowledge. Frontend is
            my passion, which I spare no effort.
          </p>
          <p>
            • Creative intelligence & self-management skills are the roots of my
            character.
          </p>
          <p>
            • I gained working experience during my 6-month internship as
            Frontend developer, mainly I was converting Figma wireframes into
            React components, fixing complex bugs, and improving department
            processes.
          </p>
          <p>
            • Currently, I'm looking for a Frontend Developer job. If you got
            interested in me. Hit the download button, schedule the interview.
            Let's talk about what we can give to each other.
          </p>
        </div>
        <a href={pdf} download="Sten_Scheifel">
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
