import { createContext } from 'react';

export type GameContextType = {
  currentScene: string;
};

export const GameContext = createContext<GameContextType | undefined>(undefined);
