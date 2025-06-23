import React, { useState } from "react";
import HexButton from "../components/HexButton";
import TicTacToe from "../games/TicTacToe/TicTacToe";

const GamePage = () => {
  const [selectedGame, setSelectedGame] = useState(null);

  const games = [
    { name: "Tic-Tac-Toe", component: <TicTacToe /> },
    { name: "Coming Soon 1", component: null },
  ];

  return (
    <div className="flex flex-col md:flex-row mx-[5vh] my-[5vh] h-auto md:h-[80vh]">
      <div className="flex-col items-center w-full md:w-2/5">
        {games.map((game, index) => (
          <div key={index}>
            <HexButton
              text={game.name}
              onClickAction={() => setSelectedGame(game.name)}
            />
          </div>
        ))}
      </div>

      <div className="relative w-full md:w-3/5 flex flex-col justify-center items-center border-8 border-double border-primary p-4 h-[40vh] md:h-auto overflow-auto">
        <h2 className="text-center text-sm md:text-2xl font-bold break-words">
          {selectedGame &&
          games.find((game) => game.name === selectedGame)?.component
            ? games.find((game) => game.name === selectedGame)?.component
            : "Select a Game"}
        </h2>
      </div>
    </div>
  );
};

export default GamePage;
