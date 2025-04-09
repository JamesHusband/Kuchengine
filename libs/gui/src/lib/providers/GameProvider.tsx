import { ReactNode } from 'react';
import { useGameState, GameContext } from '@kuchen/game';

export const GameProvider = ({ children }: { children: ReactNode }) => {
  const { currentScene } = useGameState();
  return <GameContext.Provider value={{ currentScene }}>{children}</GameContext.Provider>;
};
