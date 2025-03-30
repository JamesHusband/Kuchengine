import { useEffect } from 'react';
import { gameEvents } from '@kuchen/engine';

export const useSceneListener = (onSceneChange: (scene: string) => void) => {
  useEffect(() => {
    gameEvents.on('scene-change', onSceneChange);
    return () => {
      gameEvents.off('scene-change', onSceneChange);
    };
  }, [onSceneChange]);
};
