import React from "react";
import Counter from "./components/Counter";
import "./components/style.css"; // נייבא את קובץ העיצוב

function App() {
  return (
    <div className="app">
      <h1>Counters</h1>
      <Counter index={1} />
      <Counter index={2} />
      <Counter index={3} />
      <Counter index={4} />
      <Counter index={5} />
    </div>
  );
}

export default App;
