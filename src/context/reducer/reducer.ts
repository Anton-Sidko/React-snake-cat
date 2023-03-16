import {
  Action,
  ActionType,
  Direction,
  GameState,
  GameStatus,
} from '../../models/types';
import { INITIAL_STATE } from './initialState';

export const reducer = function (state: GameState, action: Action): GameState {
  switch (action.type) {
    case ActionType.SET_AUTO_SPEED:
      const isAutoSpeed = !state.isAutoSpeed;
      return { ...state, isAutoSpeed: isAutoSpeed };

    case ActionType.SET_WALL:
      const isWall = !state.isWall;
      return { ...state, isWall: isWall };

    case ActionType.SET_SPEED:
      return { ...state, gameSpeed: action.payload };

    case ActionType.SET_FIELD_SIZE:
      return { ...state, fieldSize: action.payload };

    case ActionType.PLAY:
      return { ...state, gameStatus: GameStatus.PLAYING };

    case ActionType.PAUSE:
      return { ...state, gameStatus: GameStatus.PAUSED };

    case ActionType.PLAY_AGAIN:
      return {
        ...state,
        gamePoints: 0,
        direction: Direction.UP,
        gameStatus: GameStatus.PLAYING,
      };

    case ActionType.RESTART:
      return { ...INITIAL_STATE, gameStatus: GameStatus.IDLE };

    case ActionType.FINISH:
      return { ...state, gameStatus: GameStatus.FINISHED };

    default:
      throw new Error(`Unknown action type ${action.type}`);
  }
};
