import { createScene, sceneManager } from '../scenes';

const MainMenuScene = createScene('MainMenuScene', {
  create(this: Phaser.Scene) {
    const canvas = this.game.canvas;
    if (canvas) {
      canvas.style.display = 'none';
    }
  },
  shutdown(this: Phaser.Scene) {
    // Show the canvas when leaving MainMenuScene
    const canvas = this.game.canvas;
    if (canvas) {
      canvas.style.display = 'block';
    }
  },
});

const GameScene = createScene('GameScene', {
  create(this: Phaser.Scene) {
    const canvas = this.game.canvas;
    if (canvas) {
      canvas.style.display = 'block';
    }

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
