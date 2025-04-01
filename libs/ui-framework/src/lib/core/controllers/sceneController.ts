import { gameEvents } from '@kuchen/engine';

export const sceneController = {
  changeTo: (key: string) => {
    gameEvents.emit('scene-change', key);
  },

  pauseGame: () => gameEvents.emit('game-paused'),
  resumeGame: () => gameEvents.emit('game-resumed'),
  restartGame: () => {
    gameEvents.emit('game-restart');
    gameEvents.emit('game-resumed');
  },
  openOptions: () => gameEvents.emit('open-options'),
  goToMainMenu: () => gameEvents.emit('scene-change', 'MainMenuScene'),
  goToGame: () => gameEvents.emit('scene-change', 'GameScene'),
};
