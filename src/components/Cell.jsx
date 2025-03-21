import React, { useEffect, useRef, useState } from "react";
import Cross from "./Cross";
import Circle from "./Circle";

const Cell = ({ setGame, currentPlayer, index }) => {
  const type = useRef(null);

  return (
    <div
      className="cell"
      onClick={() => {
        setGame((prevGame) => {
          if (prevGame[Math.floor(index / 3)][index % 3] === null) {
            let newGame = JSON.parse(JSON.stringify(prevGame));
            newGame[Math.floor(index / 3)][index % 3] = currentPlayer;
            type.current = currentPlayer;
            return newGame;
          }
          return prevGame;
        });
      }}
    >
      {type.current === null ? (
        ""
      ) : type.current === "circle" ? (
        <Circle />
      ) : (
        <Cross />
      )}
    </div>
  );
};

export default Cell;
