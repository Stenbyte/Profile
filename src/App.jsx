import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Works from "./components/works/Works";

import "./app.scss";
import Menu from "./components/menu/Menu";
import { useState } from "react";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [num, setNum] = useState(0);
  const scrollHandle = (e) => {
    setNum(e.target.scrollTop);
  };
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections" onScroll={scrollHandle}>
        <Intro />
        <About num={num} />
        <Portfolio num={num} />
        <Works num={num} />
        <Contact />
      </div>
    </div>
  );
}

export default App;
