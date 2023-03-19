import styled, { css } from 'styled-components';

type CellItemProps = {
  isSnake?: boolean;
};

const snakeCellStyle = css`
  background-color: #2b27;
  border: 1px solid #2b2;
`;

export const CellItem = styled.div<CellItemProps>`
  width: 40;
  height: 40;
  display: 'flex';
  justify-content: 'center';
  align-items: 'center';
  font-size: '2em';
  background-color: #fff;
  border: 1px solid #ddd;

  ${({ isSnake }) => isSnake && snakeCellStyle}
`;
