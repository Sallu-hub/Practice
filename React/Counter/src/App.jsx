import './App.css';
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  // Increase handler
  function handleIncrement() {
    setCount(count + 1);
  }

  // Decrease handler 
  function handleDecrement() {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  return (
    <>
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Count</h1>

      <h2>{count}</h2>

      <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
        <button onClick={handleDecrement} style={{ fontSize: "20px" }}>-</button>
        <button onClick={handleIncrement} style={{ fontSize: "20px" }}>+</button>
      </div>
    </div>
    </>
  );
}x

export default App;
