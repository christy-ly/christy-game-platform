import React, { useState } from "react";
import HexButton from "../components/HexButton";
import TicTacToe from "../games/TicTacToe/TicTacToe";
// import Minesweeper from "./Minesweeper";

const GamePage = () => {
  const [selectedGame, setSelectedGame] = useState(null);

  const games = [
    { name: "Tic-Tac-Toe", component: <TicTacToe /> },
    { name: "Coming Soon...", component: null },
    { name: "Coming Soon...", component: null },
    { name: "Coming Soon...", component: null },
    { name: "Coming Soon...", component: null },
    { name: "Coming Soon...", component: null },
  ];

  return (
    <div>
      <div className="p-4 relative">
        <div className="flex w-max gap-4 ">
          {[...games].map((game, index) => (
            <div key={index} className="flex items-center justify-center">
              <HexButton
                text={game.name}
                onClickAction={() => setSelectedGame(game.name)}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex p-2 justify-center items-center border-8 border-double border-primary">
        <h2 className="text-2xl font-bold">
          {selectedGame
            ? games.find((game) => game.name === selectedGame)?.name
            : "Select A Game"}
        </h2>
      </div>
      {selectedGame &&
        games.find((game) => game.name === selectedGame)?.component &&
        games.find((game) => game.name === selectedGame)?.component}
    </div>
  );
};

export default GamePage;
