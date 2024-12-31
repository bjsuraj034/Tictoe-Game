
import React, { useState } from 'react';
import cross_icon from '../assets/cross.png';
import circle_icon from '../assets/circle.png';

const Tictoe = () => {
  const [data, setData] = useState(["", "", "", "", "", "", "", "", ""]);
  const [count, setCount] = useState(0);
  const [lock, setLock] = useState(false);
  const [winner, setWinner] = useState(null); // Tracks the winner ("x" or "o")

  // Function to check for a winner
  const checkWinner = (board) => {
    const winningCombinations = [
      // Rows
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      // Columns
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      // Diagonals
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let combination of winningCombinations) {
      const [a, b, c] = combination;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a]; // Return the winner ("x" or "o")
      }
    }
    return null; // No winner
  };

  const toggle = (index) => {
    if (lock || data[index] !== "" || winner) {
      return; // Prevent modifying an already-filled cell or if the game is locked
    }

    const newData = [...data];
    newData[index] = count % 2 === 0 ? "x" : "o";
    setData(newData);
    setCount(count + 1);

    const currentWinner = checkWinner(newData); // Use only `currentWinner` here
    if (currentWinner) {
      setWinner(currentWinner); // Set the winner
      setLock(true); // Lock the board
    }
  };

  const resetGame = () => {
    setData(["", "", "", "", "", "", "", "", ""]); // Clear the board
    setCount(0); // Reset the move count
    setLock(false); // Unlock the board
    setWinner(null); // Clear the winner
  };

  return (
    <div className="relative min-h-[80vh] flex flex-col items-center justify-center">
      <div className="max-sm:w-[19rem] grid grid-cols-3 grid-rows-3 gap-2 w-96 h-96">
        {data.map((cell, index) => (
          <div
            key={index}
            onClick={() => toggle(index)}
            className="cell rounded-md flex items-center justify-center bg-gray-200 border text-2xl font-bold cursor-pointer"
          >
            {cell === "x" && <img src={cross_icon} alt="X" />}
            {cell === "o" && <img src={circle_icon} alt="O" />}
          </div>
        ))}
      </div>
      {winner && <div className="mt-4 text-2xl font-bold">Winner: {winner.toUpperCase()}!</div>}
      <button
        onClick={resetGame}
        className="bg-sky-400 px-6 py-2 rounded-2xl text-white mt-5"
      >
        Reset
      </button>
    </div>
  );
};

export default Tictoe;
