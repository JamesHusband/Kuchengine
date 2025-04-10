import Phaser from 'phaser';
import { setGame, getGame, clearGame } from './game-instance';

let game: Phaser.Game | null = null;

export const GameConfig = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  backgroundColor: 'red',
};

interface GameInitOptions {
  scenes: Phaser.Scene[];
  onReady?: (instance: Phaser.Game) => void;
  startScene?: string;
}

export const initializeGame = (container: HTMLDivElement, options: GameInitOptions): void => {
  if (game) return;

  const config: Phaser.Types.Core.GameConfig = {
    ...GameConfig,
    parent: container,
    scene: options.scenes,
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
