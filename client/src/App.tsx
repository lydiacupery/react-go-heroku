import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import "./App.css";
import { Button } from "./components/Button";
import { Intro } from "./Intro";
import { Resume } from "./Resume";
import { Talks } from "./Talks";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <nav className="nav" aria-label="Main navigation">
          <ul className="nav-list">
            <li>
              <NavLink to="/">
                {({ isActive }) => <Button isActive={isActive} label="Intro" />}
              </NavLink>
            </li>
            <li>
              <NavLink to="/talks">
                {({ isActive }) => <Button label="Talks" isActive={isActive} />}
              </NavLink>
            </li>
            <li>
              <NavLink to="/resume">
                {({ isActive }) => <Button label="Resume" isActive={isActive} />}
              </NavLink>
            </li>
          </ul>
        </nav>
        <main id="main-content" className="main-content">
          <Routes>
            <Route path="/" element={<Intro />} />
            <Route path="/talks" element={<Talks />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
