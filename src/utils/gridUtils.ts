import { CellType, Food, SnakeSegment } from '../models/types';

export const buildGrid = function (
  rows: number,
  cols: number,
  snakeHead: SnakeSegment,
  food: Food[]
): string[][] {
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
