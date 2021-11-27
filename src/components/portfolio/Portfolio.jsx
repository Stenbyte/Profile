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
          <div className="item" key={d.id}>
            <a href={d.url} target="_blank" rel="noreferrer">
              <img src={d.img} alt={d.title} />
            </a>
            <div className="wrapper">
              <h3>{d.title.toUpperCase()}</h3>
              {d.mob && (
                <>
                  <span>Technology used: {d.tech}</span>
                  <p>Mobile responsive: {d.mob}</p>
                  <div className="links">
                    <a href={d.url} target="_blank" rel="noreferrer">
                      Link
                    </a>
                    <a href={d.git} target="_blank" rel="noreferrer">
                      Github
                    </a>
                  </div>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
