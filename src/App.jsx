import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Works from "./components/works/Works";

import "./app.scss";
import Menu from "./components/menu/Menu";
import { useState } from "react";
import About from "./components/about/About";
function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [num, setNum] = useState(0);
  const scrollHandle = (e) => {
    setNum(e.target.scrollTop);
    // console.log(num);
  };
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections" onScroll={scrollHandle}>
        <Intro />
        <div className="me">
          <h1>ABOUT ME</h1>
        </div>
        <About num={num} />
        <Portfolio />
        <Works num={num} />
      </div>
    </div>
  );
}

export default App;
