import { useState } from 'react';

//TODO: show the coordinates in the history

function Square({value,onSquareClick,isWinner}) {
  
  
  return (
    <button
      className={`square ${isWinner ? 'winner' : ''}`}
      onClick={onSquareClick}
    >
      {value}
    </button>
  );
}

function calculateWinner(squares) {

  const lines = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [3,4,5],
    [6,7,8],
    [2,4,6]
  ]
  for(let i=0; i < lines.length; i++) {
    const [a,b,c] = lines[i];
    if(squares[a] && squares[a] === squares[b] && squares[b] === squares[c]) {
      return [a,b,c];
    } 
    
  }
  return null;
}

function Board({squares, xIsNext, onPlay}) {
 
  const handleClick = (i) => {
    if(calculateWinner(squares) || squares[i]) return;
    const nextSquares = squares.slice();
    if(xIsNext) {
      nextSquares[i] = 'X';
    } else {
      nextSquares[i] = 'O';
    }
   onPlay(nextSquares, i)
  }
  let status;
  const winner = calculateWinner(squares);
  if(winner && winner.length > 0) {
    status = 'Winner: '+ squares[winner[0]];
  } else {
    const isBoardFull = squares.every(square => square);
    if(isBoardFull) {
      status = 'Draw';
      setSquares(Array(9).fill(null));
      setXIsNext(true);
    } else {
      status = `Next player: ${xIsNext ? 'X' : 'O'}`;
    }
  }
  return (
    <>
     <h1>TicTacToe</h1>
     <div>{status}</div> 
     <br />
      {[0, 1, 2].map(i => (
        <div key={i} className="board-row">
          {[0, 1, 2].map(j => (
            <Square key={i*3+j} value={squares[i*3+j]} isWinner={winner && winner.includes(i*3+j)} onSquareClick={() => handleClick(i*3+j)} />
          ))}
        </div>
      ))}
    </>
  );
}

export default function Game() {
  
  const [history, setHistory] = useState([Array(9).fill(null)]);
   const [currentMove, setCurrentMove] = useState(0);
   const currentSquares = history[currentMove];
   const xIsNext = currentMove % 2 === 0;
  const handlePlay =(nextSquares, i) => { 
    const nextHistory = [...history.slice(0, currentMove+1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length-1);
  }
  const jumpTo = (nextMove) => {
    setCurrentMove(nextMove);
  }
  const moves = history.map((squares, move) => { 
    const desc = move ? 'Go to move #' + move : 'Go to game start';
    console.log(history[move]);
    return (
      <li key={move}>
        {move === currentMove ? <p>You are at move# {move}</p>: <button onClick={() => jumpTo(move)}>{desc}</button>}
      </li>
    );
  });


  return (
    <div className="game">
      <div className="game-board">
        <Board  xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay}/>
      </div>
      <div className='game-info'>
        <ol>{moves}</ol>
      </div>
    </div>
  );
}
