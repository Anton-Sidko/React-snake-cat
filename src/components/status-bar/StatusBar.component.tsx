import { FC, useContext } from 'react';
import { GameContext } from '../../context/GameContext';
import {
  pauseGame,
  playAgainGame,
  playGame,
  restartGame,
} from '../../context/reducer/actions';

import { Action, GameStatus } from '../../models/types';
import Button from '../button/Button.component';

import { StatusWrap } from './StatusBar.styles';

const StatusBar: FC = (): JSX.Element => {
  const [state, dispatch] = useContext(GameContext);
  const { gamePoints, gameSpeed, gameStatus } = state;
  let gameAction: string,
    gameActionHandler: (dispatch: React.Dispatch<Action>) => void =
      function () {};

  switch (gameStatus) {
    case GameStatus.IDLE:
      gameAction = 'Start';
      gameActionHandler = playGame;
      break;
    case GameStatus.FINISHED:
      gameAction = 'Play again';
      gameActionHandler = playAgainGame;
      break;
    case GameStatus.PLAYING:
      gameAction = 'Pause';
      gameActionHandler = pauseGame;
      break;
    case GameStatus.PAUSED:
      gameAction = 'Resume';
      gameActionHandler = playGame;
      break;
    default:
      throw new Error(`Unknown game status: ${gameStatus}`);
  }

  return (
    <StatusWrap>
      <h3>Current point: {gamePoints}</h3>
      <h3>Current speed: {gameSpeed}</h3>
      <Button
        buttonText={gameAction}
        buttonHandler={() => gameActionHandler(dispatch)}
      />
      <Button
        buttonText="Restart game"
        buttonHandler={() => restartGame(dispatch)}
      />
    </StatusWrap>
  );
};

export default StatusBar;
