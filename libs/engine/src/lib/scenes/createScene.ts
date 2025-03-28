import { gameEvents } from '../events/events';

export type SceneLifecycle = {
  create: (scene: Phaser.Scene) => void;
  preload?: (scene: Phaser.Scene) => void;
  update?: (scene: Phaser.Scene, time: number, delta: number) => void;
  shutdown?: (scene: Phaser.Scene) => void;
};

export const createScene = (key: string, lifecycle: SceneLifecycle) => ({
  key,
  preload(this: Phaser.Scene) {
    lifecycle.preload?.(this);
  },
  create(this: Phaser.Scene) {
    gameEvents.emit('scene-ready', key);
    lifecycle.create(this);
  },
  update(this: Phaser.Scene, time: number, delta: number) {
    lifecycle.update?.(this, time, delta);
  },
  shutdown(this: Phaser.Scene) {
    lifecycle.shutdown?.(this);
  },
});
