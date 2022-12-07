import { useState } from 'react';
import './App.css';

function App() {
  const [number, setNumber] = useState(0);
  function randomNumberInRange(min, max) {
    // 👇️ get number between min (inclusive) and max (inclusive)
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const handleClick = () => {
    setNumber(randomNumberInRange(1, 5000));
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Random Number Generator</h1>
        <p>
          Random Number is: {number}
        </p>
        <button className='btn' onClick={handleClick}>Generate Random Number</button>
      </header>
    </div>
  );
}

export default App;
