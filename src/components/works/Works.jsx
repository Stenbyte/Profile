import React from "react";
import "./works.scss";

export default function Works({ num }) {
  // console.log(num);

  const style = {
    color: `${num >= 1400 ? "#a9d6e5" : "#012a4a"}`,
  };
  // const style1 = {
  //   transform: `rotate(${num >= 1400 ? "250" : "0"}deg)`,
  // };
  return (
    <div className="works" id="works">
      <h1 className="h1">SKILLS</h1>
      <div className="card">
        <div className="sec">
          <h1>Frontend</h1>
          <div className="left">
            <div className="letf1">
              {" "}
              <p className="p1" style={style}>
                JAVASCRIPT (2,5y)
              </p>
              <p className="p2" style={style}>
                TYPESCRIPT (1,5y)
              </p>
              <p className="p3" style={style}>
                REACT (2y)
              </p>
            </div>
            <div className="left2">
              {" "}
              <p className="p4" style={style}>
                REDUX (1,5y)
              </p>
              <p className="p44" style={style}>
                REST API (1,5y)
              </p>
            </div>
          </div>
          <h1>Styling</h1>
          <div className="styling">
            <div>
              {" "}
              <p className="p5" style={style}>
                CSS (3y)
              </p>
              <p className="p6" style={style}>
                HTML5 (3y)
              </p>
              <p className="p7" style={style}>
                STYLED COMPONENTS (2y)
              </p>
            </div>
            <div>
              {" "}
              <p className="p8" style={style}>
                SASS (2y)
              </p>
              <p className="p10" style={style}>
                MUI (1y)
              </p>
              <p className="p11" style={style}>
                BOOTSTRAP (1y)
              </p>
            </div>
          </div>
        </div>

        <div className="sec1">
          <div>
            <h1>Controll/ Collaboration</h1>
            <div className="control">
              <p className="p12" style={style}>
                GIT (2y)
              </p>
              <p className="p122" style={style}>
                GITHUB (2y)
              </p>
              <p className="p123" style={style}>
                CI/CD (1y)
              </p>
            </div>
          </div>
          <div>
            <h1>Design/Planning</h1>
            <div className="design">
              <p className="p13" style={style}>
                FIGMA (2y)
              </p>
              <p className="p133" style={style}>
                UX/UI (2y)
              </p>
              <p className="p134" style={style}>
                TRELLO (2y)
              </p>
              <p className="p135" style={style}>
                MIRO (1y)
              </p>
            </div>
          </div>
        </div>
        <div className="sec3">
          <h1>Backend</h1>
          <div className="back">
            <p className="p19" style={style}>
              FIREBASE (1y)
            </p>
            <p className="p16" style={style}>
              Nodejs (6month)
            </p>
            <p className="p17" style={style}>
              Express (6month)
            </p>
            <p className="p18" style={style}>
              MongoDB (6month)
            </p>
            <p className="p188" style={style}>
              AWS (6month)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
