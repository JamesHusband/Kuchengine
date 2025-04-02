import { useEffect, useRef, RefObject, useState } from 'react';
import { createInstance, destroyInstance } from '@kuchen/engine';
import type Phaser from 'phaser';

export type Scene = 'MainMenuScene' | 'GameScene';

export const useGame = (containerRef: RefObject<HTMLDivElement | null>) => {
  const initialized = useRef(false);
  const gameInstance = useRef<Phaser.Game | null>(null);
  const [currentScene, setCurrentScene] = useState<Scene>('MainMenuScene');

  useEffect(() => {
    if (!initialized.current && containerRef.current) {
      gameInstance.current = createInstance(containerRef.current);
      gameInstance.current?.events?.on('sceneChanged', setCurrentScene);
      initialized.current = true;
    }

    return () => {
      gameInstance.current?.events?.off('sceneChanged', setCurrentScene);
      destroyInstance();
      gameInstance.current = null;
      initialized.current = false;
    };
  }, [containerRef]);

  return { currentScene };
};
