import React, { useState } from "react";
import TicTacToe from "../games/TicTacToe/TicTacToe";
// import Minesweeper from "./Minesweeper";

const GamePage = () => {
  const [selectedGame, setSelectedGame] = useState(null);

  const games = [
    { name: "Tic-Tac-Toe", component: <TicTacToe /> },
    // { name: "Minesweeper", component: <Minesweeper /> },
  ];

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-1/4 bg-gray-800 text-white p-4">
        <h2 className="text-xl font-bold mb-4">Game List</h2>
        <ul>
          {games.map((game, index) => (
            <li
              key={index}
              className={`p-2 cursor-pointer hover:bg-gray-600 rounded ${
                selectedGame === game.name ? "bg-gray-600" : ""
              }`}
              onClick={() => setSelectedGame(game.name)}
            >
              {game.name}
            </li>
          ))}
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-4 flex justify-center items-center bg-gray-100">
        {selectedGame ? (
          games.find((game) => game.name === selectedGame)?.component
        ) : (
          <h2 className="text-2xl font-bold">Select a Game</h2>
        )}
      </div>
    </div>
  );
};

export default GamePage;
