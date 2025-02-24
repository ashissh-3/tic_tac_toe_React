
import Square from "./Square"
import "./style.css"
import CalculateWinner from "./CalculateWinner"

function Board({squares, xIsNext}) {

function handleClick(i) {
    if(squares[i] || CalculateWinner(squares)) {
        return;
    }

    const nextSquares = Square.slice();
    nextSquares[i] = xIsNext ? 'X' : 'O';
    onplay(nextSquares)
}

    return (
         <div>
            <div className="board-row">
                <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
                <Square value={squares[1]} nSquareClick={() => handleClick(1)} />
                <Square value={squares[2]} nSquareClick={() => handleClick(2)} />
            </div>
            <div className="board-row">
                <Square value={squares[3]} nSquareClick={() => handleClick(3)} />
                <Square value={squares[4]} nSquareClick={() => handleClick(4)} />
                <Square value={squares[5]} nSquareClick={() => handleClick(5)} />
            </div>
            <div className="board-row">
                <Square value={squares[6]} nSquareClick={() => handleClick(6)} />
                <Square value={squares[7]} nSquareClick={() => handleClick(7)} />
                <Square value={squares[8]} nSquareClick={() => handleClick(8)} />
            </div>
         </div>
    )
}

export default Board