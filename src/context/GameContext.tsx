import { createContext, useReducer, Dispatch } from 'react';
import { Action, GameState, ProviderProps } from '../models/types';
import { INITIAL_STATE } from './reducer/initialState';
import { reducer } from './reducer/reducer';

type GameContextType = [GameState, Dispatch<Action>];

const defaultValue: any = null;
export const GameContext = createContext<GameContextType>(defaultValue);

export const GameContextProvider = function ({
  children,
}: ProviderProps): JSX.Element {
  const value = useReducer(reducer, INITIAL_STATE);

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
};
