import { createContext, ReactNode } from 'react';
import { GameContextType } from '../types';
import { useGameState } from '../../hooks';

const GameContext = createContext<GameContextType | undefined>(undefined);

export const GameProvider = ({ children }: { children: ReactNode }) => {
  const { currentScene } = useGameState();

  return <GameContext.Provider value={{ currentScene }}>{children}</GameContext.Provider>;
};
