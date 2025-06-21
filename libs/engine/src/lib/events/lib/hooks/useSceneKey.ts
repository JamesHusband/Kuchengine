import { useEffect, useState } from 'react';
import { eventBus } from '../../events';

export const useSceneKey = (): string | null => {
  const [sceneKey, setSceneKey] = useState<string | null>(null);

  useEffect(() => {
    const handleSceneStarted = (key: string) => {
      setSceneKey(key);
    };

    eventBus.on('scene-started', handleSceneStarted);

    return () => {
      eventBus.off('scene-started', handleSceneStarted);
    };
  }, []);

  return sceneKey;
};
