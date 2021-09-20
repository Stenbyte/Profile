import React, { useState, useEffect } from "react";
import "./portfolio.scss";
import PortfolioList from "../portfolioList/PortfolioList";

import { JSPortfolio, ReactPortfolio, gamesPortfolio } from "../../data";

export default function Portfolio() {
  const [selected, setSelected] = useState("React_JS");
  const [data, setData] = useState([]);

  const list = [
    {
      id: "React_JS",
      title: "React",
    },
    {
      id: "Js",
      title: "Javascript",
    },
    {
      id: "games",
      title: "Games",
    },
  ];
  useEffect(() => {
    switch (selected) {
      case "React_JS":
        setData(ReactPortfolio);
        break;
      case "Js":
        setData(JSPortfolio);
        break;
      case "games":
        setData(gamesPortfolio);
        break;
      default:
        setData([]);
        break;
    }
  }, [selected]);
  return (
    <div className="portfolio" id="portfolio">
      <h1>PORTFOLIO</h1>
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
              <h3>{d.title}</h3>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
