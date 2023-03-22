import { useContext } from 'react';
import { GameContext } from '../context/GameContext';
import { setDirection } from '../context/reducer/actions';
import { Direction, GameStatus } from '../models/types';
import { useKeyDown } from './useKeyDown';

export const useHandleDirection = function () {
  const [state, dispatch] = useContext(GameContext);
  const isPlaying = state.gameStatus === GameStatus.PLAYING;

  useKeyDown((buttonKey: string) => {
    if (!isPlaying) {
      return;
    }

    switch (buttonKey) {
      case 'ArrowUp':
        setDirection(dispatch, Direction.UP);
        break;
      case 'ArrowDown':
        setDirection(dispatch, Direction.DOWN);
        break;
      case 'ArrowLeft':
        setDirection(dispatch, Direction.LEFT);
        break;
      case 'ArrowRight':
        setDirection(dispatch, Direction.RIGHT);
        break;
    }
  });
};
