import Phaser from 'phaser';
import { setGameInstance } from '../gameInstance';
import { exposeTestHook } from '../../debug/exposeTestHook';
import { gameEvents } from '../../eventBus';
import { createGameConfig } from '../../config/createGame.config';

export const createGame = (container?: HTMLElement | string) => {
  const config = createGameConfig(undefined);
  const game = new Phaser.Game(config);

  setGameInstance(game);

  gameEvents.on('scene-change', (sceneKey: string) => {
    const currentScene = game.scene.getScenes(true)[0];
    if (currentScene) {
      currentScene.scene.stop();
    }
    game.scene.start(sceneKey);
  });

  exposeTestHook();
};
