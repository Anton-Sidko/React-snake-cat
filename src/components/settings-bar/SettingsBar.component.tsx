import { FC, useContext } from 'react';

import { GameSettingsBar, SettingsWrap } from './SettingsBar.styles';

import Input from '../inputs/Input.component';
import { GameContext } from '../../context/GameContext';
import { ActionType, GameStatus } from '../../models/types';

const SettingsBar: FC = (): JSX.Element => {
  const [state, dispatch] = useContext(GameContext);

  const setWall = () => {
    dispatch({
      type: ActionType.SET_WALL,
    });
  };

  const seAutoSpeed = () => {
    dispatch({
      type: ActionType.SET_AUTO_SPEED,
    });
  };

  const isPlaying = state.gameStatus === GameStatus.PLAYING;

  console.log(state);

  return (
    <GameSettingsBar>
      <h2>Game settings:</h2>

      <SettingsWrap>
        <Input
          type="checkbox"
          label="Wall"
          id="switch-wall"
          inputChangeHandler={setWall}
          disabled={isPlaying ? true : undefined}
        />

        <SettingsWrap>
          <Input
            type="number"
            inputMode="numeric"
            id="game-speed"
            min="1"
            max="10"
            defaultValue={1}
            label="Speed"
            labelPosition="before"
            inputChangeHandler={e =>
              console.log(`${e.target.value} speed now 🔢`)
            }
            disabled={isPlaying ? true : undefined}
          />

          <Input
            type="checkbox"
            label="Auto"
            id="auto-speed"
            defaultChecked={true}
            inputChangeHandler={seAutoSpeed}
            disabled={isPlaying ? true : undefined}
          />
        </SettingsWrap>

        <Input
          type="range"
          id="field-size"
          min="5"
          max="15"
          defaultValue={10}
          label="Field size"
          labelPosition="before"
          inputChangeHandler={e =>
            console.log(`${e.target.value} field size now ❎`)
          }
          disabled={isPlaying ? true : undefined}
        />
      </SettingsWrap>
    </GameSettingsBar>
  );
};

export default SettingsBar;
