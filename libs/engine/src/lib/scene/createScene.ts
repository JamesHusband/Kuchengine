import type Phaser from 'phaser';
import type { SceneConfig } from '../types';
import { gameEvents } from '../eventBus';

export const createScene = (key: string, config: Omit<SceneConfig, 'key'>): SceneConfig => ({
  key,
  preload(this: Phaser.Scene) {
    config.preload?.call(this);
  },
  create(this: Phaser.Scene) {
    gameEvents.emit('scene-ready', key);
    config.create?.call(this);
  },
  update(this: Phaser.Scene, time: number, delta: number) {
    config.update?.call(this, time, delta);
  },
  shutdown(this: Phaser.Scene) {
    config.shutdown?.call(this);
  },
});
