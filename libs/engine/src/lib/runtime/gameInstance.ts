import type Phaser from 'phaser';

let game: Phaser.Game | null = null;

export const setGame = (instance: Phaser.Game) => {
  game = instance;
};

export const getGame = (): Phaser.Game | null => game;

export const clearGame = () => {
  game = null;
};
