import type { Types } from 'phaser';
import { sceneMap } from '@kuchen/scenes';

export const createGameConfig = (container?: HTMLElement | string): Types.Core.GameConfig => ({
  type: Phaser.AUTO,
  parent: container,
  scene: Object.values(sceneMap),
  autoFocus: false,
  width: '100%',
  height: '100%',
  scale: {
    mode: Phaser.Scale.RESIZE,
    parent: container,
    width: '100%',
    height: '100%',
  },
});
