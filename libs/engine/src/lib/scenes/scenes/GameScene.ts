import { createScene } from '../createScene';

export const GameScene = createScene('GameScene', {
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
