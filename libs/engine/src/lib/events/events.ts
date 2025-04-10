import Phaser from 'phaser';

export const eventBus = new Phaser.Events.EventEmitter();

export const registerSceneChangeHandler = (game: Phaser.Game): void => {
  eventBus.on('scene-change', (targetScene: string) => {
    const manager = game.scene;
    const current = manager.getScenes(true)[0];

    if (current?.scene.key !== targetScene) {
      manager.stop(current.scene.key);
      manager.start(targetScene);
    }
  });
};