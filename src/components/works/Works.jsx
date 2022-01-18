import React from "react";
import "./works.scss";
import rt from "../../img/react.svg";
import js from "../../img/js.svg";
import ts from "../../img/ts.svg";
import api from "../../img/api.svg";
import cloud from "../../img/cloud1.svg";

export default function Works({ num }) {
  let style = {
    transform: `translateY(${num >= 1870 ? -1 : 0}rem)`,
  };
  console.log(window);
  return (
    <div className="works" id="works">
      <h1 className="h1">Skills</h1>
      <img
        src={cloud}
        alt=""
        className="cloud"
        style={{
          top: "7%",
          left: "15%",
          transform: `translateY(${num >= 1870 ? 2 : 0}rem)`,
        }}
      />
      <img
        src={cloud}
        alt=""
        className="cloud"
        style={{
          bottom: "7%",
          left: "35%",
          transform: `translateY(${num >= 1870 ? 2 : 0}rem)`,
        }}
      />
      <img
        src={cloud}
        alt=""
        className="cloud"
        style={{
          top: "23%",
          right: "15%",
          transform: `translateY(${num >= 1870 ? 2 : 0}rem)`,
        }}
      />
      <div className="grid">
        <div className="top">
          <p style={style}>Redux</p>
          <p style={style}>Css</p>
          <p style={style}>Html</p>
          <p style={style}>Sass</p>
          <p style={style}>Mui</p>
        </div>
        <div className="mid">
          <img src={rt} alt="" />
          <img src={js} alt="" />
          <img src={api} alt="" />
          <img src={ts} alt="" />
        </div>
        <div className="bottom">
          <p style={style}>Git</p>
          <p style={style}>Github</p>
          <p style={style}>UX/UI</p>
          <p style={style}>CI/CD</p>
          <p style={style}>Figma</p>
        </div>
      </div>
    </div>
  );
}
