import { ReactNode } from 'react';

export interface ProviderProps {
  children: ReactNode;
}

export enum GameStatus {
  IDLE = 'idle',
  PLAYING = 'playing',
  PAUSED = 'paused',
  FINISHED = 'finished',
}
export enum Direction {
  UP = 'up',
  DOWN = 'down',
  LEFT = 'left',
  RIGHT = 'right',
}

export enum ActionType {
  PLAY = 'play',
  PAUSE = 'pause',
  FINISH = 'finish',
  PLAY_AGAIN = 'play_again',
  RESTART = 'restart',
  MOVE = 'move',
  SPAWN_FOOD = 'spawn_FOOD',
  SET_DIRECTION = 'set_direction',
  SET_WALL = 'set_wall',
  SET_SPEED = 'set-speed',
  SET_AUTO_SPEED = 'set_auto_speed',
  SET_FIELD_SIZE = 'set_field_size',
}

export interface Action {
  type: ActionType;
  payload?: any;
}

export interface GameState {
  direction: Direction;
  gameStatus: GameStatus;
  isWall: boolean;
  isAutoSpeed: boolean;
  gameSpeed: number;
  fieldSize: number;
  gamePoints: number;
  grid: string[][];
}

export enum CellType {
  EMPTY = '',
  SNAKE_BODY = 's',
  SNAKE_HEAD = '😺',
}

export interface SnakeSegment {
  row: number;
  col: number;
  next?: SnakeSegment;
}

export interface Food {
  row: number;
  col: number;
  character: string;
}
