import { createScene } from '../../utils';
import { eventBus } from '../../../../events';

export const createBootScene = () =>
  createScene('Boot', (scene) => {
    scene.add.text(250, 450, 'Boot Scene', {
      font: '20px Arial',
      color: '#ffffff',
    });

    scene.time.delayedCall(2000, () => {
      eventBus.emit('scene-change', 'MainMenu');
    });
  });
