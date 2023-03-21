import { FOOD } from '../models/constants';
import { CellType, Food, GameState } from '../models/types';
import { buildGrid } from './gridUtils';
import { generateRandomInt, getRandomArrayElement } from './randomGenerator';

export const spawnNewFood = function (state: GameState): GameState {
  const { fieldSize, snakeHead, food, grid } = state;

  let isBusyCell = true;
  let newFoodRow = 0;
  let newFoodCol = 0;

  while (isBusyCell) {
    newFoodRow = generateRandomInt(0, fieldSize - 1);
    newFoodCol = generateRandomInt(0, fieldSize - 1);

    if (grid[newFoodRow][newFoodCol] === CellType.EMPTY) {
      isBusyCell = false;
    }
  }

  const randomFoodItem: Food = {
    row: newFoodRow,
    col: newFoodCol,
    character: getRandomArrayElement(FOOD),
  };

  return {
    ...state,
    food: [...food, randomFoodItem],
    grid: buildGrid(fieldSize, snakeHead, food),
  };
};
