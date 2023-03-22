import { SCORE_INCREMENT } from '../models/constants';
import {
  CellType,
  Food,
  GameState,
  GameStatus,
  SnakeSegment,
} from '../models/types';
import { buildGrid, getNextCell } from './gridUtils';

const moveSnake = function (state: GameState): SnakeSegment | null {
  const { fieldSize, snakeHead, grid, direction, isWall } = state;
  const { row, col } = snakeHead;
  const [newRow, newCol] = getNextCell(row, col, fieldSize, direction, isWall);

  if (
    newRow === null ||
    newCol === null ||
    grid[newRow][newCol] === CellType.SNAKE_BODY
  ) {
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
  oldSnakeHead: SnakeSegment,
  snakeHead: SnakeSegment
): [number, Food[]] {
  const { food } = state;
  const { row, col } = snakeHead;
  const foodIndex = food.findIndex(f => f.row === row && f.col === col);

  let newGamePoints = 0;
  let newFood = [...food];

  if (foodIndex !== -1) {
    newGamePoints = SCORE_INCREMENT;
    newFood = [...food.slice(0, foodIndex), ...food.slice(foodIndex + 1)];
  }

  if (newGamePoints === 0) {
    return [0, newFood];
  }

  return [newGamePoints, newFood];
};

export const move = function (state: GameState): GameState {
  const { fieldSize, gamePoints, snakeHead, food } = state;
  const newSnakeHead = moveSnake(state);

  if (!newSnakeHead) {
    return { ...state, gameStatus: GameStatus.FINISHED };
  }

  const [scoreInc, newFood] = checkFoodEated(state, snakeHead, newSnakeHead);

  if (!scoreInc) {
    return {
      ...state,
      snakeHead: newSnakeHead,
      grid: buildGrid(fieldSize, newSnakeHead, food),
    };
  }

  return {
    ...state,
    snakeHead: newSnakeHead,
    gamePoints: gamePoints + scoreInc,
    food: newFood,
    grid: buildGrid(fieldSize, newSnakeHead, newFood),
  };
};
