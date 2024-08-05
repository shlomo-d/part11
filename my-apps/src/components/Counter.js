import React, { useState } from 'react';
import './style.css'; // נייבא את קובץ העיצוב

function Counter({ index }) {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + index);
  const decrement = () => setCount(count - index);
  const reset = () => setCount(0);

  return (
    <div className="counter">
      <h2>Counter #{index}</h2>
      <p>{count}</p>
      <button onClick={increment}>INC</button>
      <button onClick={decrement}>DEC</button>
      <button onClick={reset}>RST</button>
    </div>
  );
}

export default Counter;