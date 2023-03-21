import { SCORE_INCREMENT } from '../models/constants';
import { CellType, GameState, GameStatus, SnakeSegment } from '../models/types';
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
): number {
  const { food } = state;
  const { row, col } = snakeHead;
  const foodIndex = food.findIndex(f => f.row === row && f.col === col);
  let foodEated = 0;
  // let segment: SnakeSegment | undefined = snakeHead;

  console.log({ foodIndex });

  if (foodIndex > 0) {
    console.log({ foodIndex });
    foodEated++;
    food.splice(foodIndex, 1);
    console.log('eat');
    // return 10;
  }
  // while (segment) {
  //   const { row, col } = segment;
  //   const index = food.findIndex(veg => {
  //     return veg.row === row && veg.col === col;
  //   });
  //   if (index !== -1) {
  //     foodEated++;
  //     food.splice(index, 1);
  //   }
  //   // tail = segment;
  //   segment = segment.next;
  // }

  if (foodEated === 0) {
    console.log('toys');
    return 0;
  }
  return 1;
};

export const move = function (state: GameState): GameState {
  const { fieldSize, gamePoints, snakeHead, food } = state;
  const newSnakeHead = moveSnake(state);

  if (!newSnakeHead) {
    return { ...state, gameStatus: GameStatus.FINISHED };
  }

  const foo0dEated = checkFoodEated(state, snakeHead, newSnakeHead);
  // console.log({
  //   // checkFoodEated: checkFoodEated(state, snakeHead, newSnakeHead),
  //   foo0dEated,
  // });

  let newGamePoints = 0;
  if (foo0dEated) {
    newGamePoints = gamePoints + SCORE_INCREMENT * 1;
  }

  // console.log({ newGamePoints });

  // console.log(
  //   { gamePoints: gamePoints + SCORE_INCREMENT * foodEated },
  //   { gamePoints },
  //   { newGamePoints }
  // );

  return {
    ...state,
    snakeHead: newSnakeHead,
    gamePoints: newGamePoints,
    grid: buildGrid(fieldSize, newSnakeHead, food),
  };
};
