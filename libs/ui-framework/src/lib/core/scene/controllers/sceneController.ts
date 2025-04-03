import { systemEvents, sceneEvents } from '@core/events';

export const sceneController = {
  changeTo: (key: string) => {
    sceneEvents.emit('scene-change', key);
  },

  pauseGame: () => systemEvents.emit('game-paused', void 0),
  resumeGame: () => systemEvents.emit('game-resumed', void 0),
  restartGame: () => {
    systemEvents.emit('game-restart', void 0);
    systemEvents.emit('game-resumed', void 0);
  },
  openOptions: () => systemEvents.emit('open-options', void 0),
  goToMainMenu: () => sceneEvents.emit('scene-change', 'MainMenuScene'),
  goToGame: () => sceneEvents.emit('scene-change', 'GameScene'),
};
