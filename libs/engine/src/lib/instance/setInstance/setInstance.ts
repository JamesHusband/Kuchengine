import type Phaser from 'phaser';

let Instance: Phaser.Game | null = null;

export const setInstance = (game: Phaser.Game) => {
  Instance = game;
};
export { Instance };
