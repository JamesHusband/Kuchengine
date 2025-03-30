import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { gameEvents } from '@kuchen/engine';

type GameContextType = {
  currentScene: string;
};

const GameContext = createContext<GameContextType | undefined>(undefined);

export const GameProvider = ({ children }: { children: ReactNode }) => {
  const [currentScene, setCurrentScene] = useState('MainMenuScene');

  useEffect(() => {
    const handler = (scene: string) => setCurrentScene(scene);
    gameEvents.on('scene-change', handler);
    return () => {
      gameEvents.off('scene-change', handler);
    };
  }, []);

  return <GameContext.Provider value={{ currentScene }}>{children}</GameContext.Provider>;
};

export const useGame = (): GameContextType => {
  const context = useContext(GameContext);
  if (!context) throw new Error('useGame must be used within a GameProvider');
  return context;
};
