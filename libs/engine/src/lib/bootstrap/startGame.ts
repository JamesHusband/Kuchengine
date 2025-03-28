import Phaser from 'phaser';
import { config } from '../config/config';
import { sceneMap } from '../config/scene.config';
import { setGameInstance } from './gameInstance';

export const startGame = (container: HTMLElement | string) => {
  const game = new Phaser.Game({
    ...config,
    parent: container,
    scene: Object.values(sceneMap),
  });

  setGameInstance(game);
};
