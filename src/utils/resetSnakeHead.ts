import { SnakeSegment } from '../models/types';

export const resetSnakeHead = function (fieldSize: number): SnakeSegment {
  return {
    row: Math.floor(fieldSize / 2),
    col: Math.floor(fieldSize / 2),
  };
};
