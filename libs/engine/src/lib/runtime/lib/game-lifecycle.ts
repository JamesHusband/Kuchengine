import Phaser from 'phaser';
import { setGame, getGame, clearGame } from './game-instance';

let game: Phaser.Game | null = null;

export const GameConfig = {
  type: Phaser.AUTO,
  backgroundColor: 'red',
};

interface GameInitOptions {
  scenes: Phaser.Scene[];
  onReady?: (instance: Phaser.Game) => void;
  startScene?: string;
  width: number;
  height: number;
}

export const initializeGame = (container: HTMLDivElement, options: GameInitOptions): void => {
  if (game) return;

  const config: Phaser.Types.Core.GameConfig = {
    ...GameConfig,
    parent: container,
    scene: options.scenes,
    width: options.width,
    height: options.height,
  };

  game = new Phaser.Game(config);
  const instance = game;

  instance.events.once('ready', () => {
    if (options.onReady) {
      options.onReady(instance);
    }

    if (options.startScene) {
      instance.scene.start(options.startScene);
    }
  });

  setGame(game);
};

export const destroyGame = () => {
  const game = getGame();
  if (!game) return;

  game.destroy(true);
  clearGame();
};
