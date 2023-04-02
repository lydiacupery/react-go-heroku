import { HashRouter, Link, Route, Routes } from "react-router-dom";
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
            marginTop: "20px",
          }}
        >
          <Link to="/">
            <Button label="Intro" />
          </Link>
          <Link to="/talks">
            <Button label="Talks" />
          </Link>
          <Link to="/resume">
            <Button label="Resume" />
          </Link>
        </div>
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/talks" element={<Talks />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
