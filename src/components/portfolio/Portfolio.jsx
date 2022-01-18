import React from "react";
import "./portfolio.scss";
import tags from "../../img/tags.svg";
import snake from "../../img/snake1.svg";
import playBtn from "../../img/playBtn.svg";

import { Projects as data } from "../../data";

export default function Portfolio({ num }) {
  const style = {
    transform: `translateY(${num >= 1242 ? -1 : 0}rem)`,
  };
  return (
    <div className="portfolio" id="portfolio">
      <h1>Projects</h1>
      <img src={snake} alt="" className="snake" />
      <img src={snake} alt="" className="snake1" />
      <img src={playBtn} alt="" className="play" />
      <div className="container">
        {data.map((pro, i) => (
          <div className="first" key={i}>
            <div className="second">
              <div className="text">
                <div className="head">
                  <img src={tags} alt="" />
                  <h2>{pro.title}</h2>
                </div>
                <div className="desc">
                  <p>{pro.tech}</p>
                  <h4>Mobile responsive: {pro.mob}</h4>
                </div>
                <div className="btn">
                  <a href={pro.url} target="_blank" rel="noreferrer">
                    <button>View</button>
                  </a>
                  <a href={pro.git} target="_blank" rel="noreferrer">
                    <button>Github</button>
                  </a>
                </div>
              </div>
              <div className="pic">
                <img src={pro.img} alt="" style={style} />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="bottomBox"></div>
    </div>
  );
}
