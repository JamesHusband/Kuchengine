import type { Scenes } from 'phaser';
import { sceneEvents } from '../../../scene-events';
export const handleSceneChange = (sceneManager: Scenes.SceneManager): void => {
  sceneEvents.on('scene-change', (target: string) => {
    const current = sceneManager.getScenes(true)[0];
    if (current?.scene.isActive()) {
      current.scene.stop();
    }
    sceneManager.start(target);
  });
};
