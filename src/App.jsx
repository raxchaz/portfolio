// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#f6f6f6",
        color: "#222",
        padding: "24px",
      }}
    >
      <div style={{ maxWidth: "720px" }}>
        <p
          style={{
            fontSize: "14px",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            opacity: 0.6,
          }}
        >
          itsme · Associate Product Manager
        </p>
        <h1
          style={{
            fontSize: "28px",
            lineHeight: 1.4,
            margin: "8px 0 12px",
            letterSpacing: -1,
          }}
        >
          포트폴리오 제작부터 시작해 볼게요.
        </h1>
        <p
          style={{
            fontSize: "15px",
            lineHeight: 1.7,
            opacity: 0.8,
            letterSpacing: -0.5,
          }}
        >
          I wonder how long it will take me to finish this portfolio.
        </p>
      </div>
    </div>
  );
}

export default App;
