/* eslint-disable react/no-array-index-key */
import { VFC } from 'react';
import { History } from '../interface';

type Props = {
  history: History[];
  jumpTo: (move: number) => void;
};

const Moves: VFC<Props> = ({ history, jumpTo }) => (
  <ol>
    {history.map((_, move) => {
      const desc = move ? `go to move #${move}` : `go to game start`;

      return (
        <li key={move}>
          <button type="button" onClick={() => jumpTo(move)}>
            {desc}
          </button>
        </li>
      );
    })}
  </ol>
);

export default Moves;
