import React, { FC, useContext } from 'react';

import { GameSettingsBar, SettingsWrap } from './SettingsBar.styles';

import Input from '../inputs/Input.component';
import { GameContext } from '../../context/GameContext';
import { GameStatus } from '../../models/types';
import {
  setAutoSpeed,
  setFieldSize,
  setSpeed,
  setWall,
} from '../../context/reducer/actions';

const SettingsBar: FC = (): JSX.Element => {
  const [state, dispatch] = useContext(GameContext);
  const { gameStatus, gameSpeed, fieldSize, isAutoSpeed, isWall } = state;
  const isPlaying =
    gameStatus === GameStatus.PLAYING || gameStatus === GameStatus.PAUSED;

  return (
    <GameSettingsBar>
      <h2>Game settings:</h2>

      <SettingsWrap>
        <Input
          type="checkbox"
          label="Wall"
          id="switch-wall"
          inputChangeHandler={() => setWall(dispatch)}
          disabled={isPlaying ? true : undefined}
          checked={isWall ? true : false}
        />

        <SettingsWrap>
          <Input
            type="number"
            inputMode="numeric"
            id="game-speed"
            min="1"
            max="10"
            value={gameSpeed}
            label="Speed"
            labelPosition="before"
            inputChangeHandler={e => setSpeed(e, dispatch)}
            disabled={isPlaying || isAutoSpeed ? true : undefined}
          />

          <Input
            type="checkbox"
            label="Auto"
            id="auto-speed"
            checked={isAutoSpeed ? true : false}
            inputChangeHandler={() => setAutoSpeed(dispatch)}
            disabled={isPlaying ? true : undefined}
          />
        </SettingsWrap>

        <Input
          type="range"
          id="field-size"
          min="5"
          max="15"
          value={fieldSize}
          label="Field size"
          labelPosition="before"
          inputChangeHandler={e => setFieldSize(e, dispatch)}
          disabled={isPlaying ? true : undefined}
        />
      </SettingsWrap>
    </GameSettingsBar>
  );
};

export default SettingsBar;
