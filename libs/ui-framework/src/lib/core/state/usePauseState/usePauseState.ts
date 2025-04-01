import { gameEvents } from '@kuchen/engine';
import { useEffect, useState } from 'react';

export const usePauseState = () => {
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const handlePause = () => setIsPaused(true);
    const handleResume = () => setIsPaused(false);
    const handleSceneChange = () => setIsPaused(false);

    gameEvents.on('game-paused', handlePause);
    gameEvents.on('game-resumed', handleResume);
    gameEvents.on('scene-change', handleSceneChange);

    return () => {
      gameEvents.off('game-paused', handlePause);
      gameEvents.off('game-resumed', handleResume);
      gameEvents.off('scene-change', handleSceneChange);
    };
  }, []);

  return isPaused;
};
