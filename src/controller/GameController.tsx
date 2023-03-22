import { useContext } from 'react';
import { GameContext } from '../context/GameContext';
import {
  AUTO_SPEED_DELAY,
  MAX_SPEED_VALUE,
  MOVES_PER_SPAWN,
  MOVE_DELAY,
} from '../models/constants';
import { ActionType } from '../models/types';
import { useHandleDirection } from './useHandleDirection';
import { useIntervalAction } from './useIntervalAction';

export const GameController = function (): null {
  const [state] = useContext(GameContext);
  const { gameSpeed, isAutoSpeed } = state;
  const moveDelay = MOVE_DELAY / gameSpeed;

  // Stop auto add speed
  const reachMaxSpeed = gameSpeed === MAX_SPEED_VALUE;
  const autoSpeedDelay =
    !isAutoSpeed || reachMaxSpeed ? null : AUTO_SPEED_DELAY;

  // add event listener on keydown
  useHandleDirection();

  // add interval for game re-render
  useIntervalAction(ActionType.MOVE, moveDelay);
  useIntervalAction(ActionType.AUTO_ADD_SPEED, autoSpeedDelay);
  useIntervalAction(ActionType.SPAWN_FOOD, moveDelay * MOVES_PER_SPAWN);

  return null;
};
