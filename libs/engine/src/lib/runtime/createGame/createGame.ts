import Phaser from 'phaser';
import { setGameInstance } from '../gameInstance';
import { exposeTestHook } from '../../debug/exposeTestHook';
import { initializeEventHandlers } from '../../events/handlers/index';
import { createGameConfig } from '../../config/createGame.config';

export const createGame = (container?: HTMLElement | string): Phaser.Game => {
  const config = createGameConfig(container || undefined);
  const game = new Phaser.Game(config);

  setGameInstance(game);

  game.events.once('ready', () => {
    initializeEventHandlers(game);
  });

  exposeTestHook();

  return game;
};
