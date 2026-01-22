import { useState } from 'react';
import './App.css';

function App() {
  const [squares, setSquares] = useState([null, null, null, null, null, null, null, null, null]);
  const [isXTurn, setIsXTurn] = useState(true);

  function checkWinner(squares) {
    if (squares[0] === squares[1] && squares[1] === squares[2] && squares[0] !== null) {
      return squares[0];
    }
    if (squares[3] === squares[4] && squares[4] === squares[5] && squares[3] !== null) {
      return squares[3];
    }
    if (squares[6] === squares[7] && squares[7] === squares[8] && squares[6] !== null) {
      return squares[6];
    }
    if (squares[0] === squares[3] && squares[3] === squares[6] && squares[0] !== null) {
      return squares[0];
    }
    if (squares[1] === squares[4] && squares[4] === squares[7] && squares[1] !== null) {
      return squares[1];
    }
    if (squares[2] === squares[5] && squares[5] === squares[8] && squares[2] !== null) {
      return squares[2];
    }
    if (squares[0] === squares[4] && squares[4] === squares[8] && squares[0] !== null) {
      return squares[0];
    }
    if (squares[2] === squares[4] && squares[4] === squares[6] && squares[2] !== null) {
      return squares[2];
    }
    return null;
  }

  function handleClick(i) {
    if (squares[i] !== null) {
      return;
    }
    
    const winner = checkWinner(squares);
    if (winner !== null) {
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

  function resetGame() {
    setSquares([null, null, null, null, null, null, null, null, null]);
    setIsXTurn(true);
  }

  const winner = checkWinner(squares);
  
  let isDraw = false;
  if (winner === null) {
    if (squares[0] !== null && squares[1] !== null && squares[2] !== null &&
        squares[3] !== null && squares[4] !== null && squares[5] !== null &&
        squares[6] !== null && squares[7] !== null && squares[8] !== null) {
      isDraw = true;
    }
  }

  let statusText = '';
  if (winner !== null) {
    statusText = 'Winner: ' + winner;
  } else if (isDraw) {
    statusText = 'Draw!';
  } else {
    if (isXTurn) {
      statusText = 'Next: X';
    } else {
      statusText = 'Next: O';
    }
  }

  return (
    <div className="App">
      <h1 className="logo">
        <span className="letter">T</span>
        <span className="letter">i</span>
        <span className="letter">c</span>
        <span className="letter x-color">X</span>
        <span className="letter">T</span>
        <span className="letter">a</span>
        <span className="letter">c</span>
        <span className="letter o-color">O</span>
        <span className="letter">e</span>
      </h1>
      <div className="status">
        {statusText}
      </div>
      <div className="board">
        <button type="button" className="square" onClick={() => handleClick(0)}>
          {squares[0]}
        </button>
        <button type="button" className="square" onClick={() => handleClick(1)}>
          {squares[1]}
        </button>
        <button type="button" className="square" onClick={() => handleClick(2)}>
          {squares[2]}
        </button>
        <button type="button" className="square" onClick={() => handleClick(3)}>
          {squares[3]}
        </button>
        <button type="button" className="square" onClick={() => handleClick(4)}>
          {squares[4]}
        </button>
        <button type="button" className="square" onClick={() => handleClick(5)}>
          {squares[5]}
        </button>
        <button type="button" className="square" onClick={() => handleClick(6)}>
          {squares[6]}
        </button>
        <button type="button" className="square" onClick={() => handleClick(7)}>
          {squares[7]}
        </button>
        <button type="button" className="square" onClick={() => handleClick(8)}>
          {squares[8]}
        </button>
      </div>
      <button type="button" className="reset-btn" onClick={resetGame}>
        Reset Game
      </button>
      <div className="credits">
        © SegevPartush & Ofir Raz
      </div>
    </div>
  );
}

export default App;
