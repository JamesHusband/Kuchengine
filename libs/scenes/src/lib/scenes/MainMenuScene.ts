import { createScene } from '../createScene';

export const MainMenuScene = createScene('MainMenuScene', {
  create(this: Phaser.Scene) {
    const canvas = this.game.canvas;
    if (canvas) {
      canvas.style.display = 'none';
    }
  },
  shutdown(this: Phaser.Scene) {
    const canvas = this.game.canvas;
    if (canvas) {
      canvas.style.display = 'block';
    }
  },
});
