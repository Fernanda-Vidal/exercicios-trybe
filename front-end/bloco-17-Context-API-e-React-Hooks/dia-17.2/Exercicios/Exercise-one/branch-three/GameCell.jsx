import React from 'react';
import './GameCell.css';
import xImage from './x.png';
import oImage from './o.svg';

function GameCell(props) {
  const { content, onClick, id } = props;

  if (content === 1) {
    return (
      <div
          data-testid={`cell_${id}`}
          className="game-cell"
          onClick={onClick}
          role="button"
          tabIndex="0"
          aria-label="Cell"
          onKeyPress={onClick}
        >
          <img data-testid={`cell_${id}_image`} alt="X" src={xImage} />
        </div>
    )
  }
  if (content === 2) {
    return (
      <div
          data-testid={`cell_${id}`}
          className="game-cell"
          onClick={onClick}
          role="button"
          tabIndex="0"
          aria-label="Cell"
          onKeyPress={onClick}
        >
          <img data-testid={`cell_${id}_image`} alt="O" src={oImage} />
        </div>
    )
  }
  return (
    <div
      role="button"
      tabIndex="0"
      aria-label="Cell"
      onKeyPress={onClick}
      data-testid={`cell_${id}`}
      className="game-cell"
      onClick={onClick}
    />
  );
}

export default GameCell;