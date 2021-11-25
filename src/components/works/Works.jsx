import React from "react";
import "./works.scss";

export default function Works({ num }) {
  console.log(num);

  const style = {
    color: `${num >= 1400 ? "#a9d6e5" : "#012a4a"}`,
  };
  const style1 = {
    transform: `rotate(${num >= 1400 ? "250" : "0"}deg)`,
  };
  return (
    <div className="works" id="works">
      <h1 className="h1">SKILLS</h1>
      <div className="sec">
        <p className="p1" style={style}>
          REACT
        </p>
        <p className="p2" style={style}>
          FIGMA
        </p>
        <p className="p3" style={style}>
          JAVASCRIPT
        </p>
        <p className="p4" style={style}>
          CSS
        </p>
        <p className="p5" style={style}>
          MUI
        </p>
        <p className="p6" style={style}>
          GIT
        </p>
        <p className="p7" style={style}>
          GITHUB
        </p>

        <p className="p8" style={style}>
          SASS
        </p>
        {/* <p className="p9" style={style}>
          AJAX
        </p> */}
      </div>

      <img src="assets/skill.png" alt="" className="first" />

      <img src="assets/Vector.png" alt="" className="rot" style={style1} />
      <div className="sec1">
        <p className="p10" style={style}>
          STYLED COMPONENTS
        </p>
        <p className="p11" style={style}>
          FIREBASE
        </p>
        <p className="p12" style={style}>
          REST API
        </p>
        <p className="p13" style={style}>
          HTML
        </p>

        <p className="p16" style={style}>
          UX/UI
        </p>
        <p className="p17" style={style}>
          REDUX
        </p>
        <p className="p18" style={style}>
          AJAX
        </p>
        <p className="p19" style={style}>
          CI/CD
        </p>
      </div>
    </div>
  );
}
