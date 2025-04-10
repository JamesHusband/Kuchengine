import Phaser from 'phaser';
import { createMainMenuScene, createGameScene } from '@kuchen/engine';
import { registerSceneChangeHandler } from '../../events/events';
import { setGame, getGame, clearGame } from './game-instance';

let game: Phaser.Game | null = null;

export const GameConfig = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  backgroundColor: 'red',
};

export const initializeGame = (container: HTMLDivElement): void => {
  if (game) return;

  const config: Phaser.Types.Core.GameConfig = {
    ...GameConfig,
    parent: container,
    scene: [createMainMenuScene(), createGameScene()],
  };

  game = new Phaser.Game(config);

  const instance = game;

  instance.events.once('ready', () => {
    registerSceneChangeHandler(instance);
    instance.scene.start('MainMenu');
  });

  setGame(game);
};

export const destroyGame = () => {
  const game = getGame();
  if (!game) return;

  game.destroy(true);
  clearGame();
};
