import Phaser from 'phaser';
import { setGameInstance } from '../gameInstance';
import { exposeTestHook } from '../../debug/exposeTestHook';
import { initializeEventHandlers } from '../../events/handlers/eventHandlers';
import { createGameConfig } from '../../config/createGame.config';

export const createGame = (container?: HTMLElement | string) => {
  const config = createGameConfig(container || undefined);
  const game = new Phaser.Game(config);

  setGameInstance(game);
  initializeEventHandlers(game);

  exposeTestHook();
};
