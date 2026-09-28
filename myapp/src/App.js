import React, { useState } from "react";

function Display({ text }) {
  return <h2>{text}</h2>;
}

function App() {
  const [text, setText] = useState("");
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <Display text={text} />

      <input
        onChange={(e) => setText(e.target.value)}
        style={{ padding: "6px", width: "250px" }}
      />

      <br /><br />

      <h2>Counter: {count}</h2>

      <div>
        <button onClick={() => setCount(count - 1)} style={{ padding: "10px 20px", marginRight: "20px", fontSize: "20px" }}>
          -
        </button>

        <button onClick={() => setCount(count + 1)} style={{ padding: "10px 20px", fontSize: "20px" }}>
          +
        </button>
      </div>
    </div>
  );
}

export default App;