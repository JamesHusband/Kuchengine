import type Phaser from 'phaser';

let gameInstance: Phaser.Game | null = null;

export const setGameInstance = (game: Phaser.Game) => {
  gameInstance = game;
};

export const getGameInstance = () => gameInstance;

export const destroyGameInstance = () => {
  gameInstance?.destroy(true);
  gameInstance = null;
};
