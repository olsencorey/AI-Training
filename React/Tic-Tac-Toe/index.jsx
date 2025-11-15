const { useState } = React;

export function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const [winner, setWinner] = useState(null);

  const calculateWinner = (sq) => {
    const lines = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6]
    ];
    for (let line of lines) {
      const [a, b, c] = line;
      if (sq[a] && sq[a] === sq[b] && sq[a] === sq[c]) {
        return sq[a];
      }
    }
    return null;
  };

  const isDraw = squares.every(Boolean) && !winner;

  const handleClick = (i) => {
  // If square already filled, do nothing
     if (squares[i] || winner || isDraw) return;
     
     const nextSquares = squares.slice();
     nextSquares[i] = xIsNext ? "X" : "O";
     setSquares(nextSquares);
     const win = calculateWinner(nextSquares);
     if (win) setWinner(win);
     setXIsNext(!xIsNext);
  };

  const handleReset = () => {
    setSquares(Array(9).fill(null));
    setWinner(null);
    setXIsNext(true);
  };

  // helper to render a square
  const renderSquare = (index) => {
    return  (
      <button 
        className="square" 
        key={index}
        onClick={() => handleClick(index)}
      >
        {squares[index] === "X" && <span className="redX">X</span>}
        {squares[index] === "O" && <span className="blueO">O</span>}
      </button>
    );
  };

  let message;
  if (winner) {
    message = (
      <strong 
        className={`winner-text ${winner === "X" ? "redX" : "blueO"}`}
      >
        Winner: {winner}
      </strong>
    );
  } else if (isDraw) {
    message = <strong className="draw-text">Draw</strong>;
  } else {
    message = (
      <span>
        Next move:{" "}
        <span className={xIsNext ? "redX" : "blueO"}>
          {xIsNext ? "X" : "O"}
        </span>
      </span>
    );
  }

  return (
    <div className="ttt-wrapper">
      <div className="board">
        <div className="board-row">
          {renderSquare(0)}{renderSquare(1)}{renderSquare(2)}
        </div>
        <div className="board-row">
          {renderSquare(3)}{renderSquare(4)}{renderSquare(5)}
        </div>
        <div className="board-row">
          {renderSquare(6)}{renderSquare(7)}{renderSquare(8)}
        </div>
      </div>
      <div className="message-area">
        {message}
      </div>
      <button
        id="reset"
        onClick={handleReset}
      >
        Reset
      </button>
    </div>
  );
}
