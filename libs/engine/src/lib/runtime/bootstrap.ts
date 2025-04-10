import Phaser from 'phaser';
import { createMainMenuScene } from '../scenes/MainMenu';
import { createGameScene } from '../scenes/GameScene';
import { registerSceneChangeHandler } from '../events/events';
import { GameConfig } from './config';
import { setGame } from './gameInstance';

let game: Phaser.Game | null = null;

export const bootstrapGame = (container: HTMLDivElement): void => {
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

