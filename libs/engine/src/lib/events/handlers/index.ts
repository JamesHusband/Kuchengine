import type Phaser from 'phaser';
import { handleSceneChange } from './sceneChange/index.js';

export const initializeEventHandlers = (game: Phaser.Game) => {
  handleSceneChange(game.scene);
};
