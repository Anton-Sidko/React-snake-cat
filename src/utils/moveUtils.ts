import { SCORE_INCREMENT } from '../models/constants';
import { CellType, GameState, GameStatus, SnakeSegment } from '../models/types';
import { buildGrid, getNextCell } from './gridUtils';

const moveSnake = function (state: GameState): SnakeSegment | null {
  const { fieldSize, snakeHead, grid, direction, isWall } = state;
  const { row, col } = snakeHead;
  const [newRow, newCol] = getNextCell(row, col, fieldSize, direction, isWall);

  if (!newRow || !newCol || grid[newRow][newCol] === CellType.SNAKE_BODY) {
    return null;
  }

  return moveSnakeSegment(snakeHead, newRow, newCol);
};

const moveSnakeSegment = function (
  segment: SnakeSegment,
  row: number,
  col: number
): SnakeSegment {
  return {
    row,
    col,
    next:
      segment.next && moveSnakeSegment(segment.next, segment.row, segment.col),
  };
};

const checkFoodEated = function (
  state: GameState,
  snakeHead: SnakeSegment
): 0 | 1 {
  const { food } = state;
  const { row, col } = snakeHead;
  const foodIndex = food.findIndex(f => f.row === row && f.col === col);

  if (foodIndex !== -1) {
    food.splice(foodIndex, 1);
    return 1;
  }

  return 0;
};

export const move = function (state: GameState): GameState {
  const { fieldSize, gamePoints, food } = state;
  const newSnakeHead = moveSnake(state);

  if (!newSnakeHead) {
    return { ...state, gameStatus: GameStatus.FINISHED };
  }

  const foodEated = checkFoodEated(state, newSnakeHead);

  return {
    ...state,
    snakeHead: newSnakeHead,
    grid: buildGrid(fieldSize, newSnakeHead, food),
    gamePoints: gamePoints + SCORE_INCREMENT * foodEated,
  };
};
