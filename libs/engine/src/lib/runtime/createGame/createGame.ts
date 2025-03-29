import Phaser from 'phaser';
import { config } from '../../config/config';
import { sceneMap } from '../../config/scene.config';
import { setGameInstance } from '../gameInstance';

export const createGame = (container: HTMLElement | string) => {
  const game = new Phaser.Game({
    ...config,
    parent: container,
    scene: Object.values(sceneMap),
  });

  setGameInstance(game);

  (window as any).__kuchen = {
    getSceneKey: () => game.scene.getScenes(true)[0]?.scene.key,
    getGameInstance: () => game,
  };
};
