import React, { useState } from "react";

function App() {
  const [color, setColor] = useState("#f7f7f7");

  function generateColor() {
    const letters = "0123456789ABCDEF";
    let newColor = "#";
    for (let i = 0; i < 6; i++) {
      newColor += letters[Math.floor(Math.random() * 16)];
    }
    setColor(newColor);
  }

  return (
    <div>
      <h1 style={{ 
        color: "#333",
       textAlign: "center", 
       marginTop: 50
        }}>
        Random Color Generator
      </h1>
      <div 
      className="container"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: 50
        }}
      >
        <div
          className="color-box"
          id="colorBox"
          style={{
            width: 200,
            height: 200,
            marginBottom: 20,
            borderRadius: 10,
            boxShadow: "0 0 10px rgba(1, 0, 0, 0.3)",
            backgroundColor: color
          }}
        ></div>
        <div
          className="color-code"
          id="colorCode"
          style={{ color: "#333", fontSize: 24, marginBottom: 10 }}
        >
          {color}
        </div>
        <button
          onClick={() => generateColor()}
          style={{
            backgroundColor: "#333",
            color: "#fff",
            border: "none",
            padding: "10px 20px",
            borderRadius: 5,
            cursor: "pointer",
            transition: "background-color 0.2s ease-in-out"
          }}
        >
          Generate Random Color
        </button>
      </div>
    </div>
  );
}

export default App;
