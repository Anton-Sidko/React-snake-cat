import { FC, useContext } from 'react';
import { GameContext } from '../../context/GameContext';
import { playAgainGame, restartGame } from '../../context/reducer/actions';
import Button from '../button/Button.component';

import { ModalWrapper, ModalBtnWrapper } from './FinishModal.styles';

const FinishModal: FC = (): JSX.Element => {
  const [{ gamePoints }, dispatch] = useContext(GameContext);

  return (
    <ModalWrapper>
      <h2>Game over!</h2>
      <div>Your top score: {gamePoints}.</div>
      <ModalBtnWrapper>
        <Button
          buttonText="Play again"
          buttonHandler={() => playAgainGame(dispatch)}
        />
        <Button
          buttonText="Restart game"
          buttonHandler={() => restartGame(dispatch)}
        />
      </ModalBtnWrapper>
    </ModalWrapper>
  );
};

export default FinishModal;
