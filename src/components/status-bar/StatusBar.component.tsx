import { FC, useContext } from 'react';
import { GameContext } from '../../context/GameContext';
import { ActionType, GameStatus } from '../../models/types';

const StatusBar: FC = (): JSX.Element => {
  const [state, dispatch] = useContext(GameContext);
  const { gamePoints, gameSpeed, isWall, isAutoSpeed, fieldSize, gameStatus } =
    state;
  let gameAction: string,
    gameActionHandler: () => void = function () {};

  // FIXIT
  const stopGame = () => {
    dispatch({
      type: ActionType.FINISH,
    });
  };

  const restartGame = () => {
    dispatch({
      type: ActionType.RESTART,
    });
  };

  switch (gameStatus) {
    case GameStatus.IDLE:
      gameAction = 'Start';
      gameActionHandler = () => {
        dispatch({
          type: ActionType.PLAY,
        });
      };
      break;
    case GameStatus.FINISHED:
      gameAction = 'Play again';
      gameActionHandler = () => {
        dispatch({
          type: ActionType.PLAY_AGAIN,
        });
      };
      break;
    case GameStatus.PLAYING:
      gameAction = 'Pause';
      gameActionHandler = () => {
        dispatch({
          type: ActionType.PAUSE,
        });
      };
      break;
    case GameStatus.PAUSED:
      gameAction = 'Resume';
      gameActionHandler = () => {
        dispatch({
          type: ActionType.PLAY,
        });
      };
      break;
    default:
      throw new Error(`Unknown game status: ${gameStatus}`);
  }

  return (
    <div>
      <h3>Current point: {gamePoints}</h3>
      <h3>Current speed: {gameSpeed}</h3>
      <h3>Auto speed: {isAutoSpeed ? 'true' : 'false'}</h3>
      <h3>Wall on: {!isWall ? 'false' : 'true'}</h3>
      <h3>field Size: {fieldSize}</h3>
      <h3>gameStatus: {gameStatus}</h3>
      <button onClick={gameActionHandler}>{gameAction}</button>
      <button onClick={restartGame}>Restart game</button>

      {/* FIXIT */}
      <button onClick={stopGame}>Stop game</button>
    </div>
  );
};

export default StatusBar;
