import Phaser from 'phaser';
// import { exposeTestHook } from '../debug/exposeTestHook';
import { initializeEventHandlers } from '@core/events';
import { createGameConfig } from './config/createGame.config.js';
import { setInstance } from './setInstance.js';

export const createInstance = (container?: HTMLElement | string): Phaser.Game => {
  const config = createGameConfig(container || undefined);
  const game = new Phaser.Game(config);

  setInstance(game);

  game.events.once('ready', () => {
    initializeEventHandlers(game);
  });

  // exposeTestHook();

  return game;
};
