import { FC, useContext } from 'react';
import { GameContext } from '../../context/GameContext';
import Cell from '../cell/Cell.component';
import { GridContainer, GridWrapper } from './Grid.styles';

const mapCells = function (grid: string[][], fieldSize: number): JSX.Element[] {
  const cells: JSX.Element[] = [];

  for (let i = 0; i < fieldSize; i++) {
    for (let j = 0; j < fieldSize; j++) {
      cells.push(
        <Cell
          key={`[${i},${j}]`}
          content={grid[i][j]}
        />
      );
    }
  }

  return cells;
};

const Grid: FC = (): JSX.Element => {
  const [{ fieldSize, grid }] = useContext(GameContext);

  return (
    <GridWrapper>
      <GridContainer fieldSize={fieldSize}>
        {mapCells(grid, fieldSize)}
      </GridContainer>
    </GridWrapper>
  );
};

export default Grid;
