import {
  GameState,
  Direction,
  GameStatus,
  SnakeSegment,
} from '../../models/types';
import { buildGrid } from '../../utils/gridUtils';

const INITIAL_FIELD_SIZE = 10;
const INITIAL_SNAKE_HEAD: SnakeSegment = {
  row: Math.floor(INITIAL_FIELD_SIZE / 2),
  col: Math.floor(INITIAL_FIELD_SIZE / 2),
};

export const INITIAL_STATE: GameState = {
  direction: Direction.UP,
  gameStatus: GameStatus.IDLE,
  isWall: false,
  isAutoSpeed: true,
  gameSpeed: 1,
  fieldSize: INITIAL_FIELD_SIZE,
  gamePoints: 0,
  snakeHead: INITIAL_SNAKE_HEAD,
  grid: buildGrid(INITIAL_FIELD_SIZE, INITIAL_SNAKE_HEAD, []),
  food: [],
};
