import { gameEvents } from '@kuchen/engine';

export const sceneSystem = {
  changeTo: (key: string) => {
    gameEvents.emit('scene-change', key);
  },

  pauseGame: () => gameEvents.emit('game-paused'),
  resumeGame: () => gameEvents.emit('game-resumed'),
  goToMainMenu: () => gameEvents.emit('scene-change', 'MainMenuScene'),
  goToGame: () => gameEvents.emit('scene-change', 'GameScene'),
};
