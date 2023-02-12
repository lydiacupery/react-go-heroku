import React from "react";
import me3 from "./assets/me3.png";
import "./App.css";
import PingComponent from "./PingComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome! I'm Lydia.</h1>
        <img
          style={{
            borderRadius: "50%",
            objectFit: "cover",
            width: 300,
            height: 300,
          }}
          src={me3}
          alt="Lydia"
        />
        <p>I build software.</p>
        <PingComponent />
      </header>
    </div>
  );
}

export default App;
