/* eslint-disable react/no-array-index-key */
/* eslint-disable arrow-body-style */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { VFC } from 'react';
import Square from './Square';
import { SqDisplay } from '../interface';

type Props = {
  squares: SqDisplay[];
  handleClick: (idx: number) => void;
};

const Board: VFC<Props> = ({ squares, handleClick }) => (
  <div>
    {[...Array(3)].map((_, i) => {
      return (
        <div className="board-row" key={i}>
          {[...Array(3)].map((__, j) => {
            const idx = 3 * i + j;

            return (
              <Square
                value={squares[idx]}
                onClick={() => handleClick(idx)}
                key={idx}
              />
            );
          })}
        </div>
      );
    })}
  </div>
);

export default Board;
