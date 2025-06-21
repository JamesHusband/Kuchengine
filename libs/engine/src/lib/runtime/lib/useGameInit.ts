import { useEffect } from 'react';
import { registerScenes } from '../../scene';
import { registerSceneChangeHandler } from '../../events';

import { getGame } from './game-instance';
import { destroyGame, initializeGame } from './game-lifecycle';

export const useGameInit = (containerRef: React.RefObject<HTMLDivElement | null>) => {
  useEffect(() => {
    if (!containerRef.current) return;
    if (getGame()) return;

    initializeGame(containerRef.current, {
      width: containerRef.current.clientWidth,
      height: containerRef.current.clientHeight,
      scenes: registerScenes(),
      onReady: (instance) => {
        registerSceneChangeHandler(instance);
      },
    });

    return () => {
      destroyGame();
    };
  }, []);
};
