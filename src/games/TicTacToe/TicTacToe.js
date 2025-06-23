import React, { useState } from "react";
import "./TicTacToe.css";

const TicTacToe = () => {
  const SYMBOL_X = "X";
  const SYMBOL_O = "O";
  const gridSize = 3;
  const winLength = 3;
  const [grid, setGrid] = useState(Array(gridSize * gridSize).fill(null));
  const [currentTurn, setCurrentTurn] = useState(SYMBOL_X);
  const [winnerLine, setWinnerLine] = useState([]);
  const [winner, setWinner] = useState(null);

  const resetGame = () => {
    setGrid(Array(gridSize * gridSize).fill(null));
    setCurrentTurn(SYMBOL_X);
    setWinner(null);
  };

  const drawSymbol = (index) => {
    if (winner || grid[index]) return;

    // Draw a symbol on the cell
    grid[index] = currentTurn;
    setGrid(grid);

    // Check if win
    checkWin(grid);
    if (winner) return;

    // Make a new turn
    setCurrentTurn(currentTurn === SYMBOL_X ? SYMBOL_O : SYMBOL_X);
  };

  // Generate all possible winning patterns
  const generateWinPatterns = () => {
    let patterns = [];

    // Find all winning horizontal lines
    for (let row = 0; row < gridSize; row++) {
      for (let col = 0; col <= gridSize - winLength; col++) {
        patterns.push(
          [...Array(winLength)].map((val, idx) => row * gridSize + col + idx)
        );
      }
    }

    // Find all winning vertical lines
    for (let col = 0; col < gridSize; col++) {
      for (let row = 0; row <= gridSize - winLength; row++) {
        patterns.push(
          [...Array(winLength)].map((val, idx) => (row + idx) * gridSize + col)
        );
      }
    }

    // Find all winning diagonal lines
    for (let row = 0; row <= gridSize - winLength; row++) {
      for (let col = 0; col <= gridSize - winLength; col++) {
        patterns.push(
          [...Array(winLength)].map(
            (val, idx) => (row + idx) * gridSize + col + idx
          )
        );
        patterns.push(
          [...Array(winLength)].map(
            (val, idx) => (row + idx) * gridSize + col + winLength - 1 - idx
          )
        );
      }
    }
    return patterns;
  };

  const checkWin = (grid) => {
    const winPatterns = generateWinPatterns();

    // Compare the current marks with the winning patterns
    for (let pattern of winPatterns) {
      // Get the cell from the grid
      // Example: pattern = [0,1,2], marks = ['X','X','X']
      const cells = pattern.map((val) => grid[val]);
      // Check if all marks are the same
      if (cells.every((val) => val && val === cells[0])) {
        setWinner(cells[0]);
        setWinnerLine(pattern);
      }
    }
  };

  const renderGameScreen = () => {
    return (
      <div className="block ">
        {
          <>
            {winner ? (
              <p className="text-4xl font-bold text-center text-secondary">
                Winner: {winner}
              </p>
            ) : (
              <p className="text-2xl font-bold text-center">
                Turn: {currentTurn}
              </p>
            )}
            <div
              className="grid-container"
              style={{ gridTemplateColumns: `repeat(${gridSize}, 100px)` }}
            >
              {grid.map((mark, idx) => (
                <button
                  key={idx}
                  className={`cell ${
                    winner && winnerLine.includes(idx) ? "winning-line" : ""
                  }`}
                  onClick={() => drawSymbol(idx)}
                >
                  {mark}
                </button>
              ))}

              <div className="hash-line horizontal-1"></div>
              <div className="hash-line horizontal-2"></div>
              <div className="hash-line vertical-1"></div>
              <div className="hash-line vertical-2"></div>
            </div>

            <div className="flex justify-center items-center">
              <button
                className="px-6 py-3 bg-secondary text-white text-lg font-bold rounded hover:bg-yellow-700"
                onClick={resetGame}
              >
                Restart
              </button>
            </div>
          </>
        }
      </div>
    );
  };

  return <div className="items-center space-y-4 p-4">{renderGameScreen()}</div>;
};

export default TicTacToe;
