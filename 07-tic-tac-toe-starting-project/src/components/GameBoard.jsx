import { useState } from 'react';

const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
];

export default function GameBoard() {
    const [gameBoard, setGameBoard] = useState(initialGameBoard);

    function handleCellClick(rowIndex, cellIndex) {
        const newGameBoard = gameBoard.map((row, rIndex) =>
            row.map((cell, cIndex) => (rIndex === rowIndex && cIndex === cellIndex ? 'X' : cell))
        );
        setGameBoard(newGameBoard);
    }

    return (
        <ol id="game-board">
            {initialGameBoard.map((row, rowIndex) => (
                <li key={rowIndex}>
                    <ol>
                        {row.map((playerSymbol, cellIndex) => (
                            <li key={cellIndex}>
                                <button onClick={() => handleCellClick(rowIndex, cellIndex)}>
                                    {playerSymbol}
                                </button>
                            </li>
                        ))}
                    </ol>
                </li>
            ))}
        </ol>
    );

}