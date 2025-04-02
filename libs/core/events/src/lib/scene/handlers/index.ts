import type Phaser from 'phaser';
import { handleSceneChange } from './scenes/index.js';

export const initializeEventHandlers = (game: Phaser.Game) => {
  handleSceneChange(game.scene);
};
