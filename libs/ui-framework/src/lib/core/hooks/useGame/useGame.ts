import { useEffect, useRef, RefObject, useState } from 'react';
import { createGame, destroyGame } from '@kuchen/engine';
import type Phaser from 'phaser';

export type Scene = 'MainMenuScene' | 'GameScene';

export const useGame = (containerRef: RefObject<HTMLDivElement | null>) => {
  const initialized = useRef(false);
  const gameInstance = useRef<Phaser.Game | null>(null);
  const [currentScene, setCurrentScene] = useState<Scene>('MainMenuScene');

  useEffect(() => {
    if (!initialized.current && containerRef.current) {
      gameInstance.current = createGame(containerRef.current);
      gameInstance.current?.events?.on('sceneChanged', setCurrentScene);
      initialized.current = true;
    }

    return () => {
      gameInstance.current?.events?.off('sceneChanged', setCurrentScene);
      destroyGame();
      gameInstance.current = null;
      initialized.current = false;
    };
  }, [containerRef]);

  return { currentScene };
};
