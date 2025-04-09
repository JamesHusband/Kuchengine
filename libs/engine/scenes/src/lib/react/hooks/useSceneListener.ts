import { useEffect } from 'react';
import { sceneEvents } from '@engine/events';

export const useSceneListener = (onSceneChange: (scene: string) => void) => {
  useEffect(() => {
    sceneEvents.on('scene-change', onSceneChange);
    return () => {
      sceneEvents.off('scene-change', onSceneChange);
    };
  }, [onSceneChange]);
};
