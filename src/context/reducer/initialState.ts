import { GameState, Direction, GameStatus } from '../../models/types';

export const INITIAL_STATE: GameState = {
  direction: Direction.UP,
  gameStatus: GameStatus.IDLE,
  isWall: false,
  isAutoSpeed: true,
  gameSpeed: 1,
  fieldSize: 10,
  gamePoints: 0,
};
