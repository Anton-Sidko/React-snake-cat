import { FC } from 'react';

import { GameSettingsBar, SettingsWrap } from './settings-bar.styles';

import Input from '../inputs/input.component';

const SettingsBar: FC = (): JSX.Element => {
  return (
    <GameSettingsBar>
      <h2>Game settings:</h2>

      <SettingsWrap>
        <Input
          type="checkbox"
          label="Wall"
          id="switch-wall"
          inputChangeHandler={() => console.log('checkbox wall 🧱')}
        />

        <SettingsWrap>
          <Input
            type="number"
            id="game-speed"
            min="1"
            max="10"
            defaultValue={1}
            label="Speed"
            labelPosition="before"
            inputChangeHandler={e =>
              console.log(`${e.target.value} speed now 🔢`)
            }
          />

          <Input
            type="checkbox"
            label="auto"
            id="auto-speed"
            defaultChecked={true}
            inputChangeHandler={() => console.log('auto-speed 🅰')}
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
        />
      </SettingsWrap>
    </GameSettingsBar>
  );
};

export default SettingsBar;
