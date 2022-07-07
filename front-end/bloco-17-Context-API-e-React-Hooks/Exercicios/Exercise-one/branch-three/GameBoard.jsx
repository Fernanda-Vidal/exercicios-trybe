import React from 'react';
import GameCell from './GameCell';
import './GameBoard.css';

function GameBoard(props) {
  const { gameState, updateGame } = props;
  return (
    <div className="game-board">
    {gameState.map((playerId, i) => (
      <GameCell
        id={i}
        key={i}
        onClick={() => updateGame(i)}
        content={playerId}
      />
    ))}
  </div>
  )
}


export default GameBoard;