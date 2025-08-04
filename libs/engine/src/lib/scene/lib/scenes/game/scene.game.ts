import { createScene } from '../../utils';
import { eventBus } from '../../../../events';

export const createGameScene = () =>
  createScene('Game', (scene) => {
    const rect = scene.add.rectangle(400, 300, 100, 100, 0xff0000);
    let isJumping = false;

    eventBus.on('jump', () => {
      if (isJumping) return;
      isJumping = true;
      scene.tweens.add({
        targets: rect,
        y: rect.y - 100,
        duration: 200,
        yoyo: true,
        ease: 'Power2',
        onComplete: () => {
          isJumping = false;
        },
      });
    });
  });
