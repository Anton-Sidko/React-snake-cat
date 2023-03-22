import { FC, memo } from 'react';
import { CellType, GameStatus } from '../../models/types';
import { CellItem } from './Cell.styles';

// FIXIT
type CellProps = {
  content: string;
  gameStatus: GameStatus;
};

const Cell: FC<CellProps> = memo(({ content, gameStatus }): JSX.Element => {
  const isSnake =
    content === CellType.SNAKE_BODY || content === CellType.SNAKE_HEAD;

  return (
    <CellItem
      isSnake={isSnake}
      gameStatus={gameStatus}
    >
      {content === CellType.SNAKE_BODY ? '' : content}
    </CellItem>
  );
});

export default Cell;
