export default function GameBoard({ onSelectSquare, board }) {
  // const [gameBoard, setGameBoard] = useState(initialGameBoard);

  // function handleSelectSquare(rowIndex, colndex) {
  //   setGameBoard((prevGameBoard) => {
  //     // prevGameBoard[rowIndex][colndex] = "X"
  //     // return prevGameBoard;  not recommended with arrays, objects as can lead to
  //     //bugs instead create a copy of prevGameBoard and do like this

  //     const updatedBoard = [...prevGameBoard.map((innerArray) => [...innerArray])];
  //     updatedBoard[rowIndex][colndex] = activePlayerSymbol;
  //     return updatedBoard;
  //   });

  //   onSelectSquare();
  // }

  return (
    <ol id="game-board">
      {board.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button
                  onClick={() => onSelectSquare(rowIndex, colIndex)}
                  disabled={playerSymbol !== null}
                >
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
