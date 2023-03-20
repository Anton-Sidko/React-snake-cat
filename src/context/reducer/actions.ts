import { MAX_SPEED_VALUE } from '../../models/constants';
import { Action, ActionType } from '../../models/types';

export const setWall = (dispatch: React.Dispatch<Action>) => {
  dispatch({
    type: ActionType.SET_WALL,
  });
};

export const setAutoSpeed = (dispatch: React.Dispatch<Action>) => {
  dispatch({
    type: ActionType.SET_AUTO_SPEED,
  });
};

export const setSpeed = (
  e: React.ChangeEvent<HTMLInputElement>,
  dispatch: React.Dispatch<Action>
) => {
  let speedValue = +e.target.value;

  if (speedValue < 1) {
    speedValue = 1;
  } else if (speedValue > MAX_SPEED_VALUE) {
    speedValue = MAX_SPEED_VALUE;
  }

  dispatch({
    type: ActionType.SET_SPEED,
    payload: speedValue,
  });
};

export const setFieldSize = (
  e: React.ChangeEvent<HTMLInputElement>,
  dispatch: React.Dispatch<Action>
) => {
  let sizeValue = +e.target.value;

  if (sizeValue < 5) {
    sizeValue = 5;
  } else if (sizeValue > 15) {
    sizeValue = 15;
  }

  dispatch({
    type: ActionType.SET_FIELD_SIZE,
    payload: sizeValue,
  });
};

export const playGame = (dispatch: React.Dispatch<Action>) => {
  dispatch({
    type: ActionType.PLAY,
  });
};

export const playAgainGame = (dispatch: React.Dispatch<Action>) => {
  dispatch({
    type: ActionType.PLAY_AGAIN,
  });
};

export const pauseGame = (dispatch: React.Dispatch<Action>) => {
  dispatch({
    type: ActionType.PAUSE,
  });
};

export const stopGame = (dispatch: React.Dispatch<Action>) => {
  dispatch({
    type: ActionType.FINISH,
  });
};

export const restartGame = (dispatch: React.Dispatch<Action>) => {
  dispatch({
    type: ActionType.RESTART,
  });
};
