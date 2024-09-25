import React, { useState, useEffect } from "react";
import Square from "./Square";

const BotBoard = () => {
  const [state, setState] = useState(Array(9).fill(null));
  const [isXTurn, setIsXTurn] = useState(true);

  // Updated handleClick
  const handleClick = (index) => {
    if (state[index] !== null || checkWinner()) {
      return;
    }
    const copyState = [...state];
    copyState[index] = "X"; // Player is always "X"
    setState(copyState);
    setIsXTurn(false); // Set it to false so the bot can play
  };

  // useEffect to trigger bot's move
useEffect(() => {
    if (!isXTurn) {
        const timer = setTimeout(() => {
            handleBotPlay();
        }, 1000); // 1 second delay

        return () => clearTimeout(timer); // Cleanup the timeout if the component unmounts or if isXTurn changes
    }
}, [isXTurn]);

  const generateRandomNumber = () => {
    return Math.floor(Math.random() * 9);
  };
  // Updated handleBotPlay
  const handleBotPlay = () => {
    if (checkWinner() || state.every((square) => square !== null)) return;
    do {
      let randomNumber = generateRandomNumber();
      if (state[randomNumber] === null) {
        const copyState = [...state];
        copyState[randomNumber] = "O"; // Bot is always "O"
        setState(copyState);
        setIsXTurn(true); // After bot plays, it's player's turn
        console.log(randomNumber);
        break;
      }
    } while (true);
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
        if (state[a] === 'X') return 'You'
        else return 'Bot'
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
          <h2 className="board-turn-text">
            {isXTurn ? "Yours" : "Bot's"} Turn
          </h2>
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

export default BotBoard;
