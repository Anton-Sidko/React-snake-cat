import {
  CellIndex,
  CellType,
  Direction,
  Food,
  SnakeSegment,
} from '../models/types';

export const buildGrid = function (
  fieldSize: number,
  snakeHead: SnakeSegment,
  food: Food[]
): string[][] {
  const rows = fieldSize,
    cols = fieldSize;
  // create 2 dimensional empty grid
  const grid = new Array<string[]>();

  for (let row = 0; row < rows; row++) {
    grid.push(new Array<string>(cols).fill(''));
  }

  // add to grid snake body and head
  let segment: SnakeSegment | undefined = snakeHead;
  while (segment) {
    const { row, col } = segment;
    grid[row][col] = CellType.SNAKE_BODY;
    segment = segment.next;
  }

  // coordinates snake head from arguments
  const { row: headRow, col: headCol } = snakeHead;
  grid[headRow][headCol] = CellType.SNAKE_HEAD;

  // add food to grid
  for (const f of food) {
    grid[f.row][f.col] = f.character;
  }

  return grid;
};

export const getNextCell = function (
  row: number,
  col: number,
  fieldSize: number,
  direction: Direction,
  isWall: boolean
): CellIndex {
  let newRow: number | null = row;
  let newCol: number | null = col;

  switch (direction) {
    case Direction.LEFT:
      newCol = col > 0 ? col - 1 : isWall ? null : fieldSize - 1;
      break;
    case Direction.RIGHT:
      newCol = col < fieldSize - 1 ? col + 1 : isWall ? null : 0;
      break;
    case Direction.DOWN:
      newRow = row < fieldSize - 1 ? row + 1 : isWall ? null : 0;
      break;
    case Direction.UP:
      newRow = row > 0 ? row - 1 : isWall ? null : fieldSize - 1;
      break;

    default:
      break;
  }

  return [newRow, newCol];
};

export const findTail = function (head: SnakeSegment): SnakeSegment {
  let tail = head;

  while (tail.next) {
    tail = tail.next;
  }

  return tail;
};
