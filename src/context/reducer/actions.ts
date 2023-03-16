import { ActionType } from '../../models/types';

export const setWall = (dispatch: React.Dispatch<any>) => {
  dispatch({
    type: ActionType.SET_WALL,
  });
};

export const setAutoSpeed = (dispatch: React.Dispatch<any>) => {
  dispatch({
    type: ActionType.SET_AUTO_SPEED,
  });
};

export const setSpeed = (
  e: React.ChangeEvent<HTMLInputElement>,
  dispatch: React.Dispatch<any>
) => {
  let speedValue = +e.target.value;

  if (speedValue < 1) {
    speedValue = 1;
  } else if (speedValue > 10) {
    speedValue = 10;
  }

  dispatch({
    type: ActionType.SET_SPEED,
    payload: speedValue,
  });
};

export const setFieldSize = (
  e: React.ChangeEvent<HTMLInputElement>,
  dispatch: React.Dispatch<any>
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
