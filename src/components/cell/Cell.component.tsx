import { FC, memo } from 'react';
import { CellType } from '../../models/types';
import { CellItem } from './Cell.styles';

// FIXIT
type CellProps = {
  content: string;
};

const Cell: FC<CellProps> = memo(({ content }): JSX.Element => {
  const isSnake =
    content === CellType.SNAKE_BODY || content === CellType.SNAKE_HEAD;

  return (
    <CellItem isSnake={isSnake}>
      {content === CellType.SNAKE_BODY ? '' : content}
    </CellItem>
  );
});

export default Cell;
