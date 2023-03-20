import { useContext } from 'react';
import { GameContext } from '../context/GameContext';
import { ActionType, GameStatus } from '../models/types';
import { useInterval } from './useInterval';

export const useIntervalAction = function (
  actionType: ActionType,
  moveDelay: number | null
) {
  const [state, dispatch] = useContext(GameContext);
  const isPlaying = state.gameStatus === GameStatus.PLAYING;

  // Stop all if not playing
  let delay = isPlaying ? moveDelay : null;

  useInterval(() => dispatch({ type: actionType }), delay);
};
