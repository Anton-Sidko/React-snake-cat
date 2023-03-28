import { FC, useContext } from 'react';
import { GameContext } from '../../context/GameContext';
import { setDirection } from '../../context/reducer/actions';
import { Direction } from '../../models/types';
import Button from '../button/Button.component';

import { ControlBarWrapper } from './ControlBar.styles';

const ControlBar: FC = (): JSX.Element => {
  const [, dispatch] = useContext(GameContext);

  return (
    <ControlBarWrapper>
      <Button
        buttonText="⬅"
        buttonHandler={() => setDirection(dispatch, Direction.LEFT)}
      />
      <Button
        buttonText="⬆"
        buttonHandler={() => setDirection(dispatch, Direction.UP)}
      />
      <Button
        buttonText="⬇"
        buttonHandler={() => setDirection(dispatch, Direction.DOWN)}
      />

      <Button
        buttonText="➡"
        buttonHandler={() => setDirection(dispatch, Direction.RIGHT)}
      />
    </ControlBarWrapper>
  );
};

export default ControlBar;
