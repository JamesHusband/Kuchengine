import { createScene, sceneManager } from '../scenes';
import { gameEvents } from '../eventBus';

const MainMenuScene = createScene('MainMenuScene', {
  create(this: Phaser.Scene) {
    gameEvents.emit('scene-change', 'MainMenuScene');
    this.add.text(300, 280, '🚧 Main Menu Scene', {
      fontSize: '24px',
      color: '#ffffff',
    });
  },
});

const GameScene = createScene('GameScene', {
  create(this: Phaser.Scene) {
    gameEvents.emit('scene-change', 'GameScene');
    this.add.text(300, 280, '🚧 Game Scene', {
      fontSize: '24px',
      color: '#ffffff',
    });
  },
});

sceneManager.registerScene(MainMenuScene);
sceneManager.registerScene(GameScene);

export const sceneMap = {
  MainMenuScene,
  GameScene,
};
