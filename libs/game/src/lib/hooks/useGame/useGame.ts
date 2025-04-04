import { useEffect, useRef, useState } from 'react';
import { createInstance, shutdownInstance } from '@core/instance';
import type Phaser from 'phaser';

export type Scene = 'MainMenuScene' | 'GameScene';

export const useGame = (containerRef: React.RefObject<HTMLDivElement | null>) => {
  const initialized = useRef(false);
  const gameInstance = useRef<Phaser.Game | null>(null);
  const [currentScene, setCurrentScene] = useState<string>('');

  useEffect(() => {
    if (!initialized.current && containerRef.current) {
      gameInstance.current = createInstance(containerRef.current);
      gameInstance.current?.events?.on('sceneChanged', setCurrentScene);
      initialized.current = true;
    }

    return () => {
      gameInstance.current?.events?.off('sceneChanged', setCurrentScene);
      shutdownInstance();
      gameInstance.current = null;
      initialized.current = false;
    };
  }, [containerRef]);

  return { currentScene };
};
