import React from "react";
import "./about.scss";
export default function About({ num }) {
  const style = {
    transform: `translateY(${num >= 220 ? 1 : 10}rem)`,
  };
  const style1 = {
    transform: `translateY(${num >= 220 ? 1 : -3}rem)`,
  };

  return (
    <div className="about" id="about">
      <h1 className="me">ABOUT ME</h1>
      <div className="parallax" style={style}></div>
      <div className="container" style={style1}>
        <p>
          • Since 2018, I knew my calling was in Software Development
          <br />
          • I have read many topics about computers and everything that is
          related to them. Tried many boot camps, free courses, tutorials. Wrote
          some dummy pages, apps.
          <br />
          • January 2020, I applied for Full Stack Web Development Program(React
          and Nodejs majors) at Business College Helsinki and was accepted
          <br />
          • It is a full-time 17-months intensive program, which covers both
          Front and Backend
          <br />• A lot of projects, teamwork, coding, and learning 24/7
          <br /> • I chose to stick with Frontend.
          <br />
          • Enthusiastic and positive even in tough situations
          <br />
          • Since June 2021, Frontend Developer intern at Siciliamia startup.
          <br />
          • Good team player and continuous learner.
          <br />• Software Development - is my biggest passion, which I spare no
          effort. I am a self-disciplined, organized, and open-minded person
          with a desire to improve who is looking to become a valuable part of a
          team.
        </p>
      </div>
    </div>
  );
}
