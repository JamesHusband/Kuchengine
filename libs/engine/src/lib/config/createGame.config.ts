import { config } from './config';
import { sceneMap } from './scene.config';

export const createGameConfig = (
  parent: HTMLElement | string,
  scenes = Object.values(sceneMap),
): Phaser.Types.Core.GameConfig => ({
  ...config,
  parent,
  scene: scenes,
});
