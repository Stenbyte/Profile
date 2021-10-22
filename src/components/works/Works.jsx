import React, { useState } from "react";
import "./works.scss";

export default function Works({ num }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  console.log(num);

  const style = {
    color: `${num >= 1400 ? "red" : "white"}`,
  };
  return (
    <div className="works" id="works">
      <h1 className="h1">SKILLS</h1>

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
    </div>
  );
}
