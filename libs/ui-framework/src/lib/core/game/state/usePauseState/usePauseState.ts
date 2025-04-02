import { systemEvents, sceneEvents } from '@kuchen/engine';
import { useEffect, useState } from 'react';

export const usePauseState = () => {
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const handlePause = () => setIsPaused(true);
    const handleResume = () => setIsPaused(false);
    const handleSceneChange = () => setIsPaused(false);

    systemEvents.on('game-paused', handlePause);
    systemEvents.on('game-resumed', handleResume);
    sceneEvents.on('scene-change', handleSceneChange);

    return () => {
      systemEvents.off('game-paused', handlePause);
      systemEvents.off('game-resumed', handleResume);
      sceneEvents.off('scene-change', handleSceneChange);
    };
  }, []);

  return isPaused;
};
