import { useState } from "react";
import "./App.css";

function App() {
  const [mood, setMood] = useState("😊");

  const moods = {
    "😊": { text: "Happy", color: "#ffe066" },
    "😢": { text: "Sad", color: "#74c0fc" },
    "😡": { text: "Angry", color: "#ff6b6b" },
    "😴": { text: "Sleepy", color: "#c0eb75" }
  };

  return (
    <div
      style={{
        backgroundColor: moods[mood].color,
        height: "100vh",
        textAlign: "center",
        paddingTop: "100px",
      }}
    >
      <h1>Mood Tracker</h1>

      <h2 style={{ fontSize: "60px" }}>{mood}</h2>
      <p>You are feeling {moods[mood].text}</p>

      <div style={{ marginTop: "20px" }}>
        {Object.keys(moods).map((m) => (
          <button
            key={m}
            onClick={() => setMood(m)}
            style={{
              fontSize: "30px",
              margin: "10px",
              padding: "10px",
              cursor: "pointer",
            }}
          >
            {m}
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;
