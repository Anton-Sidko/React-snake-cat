import styled, { css } from 'styled-components';

type CellItemProps = {
  isSnake?: boolean;
};

const snakeCellStyle = css`
  background-color: var(--accent-color);
  border: 1px solid var(--accent-color);
`;

export const CellItem = styled.div<CellItemProps>`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2.5rem;
  background-color: var(--bgc-light);
  border: 1px solid var(--bgc);

  ${({ isSnake }) => isSnake && snakeCellStyle}
`;
