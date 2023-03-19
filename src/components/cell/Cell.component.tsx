import { FC, memo } from 'react';
import { CellType } from '../../models/types';
import { CellItem } from './Cell.styles';

// FIXIT
type CellProps = {
  // row: number;
  // col: number;
  content: string;
};

const Cell: FC<CellProps> = memo(({ content }): JSX.Element => {
  const isSnake = content !== CellType.EMPTY;

  return (
    <CellItem isSnake={isSnake}>
      {content === CellType.SNAKE_BODY ? '' : content}
    </CellItem>
  );
});

export default Cell;
