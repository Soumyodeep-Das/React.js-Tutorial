import React, { useState } from "react";
import Square from "./Square";

const Board = () => {
  const [state, setState] = useState(Array(9).fill(null));
  const [isXTurn, setIsXTurn] = useState(true);

  const handleClick = (index) => {
    if (state[index] !== null || checkWinner()) {
      return;
    }
    const copyState = [...state];
    copyState[index] = isXTurn ? "X" : "O";
    setState(copyState);
    setIsXTurn(!isXTurn);
  };

  const checkWinner = () => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (state[a] && state[a] === state[b] && state[a] === state[c]) {
        return state[a];
      }
    }
    if (state.every((square) => square !== null)) {
      return "Draw";
    }
    return false;
  };

  const handleReset = () => {
    setState(Array(9).fill(null));
    setIsXTurn(true);
  };

  let gameEnd = checkWinner();
  return (
    <div className="board-container">
      {gameEnd ? (
        <>
          {gameEnd === "Draw" ? (
            <h1>It's a Draw!</h1>
          ) : (
            <h1>{gameEnd} Won the game</h1>
          )}
          <button onClick={handleReset} className="reset-btn">
            Play Again
          </button>
        </>
      ) : (
        <>
          <h2 className="board-turn-text">{isXTurn ? "X" : "O"}'s Turn</h2>
          <div className="board-row">
            <Square onClick={() => handleClick(0)} value={state[0]} />
            <Square onClick={() => handleClick(1)} value={state[1]} />
            <Square onClick={() => handleClick(2)} value={state[2]} />
          </div>

          <div className="board-row">
            <Square onClick={() => handleClick(3)} value={state[3]} />
            <Square onClick={() => handleClick(4)} value={state[4]} />
            <Square onClick={() => handleClick(5)} value={state[5]} />
          </div>

          <div className="board-row">
            <Square onClick={() => handleClick(6)} value={state[6]} />
            <Square onClick={() => handleClick(7)} value={state[7]} />
            <Square onClick={() => handleClick(8)} value={state[8]} />
          </div>
        </>
      )}
    </div>
  );
};

export default Board;
