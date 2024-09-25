import React from "react";
import { useState } from "react";

import Header from "./Header";
import Board from "./Board";
import BotBoard from "./BotBoard";

const Choice = () => {
  const [gamePlay, setGamePlay] = useState("");
  console.log(gamePlay)
  return (
    <>
      {gamePlay === "" ? (
        <div className="container">
          <h1>Choose Gameplay!</h1>
          <button className="singlePlayer-btn" onClick={() => setGamePlay("single")}>
            Single Player
          </button>
          <button className="multiplayer-btn" onClick={() => setGamePlay("multi")}>Multi Player</button>
        </div>
      ) : (
        <>
        {gamePlay === 'single' ? (
            <div className="App">
            <Header text="TicTacToe Single Player" />
            <BotBoard />
            <button className="home-btn" onClick={() => setGamePlay("")}>
              Home
            </button>
          </div>
        ) : (
        <div className="App">
            <Header text="TicTacToe MultiPlayer" />
            <Board />
            <button className="home-btn" onClick={() => setGamePlay("")}>
              Home
            </button>
          </div>
        )}
        </>
      )}
    </>
  );
};

export default Choice;
