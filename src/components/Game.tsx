/* eslint-disable react/no-array-index-key */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useState, VFC } from 'react';
import Board from './Board';
import Moves from './Moves';
import { History, SqDisplay } from '../interface';
import calculateWinner from '../calc/calculate_winner';

const Game: VFC = () => {
  const [history, setHistory] = useState<History[]>([
    { squares: Array(9).fill(null) },
  ]);
  const [xIsNext, setXisNext] = useState<boolean>(true);
  const [stepNumber, setStepNumber] = useState<number>(0);

  const handleClick = (i: number): void => {
    const newHistory = history.slice(0, stepNumber + 1);
    const current = newHistory[newHistory.length - 1];
    const squares: SqDisplay[] = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = xIsNext ? 'X' : 'O';
    setHistory(newHistory.concat([{ squares }]));
    setXisNext(!xIsNext);
    setStepNumber(newHistory.length);
  };

  const current = history[stepNumber];

  const winner = calculateWinner(current.squares);

  const jumpTo = (step: number) => {
    setStepNumber(step);
    setXisNext(step % 2 === 0);
  };

  const status: string = winner
    ? `Winner: ${winner}`
    : `Next player: ${xIsNext ? 'X' : 'O'}`;

  return (
    <div className="game">
      <div className="game-board">
        <Board
          squares={current.squares}
          handleClick={(i: number) => handleClick(i)}
        />
      </div>
      <div className="game-info">
        <div>{status}</div>
        <Moves history={history} jumpTo={jumpTo} />
      </div>
    </div>
  );
};

export default Game;
