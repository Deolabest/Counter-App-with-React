import React, { useState } from 'react';
import './style.css';

function App() {
  const [counter, setCounter] = useState(0);

  // Increment
  const handleIncrement = (e) => {
    e.preventDefault();
    setCounter((prev) => prev + 1);
  };

  // Decrement
  const handleDecrement = (e) => {
    e.preventDefault();
    setCounter((prev) => prev - 1);
  };

  return (
    <section className="counter-container">
      <div className="counter-label">{counter}</div>
      <button className="btn" onClick={handleIncrement}>
        Increment
      </button>
      <button className="btn" onClick={handleDecrement}>
        Decrement
      </button>
    </section>
  );
}

export default App;
