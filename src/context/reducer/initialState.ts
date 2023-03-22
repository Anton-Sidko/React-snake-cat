import { GameState, Direction, GameStatus } from '../../models/types';
import { buildGrid } from '../../utils/gridUtils';
import { resetSnakeHead } from '../../utils/resetSnakeHead';

const INITIAL_FIELD_SIZE = 10;
const INITIAL_SNAKE_HEAD = resetSnakeHead(INITIAL_FIELD_SIZE);

export const INITIAL_STATE: GameState = {
  direction: Direction.UP,
  gameStatus: GameStatus.IDLE,
  isWall: false,
  isAutoSpeed: true,
  gameSpeed: 3,
  fieldSize: INITIAL_FIELD_SIZE,
  gamePoints: 0,
  snakeHead: INITIAL_SNAKE_HEAD,
  grid: buildGrid(INITIAL_FIELD_SIZE, INITIAL_SNAKE_HEAD, []),
  food: [],
};
