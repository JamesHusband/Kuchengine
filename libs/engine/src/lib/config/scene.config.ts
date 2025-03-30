import { createScene, sceneManager } from '../scenes';

const MainMenuScene = createScene('MainMenuScene', {
  create(this: Phaser.Scene) {
    // Scene-specific create logic can go here
  },
});

const GameScene = createScene('GameScene', {
  create(this: Phaser.Scene) {
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
