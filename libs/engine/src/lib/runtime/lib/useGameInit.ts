import { useEffect } from 'react';
import { registerSceneChangeHandler, registerScenes } from '@kuchen/engine';
import { getGame } from './game-instance';
import { destroyGame, initializeGame } from './game-lifecycle';

export const useGameInit = (containerRef: React.RefObject<HTMLDivElement | null>) => {
  useEffect(() => {
    if (!containerRef.current) return;
    if (getGame()) return;

    initializeGame(containerRef.current, {
      scenes: registerScenes(),
      onReady: (instance) => {
        console.info('Game Ready');
        registerSceneChangeHandler(instance);
      },
    });

    return () => {
      destroyGame();
    };
  }, []);
};
