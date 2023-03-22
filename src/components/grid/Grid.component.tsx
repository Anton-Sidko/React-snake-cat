import { FC, useContext } from 'react';
import { GameContext } from '../../context/GameContext';
import { GameStatus } from '../../models/types';
import Cell from '../cell/Cell.component';
import { GridContainer, GridWrapper } from './Grid.styles';

const mapCells = function (
  grid: string[][],
  fieldSize: number,
  gameStatus: GameStatus
): JSX.Element[] {
  const cells: JSX.Element[] = [];

  for (let i = 0; i < fieldSize; i++) {
    for (let j = 0; j < fieldSize; j++) {
      cells.push(
        <Cell
          key={`[${i},${j}]`}
          content={grid[i][j]}
          gameStatus={gameStatus}
        />
      );
    }
  }

  return cells;
};

const Grid: FC = (): JSX.Element => {
  const [{ fieldSize, grid, isWall, gameStatus }] = useContext(GameContext);

  return (
    <GridWrapper>
      <GridContainer
        fieldSize={fieldSize}
        isWall={isWall}
      >
        {mapCells(grid, fieldSize, gameStatus)}
      </GridContainer>
    </GridWrapper>
  );
};

export default Grid;
