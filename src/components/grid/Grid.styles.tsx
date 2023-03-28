import styled from 'styled-components';

type GridContainerProps = {
  fieldSize: number;
  isWall: boolean;
};

export const GridWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 3vh;
`;

export const GridContainer = styled.div<GridContainerProps>`
  display: grid;
  border: min(3vw, 15px) solid transparent;

  ${({ fieldSize }) =>
    fieldSize &&
    `
    grid-template-columns: repeat(${fieldSize}, 1fr);
    grid-template-rows: repeat(${fieldSize}, 1fr);
    `}

  ${({ isWall }) =>
    isWall &&
    `
      border: min(3vw, 15px) solid var(--border-color);
    `}
`;
