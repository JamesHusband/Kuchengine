import { gameEvents } from '../../bus';
import type { Scenes } from 'phaser';

export const handleSceneChange = (sceneManager: Scenes.SceneManager): void => {
  gameEvents.on('scene-change', (target: string) => {
    const current = sceneManager.getScenes(true)[0];
    if (current?.scene.isActive()) {
      current.scene.stop();
    }
    sceneManager.start(target);
  });
};
