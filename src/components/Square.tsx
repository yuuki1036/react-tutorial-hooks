/* eslint-disable react/button-has-type */
import { VFC } from 'react';
import { SqDisplay } from '../interface';

type Props = {
  value: SqDisplay;
  onClick: () => void;
};

const Square: VFC<Props> = ({ value, onClick }) => (
  <button type="button" className="square" onClick={() => onClick()}>
    {value}
  </button>
);

export default Square;
