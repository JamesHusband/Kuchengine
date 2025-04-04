import { useEffect } from 'react';
import { sceneEvents } from '@core/events';

export const useSceneListener = (onSceneChange: (scene: string) => void) => {
  useEffect(() => {
    sceneEvents.on('scene-change', onSceneChange);
    return () => {
      sceneEvents.off('scene-change', onSceneChange);
    };
  }, [onSceneChange]);
};
