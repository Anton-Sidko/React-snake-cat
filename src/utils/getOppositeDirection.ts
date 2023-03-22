import { Direction } from '../models/types';

export const getOppositeDirection = function (direction: Direction): Direction {
  switch (direction) {
    case Direction.DOWN:
      return Direction.UP;
    case Direction.UP:
      return Direction.DOWN;
    case Direction.LEFT:
      return Direction.RIGHT;
    case Direction.RIGHT:
      return Direction.LEFT;
    default:
      throw new Error('Unknown direction');
  }
};
