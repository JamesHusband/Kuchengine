import { ReactNode } from 'react';
import { useGameState } from '../hooks/useGameState/useGameState';
import { GameContext } from '../context';

export const GameProvider = ({ children }: { children: ReactNode }) => {
  const { currentScene } = useGameState();
  return <GameContext.Provider value={{ currentScene }}>{children}</GameContext.Provider>;
};
