import { createScene, sceneManager } from '../scenes';

const PlaceholderScene = createScene('PlaceholderScene', {
  create(this: Phaser.Scene) {
    this.add.text(300, 280, '🚧 Placeholder Scene', {
      fontSize: '24px',
      color: '#ffffff',
    });
  },
});

sceneManager.registerScene(PlaceholderScene);

export const sceneMap = {
  PlaceholderScene,
};
