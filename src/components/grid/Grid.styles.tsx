import styled from 'styled-components';

type GridContainerProps = {
  fieldSize: number;
};

export const GridWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 5rem;
`;

export const GridContainer = styled.div<GridContainerProps>`
  display: grid;

  ${({ fieldSize }) =>
    fieldSize &&
    `
    grid-template-columns: repeat(${fieldSize}, 1fr);
    grid-template-rows: repeat(${fieldSize}, 1fr);
  `}
`;
