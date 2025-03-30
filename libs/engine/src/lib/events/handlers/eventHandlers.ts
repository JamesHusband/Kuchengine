import Phaser from 'phaser';
import { gameEvents } from '../bus';

export const initializeEventHandlers = (game: Phaser.Game) => {
  gameEvents.on('scene-change', (sceneKey: string) => {
    const currentScene = game.scene.getScenes(true)[0];
    if (currentScene) {
      currentScene.scene.stop();
    }
    game.scene.start(sceneKey);
  });
};
