import { MAX_SPEED_VALUE } from '../../models/constants';
import {
  Action,
  ActionType,
  Direction,
  GameState,
  GameStatus,
} from '../../models/types';
import { getOppositeDirection } from '../../utils/getOppositeDirection';
import { buildGrid } from '../../utils/gridUtils';
import { move } from '../../utils/moveUtils';
import { resetSnakeHead } from '../../utils/resetSnakeHead';
import { spawnNewFood } from '../../utils/spawnNewFood';
import { INITIAL_STATE } from './initialState';

export const reducer = function (state: GameState, action: Action): GameState {
  switch (action.type) {
    case ActionType.SET_AUTO_SPEED:
      const isAutoSpeed = !state.isAutoSpeed;
      if (isAutoSpeed) {
        return { ...state, gameSpeed: 1, isAutoSpeed: isAutoSpeed };
      }
      return { ...state, isAutoSpeed: isAutoSpeed };

    case ActionType.SET_WALL:
      const isWall = !state.isWall;
      return { ...state, isWall: isWall };

    case ActionType.SET_SPEED:
      return { ...state, gameSpeed: action.payload };

    case ActionType.AUTO_ADD_SPEED:
      let newSpeedValue = state.gameSpeed + 1;

      if (newSpeedValue > MAX_SPEED_VALUE) {
        return { ...state };
      }
      return { ...state, gameSpeed: newSpeedValue };

    case ActionType.SET_FIELD_SIZE:
      const newFieldSize = action.payload;
      const newSnakeHead = resetSnakeHead(newFieldSize);
      return {
        ...state,
        fieldSize: newFieldSize,
        snakeHead: newSnakeHead,
        grid: buildGrid(newFieldSize, newSnakeHead, []),
      };

    case ActionType.PLAY:
      return { ...state, gameStatus: GameStatus.PLAYING };

    case ActionType.PAUSE:
      return { ...state, gameStatus: GameStatus.PAUSED };

    case ActionType.PLAY_AGAIN:
      const curFieldSize = state.fieldSize;
      const curSnakeHead = resetSnakeHead(curFieldSize);
      return {
        ...state,
        direction: Direction.UP,
        gameStatus: GameStatus.IDLE,
        gamePoints: 0,
        snakeHead: curSnakeHead,
        grid: buildGrid(curFieldSize, curSnakeHead, []),
      };

    case ActionType.RESTART:
      return { ...INITIAL_STATE };

    case ActionType.FINISH:
      return { ...state, gameStatus: GameStatus.FINISHED };

    case ActionType.MOVE:
      return move(state);

    case ActionType.SPAWN_FOOD:
      return spawnNewFood(state);

    case ActionType.SET_DIRECTION:
      const newDirection = action.payload;
      if (state.direction === getOppositeDirection(newDirection)) {
        return { ...state };
      }
      return { ...state, direction: newDirection };

    default:
      throw new Error(`Unknown action type ${action.type}`);
  }
};
