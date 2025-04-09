import { ReactNode } from 'react';
import { useGameState, GameContext } from '@engine/state';

export const GameProvider = ({ children }: { children: ReactNode }) => {
  const { currentScene } = useGameState();
  return <GameContext.Provider value={{ currentScene }}>{children}</GameContext.Provider>;
};
