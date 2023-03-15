import { Action, ActionType, GameState } from '../../models/types';

export const reducer = function (state: GameState, action: Action): GameState {
  switch (action.type) {
    case ActionType.SET_AUTO_SPEED:
      const isAutoSpeed = !state.isAutoSpeed;
      console.log('auto-speed 🅰' + isAutoSpeed);
      return { ...state, isAutoSpeed: isAutoSpeed };
    case ActionType.SET_WALL:
      const isWall = !state.isWall;
      console.log('REDUCER checkbox wall 🧱' + isWall);
      return { ...state, isWall: isWall };
    default:
      throw new Error(`Unknown action type ${action.type}`);
  }
};
