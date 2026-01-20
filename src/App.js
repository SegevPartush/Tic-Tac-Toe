import { useState } from 'react';
import './App.css';

function App() {
  const [squares, setSquares] = useState([null, null, null, null, null, null, null, null, null]);
  const [isXTurn, setIsXTurn] = useState(true);

  function handleClick(i) {
    if (squares[i] !== null) {
      return;
    }
    
    const newSquares = squares.slice();
    if (isXTurn) {
      newSquares[i] = 'X';
    } else {
      newSquares[i] = 'O';
    }
    
    setSquares(newSquares);
    setIsXTurn(!isXTurn);
  }

  return (
    <div className="App">
      <h1>איקס עיגול</h1>
      <div className="status">
        {isXTurn ? 'התור של X' : 'התור של O'}
      </div>
      <div className="board">
        <button className="square" onClick={() => handleClick(0)}>
          {squares[0]}
        </button>
        <button className="square" onClick={() => handleClick(1)}>
          {squares[1]}
        </button>
        <button className="square" onClick={() => handleClick(2)}>
          {squares[2]}
        </button>
        <button className="square" onClick={() => handleClick(3)}>
          {squares[3]}
        </button>
        <button className="square" onClick={() => handleClick(4)}>
          {squares[4]}
        </button>
        <button className="square" onClick={() => handleClick(5)}>
          {squares[5]}
        </button>
        <button className="square" onClick={() => handleClick(6)}>
          {squares[6]}
        </button>
        <button className="square" onClick={() => handleClick(7)}>
          {squares[7]}
        </button>
        <button className="square" onClick={() => handleClick(8)}>
          {squares[8]}
        </button>
      </div>
    </div>
  );
}

export default App;
