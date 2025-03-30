import { createContext, useContext, ReactNode } from 'react';
import { GameContextType } from '../types';
import { useGameState } from '../../hooks/useGame/useGameState/useGameState';

const GameContext = createContext<GameContextType | undefined>(undefined);

export const GameProvider = ({ children }: { children: ReactNode }) => {
  const { currentScene } = useGameState();

  return <GameContext.Provider value={{ currentScene }}>{children}</GameContext.Provider>;
};

export const useGame = (): GameContextType => {
  const context = useContext(GameContext);
  if (!context) throw new Error('useGame must be used within a GameProvider');
  return context;
};
