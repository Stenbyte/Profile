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

  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Intro />
        <div className="me">
          <h1>ABOUT ME</h1>
        </div>
        <About />
        <Portfolio />
        <Works />
      </div>
    </div>
  );
}

export default App;
