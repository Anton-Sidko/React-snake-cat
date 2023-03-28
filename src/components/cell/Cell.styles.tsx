import styled, { css } from 'styled-components';
import { GameStatus } from '../../models/types';

type CellItemProps = {
  isSnake?: boolean;
  gameStatus: GameStatus;
};

const snakeCellStyle = css`
  background-color: var(--accent-color);
  border: 1px solid var(--accent-color);
`;

export const CellItem = styled.div<CellItemProps>`
  aspect-ratio: 1 / 1;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: min(3.8vw, 3rem);
  background-color: var(--bgc-light);
  border: 1px solid var(--bgc);

  ${({ isSnake }) => isSnake && snakeCellStyle}

  ${({ isSnake, gameStatus }) =>
    gameStatus === GameStatus.FINISHED &&
    !isSnake &&
    `
      background-color: var(--bgc-game-over);
    `}
`;
