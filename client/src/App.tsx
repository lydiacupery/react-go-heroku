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

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <div
            style={{ display: "flex", width: "100%", justifyContent: "end" }}
          >
            <Link to="/">
              <Button label="Intro" />
            </Link>
            <Link to="/talks">
              <Button label="Talks" />
            </Link>
            <Button label="Posts" />
            <Button label="Resume" />
          </div>
          {/* todo: move this */}
          <Routes>
            <Route path="/" element={<Intro />} />
            <Route path="/talks" element={<Talks />} />
          </Routes>
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
