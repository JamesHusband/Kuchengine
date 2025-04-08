import Phaser from 'phaser';
import { exposeTestHook } from '@core/debug';
import { initializeEventHandlers } from '@core/events';
import { createGameConfig } from './config/createGame.config';
import { setInstance } from './setInstance';

export const createInstance = (container?: HTMLElement | string): Phaser.Game => {
  const config = createGameConfig(container || undefined);
  const game = new Phaser.Game(config);

  setInstance(game);

  game.events.once('ready', () => {
    initializeEventHandlers(game);
  });

  exposeTestHook();

  return game;
};
