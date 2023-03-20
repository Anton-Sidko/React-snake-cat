import { useContext } from 'react';
import { GameContext } from '../context/GameContext';
import {
  AUTO_SPEED_DELAY,
  MAX_SPEED_VALUE,
  MOVE_DELAY,
} from '../models/constants';
import { ActionType } from '../models/types';
import { useIntervalAction } from './useIntervalAction';

export const GameController = function (): null {
  const [state] = useContext(GameContext);
  const { gameSpeed, isAutoSpeed } = state;
  const moveDelay = MOVE_DELAY / gameSpeed;

  // Stop auto add speed
  const reachMaxSpeed = gameSpeed === MAX_SPEED_VALUE;
  const autoSpeedDelay =
    !isAutoSpeed || reachMaxSpeed ? null : AUTO_SPEED_DELAY;

  console.log('render controller 🎮');

  useIntervalAction(ActionType.AUTO_ADD_SPEED, autoSpeedDelay);

  return null;
};
