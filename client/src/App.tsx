import React, { useCallback, useEffect, useState } from "react";
import me3 from "./assets/me3.png";
import compressedMe from "./assets/compressed-me.png";
import "./App.css";
import PingComponent from "./PingComponent";
import LazyLoad from "react-lazyload";
import { Button } from "./components/Button";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import { Intro } from "./Intro";
import { Talks } from "./Talks";
import { Resume } from "./Resume";

function App() {
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
}

export default App;
