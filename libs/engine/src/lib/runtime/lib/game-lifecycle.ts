import Phaser from 'phaser';
import { getGame } from './game-instance';

export const initializeGame = (container: HTMLDivElement, config: any) => {
  const game = new Phaser.Game({
    type: Phaser.AUTO,
    width: config.width,
    height: config.height,
    parent: container,
    scene: config.scenes,
  });

  config.onReady?.(game);
};

export const destroyGame = () => {
  const game = getGame();
  if (game) {
    game.destroy(true);
  }
};

export const pauseGame = () => {
  const game = getGame();
  if (game) {
    game.scene.scenes.forEach((scene) => {
      if (scene.scene.isActive()) {
        scene.scene.pause();
      }
    });
  }
};

export const resumeGame = () => {
  const game = getGame();
  if (game) {
    game.scene.scenes.forEach((scene) => {
      if (scene.scene.isPaused()) {
        scene.scene.resume();
      }
    });
  }
};
