import React, { useState, useEffect } from "react";
import "./portfolio.scss";
import PortfolioList from "../portfolioList/PortfolioList";

import { Projects, Certificates } from "../../data";

export default function Portfolio() {
  const [selected, setSelected] = useState("projects");
  const [data, setData] = useState([]);

  const list = [
    {
      id: "projects",
      title: "Projects",
    },
    {
      id: "cert",
      title: "Certificates",
    },
  ];
  useEffect(() => {
    switch (selected) {
      case "projects":
        setData(Projects);
        break;
      case "cert":
        setData(Certificates);
        break;
      default:
        setData([]);
        break;
    }
  }, [selected]);
  return (
    <div className="portfolio" id="portfolio">
      <h1>ACHIEVEMENTS</h1>
      <ul>
        {list.map((i) => (
          <PortfolioList
            title={i.title}
            id={i.id}
            key={i.id}
            active={selected === i.id}
            setSelected={setSelected}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((d) => (
          <a href={d.url} target="_blank" rel="noreferrer" key={d.id}>
            <div className="item">
              <img src={d.img} alt={d.title} />
              <h3>{d.title.toUpperCase()}</h3>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
