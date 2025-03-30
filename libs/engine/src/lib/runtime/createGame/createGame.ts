import Phaser from 'phaser';
import { config } from '../../config/config';
import { sceneMap } from '../../config/scene.config';
import { setGameInstance } from '../gameInstance';
import { exposeTestHook } from '../../debug/exposeTestHook';

export const createGame = (container: HTMLElement | string) => {
  const game = new Phaser.Game({
    ...config,
    parent: container,
    scene: Object.values(sceneMap),
  });

  setGameInstance(game);

  // if (import.meta.env.MODE === 'test' || import.meta.env.DEV) {
  exposeTestHook();
  // }
};
