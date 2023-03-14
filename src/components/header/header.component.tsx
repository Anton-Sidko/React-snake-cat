import { FC } from 'react';
import { GameHeader, GameTitle, GameSubTitle } from './header.styles';

const Header: FC = (): JSX.Element => {
  return (
    <GameHeader>
      <GameTitle>
        Snake cat<span>🐱</span>
      </GameTitle>
      <GameSubTitle>
        This is snake-game built with React and TypeScript
      </GameSubTitle>
    </GameHeader>
  );
};

export default Header;
