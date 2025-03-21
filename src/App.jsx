import { useEffect, useState } from "react";
import Playground from "./Playground";
import "./App.css";
import WinGrid from "./WinGrid";
import Circle from "./components/Circle";
import Cross from "./components/Cross";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import { FaReact } from "react-icons/fa";

function App() {
  const [isGameRunning, setIsGameRunning] = useState(false);
  const [game, setGame] = useState(() => Array(3).fill(Array(3).fill(null)));
  const [currentPlayer, setCurrentPlayer] = useState("cross");
  const [winner, setWinner] = useState(null);

  useEffect(() => {
    for (let i = 0; i < 3; i++) {
      if (
        game[i][0] === game[i][1] &&
        game[i][1] === game[i][2] &&
        game[i][0] !== null
      ) {
        setWinner({ type: currentPlayer, where: "row_" + i });
        return;
      }
    }
    for (let j = 0; j < 3; j++) {
      if (
        game[0][j] === game[1][j] &&
        game[1][j] === game[2][j] &&
        game[0][j] !== null
      ) {
        setWinner({ type: currentPlayer, where: "col_" + j });
        return;
      }
    }
    if (
      game[0][0] === game[1][1] &&
      game[1][1] === game[2][2] &&
      game[0][0] !== null
    ) {
      setWinner({ type: currentPlayer, where: "leading" });
      return;
    }

    if (
      game[0][2] === game[1][1] &&
      game[1][1] === game[2][0] &&
      game[0][2] !== null
    ) {
      setWinner({ type: currentPlayer, where: "non_leading" });
      return;
    }

    setCurrentPlayer(currentPlayer === "circle" ? "cross" : "circle");
  }, [game]);
  return (
    <>
      <div
        id="restart"
        onClick={() => {
          setGame(Array(3).fill(Array(3).fill(null)));
          setCurrentPlayer("cross");
          setWinner(null);
          setIsGameRunning(false);
        }}
      >
        <RestartAltIcon sx={{ fontSize: 40, padding: "1rem" }} />
      </div>
      <div id="title">
        <div>TIC-TAC-TOE</div>
        <FaReact />
      </div>
      <div id="playarea">
        {isGameRunning && (
          <div class={`turn ${currentPlayer === "cross" && "active"}`}>
            <Cross />
          </div>
        )}
        {isGameRunning ? (
          <Playground currentPlayer={currentPlayer} setGame={setGame} />
        ) : (
          <div id="start">
            <div onClick={() => setIsGameRunning(true)} id="start_button">
              start
            </div>
          </div>
        )}
        {isGameRunning && (
          <div class={`turn ${currentPlayer === "circle" && "active"}`}>
            <Circle />
          </div>
        )}

        {winner && <WinGrid where={winner.where} />}
      </div>
      {winner && (
        <div id="win_info">
          <div>The Winner is :</div>{" "}
          {winner.type === "circle" ? <Circle /> : <Cross />}{" "}
        </div>
      )}
    </>
  );
}

export default App;
