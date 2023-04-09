import { HashRouter, Link, NavLink, Route, Routes } from "react-router-dom";
import "./App.css";
import { Button } from "./components/Button";
import { Intro } from "./Intro";
import { Resume } from "./Resume";
import { Talks } from "./Talks";

function App() {
  return (
    <HashRouter>
      <div className="App">
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "center",
            backgroundColor: "#446eac59",
            paddingTop: "5px",
            paddingBottom: "5px",
          }}
        >
          <NavLink to="/">
            {({ isActive }) => <Button isActive={isActive} label="Intro" />}
          </NavLink>
          <NavLink to="/talks">
            {({ isActive }) => <Button label="Talks" isActive={isActive} />}
          </NavLink>
          <NavLink to="/resume">
            {({ isActive }) => <Button label="Resume" isActive={isActive} />}
          </NavLink>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            textAlign: "center",
            maxWidth: 900,
          }}
        >
          <Routes>
            <Route path="/" element={<Intro />} />
            <Route path="/talks" element={<Talks />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
        </div>
      </div>
    </HashRouter>
  );
}

export default App;
